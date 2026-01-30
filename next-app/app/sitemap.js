import { outcomes } from '@/data/outcomes'
import { problems } from '@/data/problems'
import { getAllPosts } from '@/lib/blog'

export default function sitemap() {
  const baseUrl = 'https://agilevelocity.com'

  // Static pages
  const staticPages = [
    '',
    '/outcomes',
    '/whats-in-your-way',
    '/path-to-agility',
    '/path-to-agility/navigator',
    '/path-to-agility/navigator/plans',
    '/path-to-agility/partner',
    '/recognition',
    '/training',
    '/insights',
    '/insights/case-studies',
    '/insights/webinars',
    '/insights/white-papers',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic outcome pages
  const outcomePages = outcomes.map((outcome) => ({
    url: `${baseUrl}/outcomes/${outcome.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Dynamic problem pages
  const problemPages = problems.map((problem) => ({
    url: `${baseUrl}/whats-in-your-way/${problem.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Dynamic blog pages
  const blogPosts = getAllPosts()
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...outcomePages, ...problemPages, ...blogPages]
}
