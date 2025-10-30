import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elisa Antoniello - Allestimento Scenico',
  description: 'Portfolio di Elisa Antoniello, studentessa del corso di Allestimento Scenico presso l\'Accademia Teatro alla Scala di Milano',
  keywords: 'allestimento scenico, teatro, La Scala, Milano, scenografia, illuminotecnica',
  authors: [{ name: 'Elisa Antoniello' }],
  openGraph: {
    title: 'Elisa Antoniello - Allestimento Scenico',
    description: 'Portfolio professionale di allestimento scenico e illuminotecnica teatrale',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
