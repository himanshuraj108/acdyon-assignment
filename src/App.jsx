import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import DashboardPreview from './components/sections/DashboardPreview'
import HowItWorks from './components/sections/HowItWorks'
import Programs from './components/sections/Programs'
import CTASection from './components/sections/CTASection'
import EasterEgg from './components/ui/EasterEgg'

export default function App() {
  return (
    <div className="min-h-screen font-body bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <HowItWorks />
        <Programs />
        <CTASection />
      </main>
      <Footer />
      <EasterEgg />
    </div>
  )
}
