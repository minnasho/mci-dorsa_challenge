import { NavLink } from '../navLink'
import { Home } from '@/components/icons'

const navLinks = [
  { title: 'خانه', href: '/', isActive: true, children: [], icon: <Home /> },
  { title: 'فن‌دون', href: '/', isActive: false, children: [], icon: '' },
  { title: 'سرگرمی', href: '/', isActive: false, children: [], icon: '' },
  { title: 'پروفایل', href: '/', isActive: false, children: [], icon: '' },
]
export const Navbar = () => {
  return (
    <div className="hidden items-center justify-between gap-5 md:flex">
      {navLinks.map((link, idx) => (
        <NavLink
          key={idx}
          title={link.title}
          href={link.href}
          icon={link.icon}
        />
      ))}
    </div>
  )
}
