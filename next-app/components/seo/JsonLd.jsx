// JSON-LD Schema markup for SEO
// This component adds structured data to help search engines understand the site

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agile Velocity',
    url: 'https://agilevelocity.com',
    logo: 'https://agilevelocity.com/opengraph-image',
    description: 'Path to Agility framework guides your transformation from chaos to predictable delivery. 15+ years helping Fortune 500 companies achieve speed, quality, and predictability.',
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/company/agile-velocity',
      'https://twitter.com/agilevelocity',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://agilevelocity.com/contact',
    },
    knowsAbout: [
      'Agile Transformation',
      'Enterprise Agility',
      'Agile Coaching',
      'Scrum',
      'SAFe',
      'Path to Agility',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Agile Velocity',
    url: 'https://agilevelocity.com',
    description: 'Path to Agility framework guides your transformation from chaos to predictable delivery.',
    publisher: {
      '@type': 'Organization',
      name: 'Agile Velocity',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }) {
  // items should be array of { name, url } objects
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({ name, description, provider = 'Agile Velocity' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://agilevelocity.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ questions }) {
  // questions should be array of { question, answer } objects
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
