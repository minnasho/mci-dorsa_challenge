import { Navbar } from '../navbar'

export const Footer = () => {
  return (
    <footer className="fixed right-0 bottom-0 left-0 z-10 flex h-[var(--header-height)] w-full items-center justify-center bg-white px-4 py-2 shadow-[0_3px_11px_rgba(0,0,0,0.05)] lg:hidden">
      <Navbar isFooter={true} />
    </footer>
  )
}
