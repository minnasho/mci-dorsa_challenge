import Link from 'next/link'

type TNavLinkProps = {
  title: string
  href: string
  icon?: React.ReactNode
  className?: string
  isActive?: boolean
  isFooter?: boolean
}
export const NavLink: React.FC<TNavLinkProps> = ({
  title,
  href,
  icon,
  className,
  isFooter = false,
}) => {
  return (
    <Link
      href={href}
      className={`${isFooter ? 'px-1.5 py-1 text-sm' : 'px-3 py-2 text-lg font-semibold md:text-2xl'} flex items-center gap-1 rounded-full ${className}`}
    >
      {icon && icon}
      {title}
    </Link>
  )
}
