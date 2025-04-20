import SectionPage from './components/SectionPage'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params // Access dynamic route params
  const [sectionId, sectionTitle] = slug

  return <SectionPage sectionId={sectionId} sectionTitle={sectionTitle} />
}
