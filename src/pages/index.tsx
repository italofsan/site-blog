import { Geist, Geist_Mono } from 'next/font/google'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section/hero-section'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function Home() {
  return (
    <>
      <article className='flex flex-col'>
        <HeroSection />
      </article>
    </>
  )
}
