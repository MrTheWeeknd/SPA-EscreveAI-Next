import Hero from '../components/Hero'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import Features from '../components/Features'
import BackToTop from '../components/BackToTop'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className=" text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <CTA />
      <BackToTop />
      <Footer />
    </div>
  )
}
