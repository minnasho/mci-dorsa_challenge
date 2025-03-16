import { Logo } from '../logo'
import { Navbar } from '../navbar'
import { SearchBar } from '../searchBar'

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-[var(--header-height)] w-full items-center justify-between bg-white px-3.5 px-5 py-4 shadow-[0_3px_11px_rgba(0,0,0,0.05)]">
      <div id="logoNavArea" className="flex items-center gap-10">
        <Logo />
        <Navbar />
      </div>
      <div id="searchArea" className="hidden md:block">
        <SearchBar />
      </div>
    </header>
  )
}
