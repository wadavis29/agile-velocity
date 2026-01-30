import { getFilteredPaginatedPosts } from '@/lib/blog'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)

  const page = parseInt(searchParams.get('page') || '1', 10)
  const limit = Math.min(Math.max(parseInt(searchParams.get('limit') || '12', 10), 1), 50)
  const search = searchParams.get('search') || ''
  const category = searchParams.get('category') || ''

  const result = getFilteredPaginatedPosts({ page, limit, search, category })

  return NextResponse.json(result)
}
