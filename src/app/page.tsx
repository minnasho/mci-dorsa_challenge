// import Carousel from '@/modules/carousel'
import { Header } from '@/modules/header'
import { HomePageContent } from '@/modules/homePageContent'
// import { Section } from '@/modules/section'

export default function Home() {
  return (
    <main className="container mx-auto mt-[64px] flex flex-col items-center gap-[32px] sm:items-start">
      <>
        <Header place={'home'} />
        <HomePageContent />
      </>
    </main>
  )
}
