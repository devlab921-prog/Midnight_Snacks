import { Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import LiveSection from './components/LiveSection'
import SpecialtySection from './components/SpecialtySection'
import HowItWorksSection from './components/HowItWorksSection'
import CTASection from './components/CTASection'
import TestimonialsSection from './components/TestimonialsSection'
import CoverageSection from './components/CoverageSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

import PrivacyPolicy from './components/PrivacyPolicy'

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <LiveSection />
      <SpecialtySection />
      <HowItWorksSection />
      <CTASection />
      <TestimonialsSection />
      <CoverageSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={<HomePage />}
      />

      {/* POLÍTICAS */}
      <Route
        path="/politicas"
        element={
          <>
            <NavBar />
            <PrivacyPolicy />
            <Footer />
            <FloatingWhatsApp />
          </>
        }
      />

    </Routes>
  )
}

export default App