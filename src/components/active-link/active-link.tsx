'use client'

import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
// import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  // const router = useRouter()
  // const isCurrentPath = router.asPath === href || router.asPath === rest.as

  const linkPath = typeof href === 'string' ? href : href.pathname
  const pathname = usePathname()
  const isActive = pathname === linkPath || pathname?.startsWith(`${linkPath}/`)

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        // isCurrentPath ? 'text-blue-200' : 'text-gray-100',
        isActive ? 'text-blue-200' : 'text-gray-100',
      )}
    >
      {children}
    </Link>
  )
}
