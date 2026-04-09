import { Geist, Geist_Mono } from 'next/font/google'

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
    <div
      className={`min-h-screen min-w-full bg-slate-500 ${geistSans.variable} ${geistMono.variable}`}
    >
      <h2 className='text-4xl text-green-400'>Hello World</h2>
    </div>
  )
}
