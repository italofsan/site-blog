import { Geist, Geist_Mono } from 'next/font/google'

import { FeatureSection } from '@/components/feature-section/feature-section'
import { SupportSection } from '@/components/support-section/support-section'
import { CustomerStorySection } from '@/components/customer-story-section'
import { HeroSection } from '@/components/hero-section/hero-section'
import { CallToAction } from '@/components/call-to-action'

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
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
    </>
  )
}
