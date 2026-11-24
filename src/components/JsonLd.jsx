// Renders schema.org structured data for search engines.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // `<` is escaped so the JSON can never close the script tag early
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\u003c') }}
    />
  );
}
