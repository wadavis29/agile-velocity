export default function robots() {
  // TEMPORARY: Block all indexing for client review
  // TODO: Remove this before going live
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  }
}
