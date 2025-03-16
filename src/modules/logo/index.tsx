import Image from 'next/image'
import Link from 'next/link'
import DorsaLogo from '../../../public/logo.svg'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={DorsaLogo} alt="Dorsa Logo" width={64} height={64} />
    </Link>
  )
}
