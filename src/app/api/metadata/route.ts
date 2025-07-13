import { NextRequest, NextResponse } from 'next/server'

type ResponseBody =
  | {
      title: string
    }
  | { error: string }

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name')
  if (!name) {
    return NextResponse.json<ResponseBody>(
      { error: 'name is required' },
      { status: 400 },
    )
  }

  // /posts/{name} のHTMLを取得
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'
  const res = await fetch(`${baseUrl}/posts/${name}`)
  if (!res.ok) {
    return NextResponse.json<ResponseBody>(
      { error: 'not found' },
      { status: 404 },
    )
  }
  const html = await res.text()

  // <title>タグをパース
  const match = html.match(/<title>(.*?)<\/title>/i)
  if (!match || match[1] === null) {
    return NextResponse.json<ResponseBody>(
      { error: 'title not found' },
      { status: 404 },
    )
  }

  return NextResponse.json<ResponseBody>({ title: match[1] })
}
