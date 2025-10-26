import { fetchNotePosts, __fetchNoteInternal } from './fetchNote'

const NOTE_ENDPOINT = __fetchNoteInternal.NOTE_ENDPOINT

describe('fetchNotePosts', () => {
  const originalFetch = global.fetch

  afterEach(() => {
    jest.resetAllMocks()
    global.fetch = originalFetch
  })

  it('maps API response into Post objects and sorts by date desc', async () => {
    const mockFetch = jest.fn()
    global.fetch = mockFetch as unknown as typeof global.fetch

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: {
          contents: [
            {
              title: 'B',
              publishAt: '2024-01-02T00:00:00Z',
              url: 'https://note.com/example/b',
              hashtags: [{ hashtag: { name: '#tech' } }],
            },
            {
              title: 'A',
              publishAt: '2024-01-01T00:00:00Z',
              url: 'https://note.com/example/a',
              hashtags: [],
            },
          ],
          isLastPage: true,
        },
      }),
    } as Response)

    const posts = await fetchNotePosts()

    expect(mockFetch).toHaveBeenCalledWith(`${NOTE_ENDPOINT}1`, {
      next: { revalidate: 86400 },
    })
    expect(posts).toHaveLength(2)
    expect(posts.map((p) => p.title)).toEqual(['B', 'A'])
    expect(posts[0].tags).toEqual(['tech'])
    expect(posts.every((p) => p.filename.startsWith('note__'))).toBe(true)
  })

  it('deduplicates posts with identical URLs', async () => {
    const mockFetch = jest.fn()
    global.fetch = mockFetch as unknown as typeof global.fetch

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: {
          contents: [
            {
              title: 'First',
              publishAt: '2024-01-03T00:00:00Z',
              url: 'https://note.com/example/dup',
            },
            {
              title: 'Second',
              publishAt: '2024-01-02T00:00:00Z',
              url: 'https://note.com/example/dup',
            },
          ],
          isLastPage: true,
        },
      }),
    } as Response)

    const posts = await fetchNotePosts()
    expect(posts).toHaveLength(1)
    expect(posts[0].title).toBe('First')
  })

  it('returns posts collected so far when fetch throws', async () => {
    const mockFetch = jest.fn()
    global.fetch = mockFetch as unknown as typeof global.fetch
    mockFetch.mockRejectedValueOnce(new Error('network error'))

    const posts = await fetchNotePosts()
    expect(posts).toEqual([])
  })
})
