export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Email Cleaner",
    "applicationCategory": "Productivity",
    "offers": {
      "@type": "Offer",
      "price": "15.90",
      "priceCurrency": "BRL"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

