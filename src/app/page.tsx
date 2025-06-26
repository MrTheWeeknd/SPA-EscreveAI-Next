import Hero from '../components/Hero'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import Features from '../components/Features'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="text-black">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
