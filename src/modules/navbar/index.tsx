'use client'
import { NavLink } from '../navLink'
import { FanClub, Home, MatchCup, Profile } from '@/components/icons'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    title: 'خانه',
    href: '/',
    isActive: true,
    children: [],
    className: 'hover:bg-Light-purple hover:text-purple',
    bgColor: 'bg-Light-purple',
    color: 'text-purple',
    icon: <Home />,
  },
  {
    title: 'فن‌دون',
    href: '/community',
    isActive: false,
    children: [],
    className: 'hover:bg-Light-orange hover:text-orange',
    bgColor: 'bg-Light-orange',
    color: 'text-orange',
    icon: <FanClub />,
  },
  {
    title: 'سرگرمی',
    href: '/entertainment',
    isActive: false,
    children: [],
    className: 'hover:bg-Light-blue hover:text-blue',
    bgColor: 'bg-Light-blue',
    color: 'text-blue',
    icon: <MatchCup />,
  },
  {
    title: 'پروفایل',
    href: '/profile',
    isActive: false,
    children: [],
    className: 'hover:bg-Light-green hover:text-green',
    bgColor: 'bg-Light-green',
    color: 'text-green',
    icon: <Profile />,
  },
]
type TNavbarProps = {
  isFooter?: boolean
}
export const Navbar = ({ isFooter = false }: TNavbarProps) => {
  const pathName = usePathname()
  return (
    <div
      className={`${isFooter ? 'flex md:hidden' : 'hidden md:flex'} items-center justify-between gap-5`}
    >
      {navLinks.map((link, idx) => (
        <NavLink
          key={idx}
          title={link.title}
          href={link.href}
          icon={link.icon}
          className={`${link.className} ${link.href === pathName ? [link.bgColor, link.color].join(' ') : ''}`}
          isActive={link.href === pathName}
          isFooter={isFooter}
        />
      ))}
    </div>
  )
}
