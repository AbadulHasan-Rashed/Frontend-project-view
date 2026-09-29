import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatusBoard from './components/StatusBoard.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import TrackingSection from './components/TrackingSection.jsx'
import Departments from './components/Departments.jsx'
import Stats from './components/Stats.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <StatusBoard />
        <HowItWorks />
        <TrackingSection />
        <Departments />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
