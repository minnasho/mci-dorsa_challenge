import { RightArrow } from '@/components/icons'
import { Logo } from '../logo'
import { Navbar } from '../navbar'
import { SearchBar } from '../searchBar'

type THeaderProps = {
  place?: 'home' | 'section' | 'profile' | 'login' | 'sectionPage'
  title?: string
  onBackClicked?: () => void
}
export const Header = ({
  place = 'home',
  title,
  onBackClicked,
}: THeaderProps) => {
  return (
    <>
      {place === 'home' && (
        <header className="fixed top-0 right-0 left-0 z-10 flex h-[var(--header-height)] w-full items-center justify-between bg-white px-3.5 py-4 shadow-[0_3px_11px_rgba(0,0,0,0.05)]">
          <div id="logoNavArea" className="flex items-center gap-10">
            <Logo />
            <Navbar />
          </div>
          <div id="searchArea" className="hidden cursor-pointer">
            <SearchBar />
          </div>
        </header>
      )}

      {place === 'sectionPage' && (
        <header className="fixed top-0 right-0 left-0 z-10 flex h-[var(--header-height)] w-full items-center gap-1 bg-white px-3.5 px-5 py-4 shadow-[0_3px_11px_rgba(0,0,0,0.05)] md:gap-4">
          <div
            id="sectionPageHeader"
            className="flex cursor-pointer items-center gap-10 px-2 md:px-4"
            onClick={onBackClicked && onBackClicked}
          >
            <RightArrow className="cursor-pointer text-xl font-bold sm:text-2xl md:text-3xl" />
          </div>
          {title && (
            <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
              {title}
            </h1>
          )}
        </header>
      )}
    </>
  )
}
