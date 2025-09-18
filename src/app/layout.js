import './globals.css'
import localFont from 'next/font/local'

const helveticaNow = localFont({
  src: [
    {
      path: '../../public/asset/font/HelveticaNowDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
})

export const metadata = {
  title: '2025©',
  description: 'by Raffa Hitipeuw',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={helveticaNow.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
