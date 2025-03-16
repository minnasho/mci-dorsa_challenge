import Link from 'next/link'

type TNavLinkProps = {
  title: string
  href: string
  icon?: React.ReactNode
}
export const NavLink: React.FC<TNavLinkProps> = ({ title, href, icon }) => {
  return (
    <Link href={href} className="text-lg font-semibold flex gap-1">
      {icon && icon}
      {title}
    </Link>
  )
}
