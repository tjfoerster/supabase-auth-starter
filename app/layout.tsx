import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navigation'
import SupabaseProvider from '@/context/supabase'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Supabase Auth Starter',
  description: 'Starter kit for serverless web apps with Supabase, NextJS 13, Typescript, Tailwind CSS and shadcn/ui.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  
  return (
    <SupabaseProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </SupabaseProvider>
  )
}
