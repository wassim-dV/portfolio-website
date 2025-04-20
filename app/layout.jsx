import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wassim Dev',
  description:
    'A showcase of my work specializing in React.js, Tailwind CSS, and modern web development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
