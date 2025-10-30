import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import PortfolioPreview from '@/components/PortfolioPreview'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <PortfolioPreview />
      <Skills />
      <Footer />
      <Chatbot />
    </main>
  )
}
