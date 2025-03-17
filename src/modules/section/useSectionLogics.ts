import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useSectionLogics = () => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    localStorage.setItem('scrollY', window.scrollY.toString())
    router.push(href)
  }

  useEffect(() => {
    const scrollY = localStorage.getItem('scrollY')
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY, 10))
    }
  }, [])

  return { handleNavigation }
}
