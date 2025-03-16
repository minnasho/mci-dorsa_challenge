export default function SectionPage({ params }) {
  const { sectionId, sectionTitle } = params // Access dynamic route params

  return (
    <div className="mt-20">
      <h1>
        SectionPage: {sectionId} - {decodeURIComponent(sectionTitle)}
      </h1>
    </div>
  )
}
