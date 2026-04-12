import { CustomerStorySection } from '@/templates/landing-page/sections/customer-story-section'
import { HeroSection } from '@/templates/landing-page/sections/hero-section/hero-section'
import { FeatureSection } from '@/templates/landing-page/sections/feature-section'
import { SupportSection } from '@/templates/landing-page/sections/support-section'
import { CallToAction } from '@/templates/landing-page/sections/call-to-action'

export const LandingPage = () => {
  return (
    <article className='flex flex-col gap-10 md:gap-20'>
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
}
