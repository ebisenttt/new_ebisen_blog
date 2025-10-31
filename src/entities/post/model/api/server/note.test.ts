import { fetchNotePosts, __fetchNoteInternal } from './note'
import { encodeExternalFilename } from '../../helpers'

describe('fetchNotePosts', () => {
  const originalFetch = global.fetch
  let fetchMock: jest.Mock

  beforeEach(() => {
    fetchMock = jest.fn()
    Object.defineProperty(global, 'fetch', {
      configurable: true,
      writable: true,
      value: fetchMock,
    })
  })

  afterEach(() => {
    fetchMock.mockReset()
    if (originalFetch) {
      Object.defineProperty(global, 'fetch', {
        configurable: true,
        writable: true,
        value: originalFetch,
      })
    } else {
      Reflect.deleteProperty(global, 'fetch')
    }
  })

  function mockResponse(body: unknown, ok = true): Response {
    return {
      ok,
      json: async () => body,
    } as Response
  }

  it('collects, filters, deduplicates, and sorts posts across pages', async () => {
    const pageOne = {
      data: {
        contents: [
          {
            title: 'Older Post',
            publishAt: '2024-06-20',
            url: 'https://note.com/example/older',
            hashtags: [{ hashtag: { name: '#tag-one' } }],
          },
          {
            title: 'Duplicate In Page',
            publishAt: '2024-06-19',
            url: 'https://note.com/example/older',
          },
          {
            title: null,
            publishAt: '2024-06-19',
            url: null,
          },
        ],
        isLastPage: false,
      },
    }

    const pageTwo = {
      data: {
        contents: [
          {
            name: 'Newest Post',
            createdAt: '2024-06-22',
            noteUrl: 'https://note.com/example/newest',
          },
        ],
        isLastPage: true,
      },
    }

    fetchMock
      .mockResolvedValueOnce(mockResponse(pageOne))
      .mockResolvedValueOnce(mockResponse(pageTwo))

    const posts = await fetchNotePosts()

    expect(fetchMock).toHaveBeenCalledTimes(2)
    expect(posts).toHaveLength(2)
    expect(posts[0]).toEqual({
      title: 'Newest Post',
      date: '2024-06-22',
      content: '',
      filename: encodeExternalFilename('https://note.com/example/newest'),
      tags: [],
    })
    expect(posts[1]).toEqual({
      title: 'Older Post',
      date: '2024-06-20',
      content: '',
      filename: encodeExternalFilename('https://note.com/example/older'),
      tags: ['tag-one'],
    })
  })

  it('returns empty list when fetch rejects', async () => {
    fetchMock.mockRejectedValueOnce(new Error('network error'))

    const posts = await fetchNotePosts()

    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(posts).toEqual([])
  })

  it('stops when response is not ok', async () => {
    fetchMock.mockResolvedValueOnce(mockResponse({}, false))

    const posts = await fetchNotePosts()

    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(posts).toEqual([])
  })
})

describe('__fetchNoteInternal helpers', () => {
  const { pickTitle, pickDate, pickUrl } = __fetchNoteInternal

  it('selects fallbacks when primary fields are missing', () => {
    const item: Parameters<typeof pickTitle>[0] = {
      name: 'fallback title',
      createdAt: '2024-01-02',
      noteUrl: 'https://note.com/example/fallback',
    }

    expect(pickTitle(item)).toBe('fallback title')
    expect(pickDate(item)).toBe('2024-01-02')
    expect(pickUrl(item)).toBe('https://note.com/example/fallback')
  })
})
