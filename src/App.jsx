import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'
import heroImage from './assets/background.png'
import logoFadeLeftRight from './assets/logo_fade_left_right.png'
import logoFadeRightLeft from './assets/logo_fade_right_left.png'
import logoMedium from './assets/logo_medium.png'
import logoPattern from './assets/logo_pattern.png'

function App() {
  const [showNewsletter, setShowNewsletter] = useState(false)

  useEffect(() => {
    // Set up Mangomint configuration
    window.Mangomint = window.Mangomint || {}
    window.Mangomint.CompanyId = 470523

    // Load the Mangomint script
    const script = document.createElement('script')
    script.src = 'https://booking.mangomint.com/app.js'
    script.async = true
    script.onload = () => {
      console.log('Mangomint script loaded')
    }
    script.onerror = () => {
      console.error('Failed to load Mangomint script')
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="hidden lg:block border-b border-border/60">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-xs tracking-[0.4em] uppercase text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blush" />
              4840 Roswell Rd NE #E-250 - Atlanta, GA 30342
            </span>
            <a
              href="tel:+16788197200"
              className="flex items-center gap-2 text-foreground hover:text-blush transition-colors"
            >
              <Phone className="w-4 h-4 text-blush" />
              678-819-7200
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <img src={logoMedium} alt="Lauren Bays Beauty" className="h-16 w-auto" />           
          </div>
        </div>
      </motion.nav>

      <main className="pt-[9rem]">
        <section className="relative h-[calc(100vh-9rem)] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center scale-110"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
            <div
              className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
              style={{
                backgroundImage: `url(${logoPattern})`,
                backgroundSize: '220px',
                backgroundRepeat: 'repeat'
              }}
            />
            <img
              src={logoFadeLeftRight}
              alt=""
              aria-hidden="true"
              className="absolute -top-20 left-[-12rem] w-[36rem] opacity-25 mix-blend-multiply"
            />
            <img
              src={logoFadeRightLeft}
              alt=""
              aria-hidden="true"
              className="absolute bottom-[-6rem] right-[-12rem] w-[40rem] opacity-25 mix-blend-multiply"
            />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 w-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight"
                style={{ color: '#3F1E42' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                We're Just Getting Started
              </motion.h1>
              <motion.p
                className="mt-10 text-lg md:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}>
                We're thrilled to welcome you to Lauren Bays Beauty! Our doors are newly open, and we're building something 
                truly special. Stay tuned as we grow our team, expand our services, and continue crafting the luxury experience 
                you deserve. We are hiring! If you would like to join our team, please submit your resume to <a href="mailto:admin@laurenbaysbeauty.com" className="text-blush underline">admin@laurenbaysbeauty.com</a>.
              </motion.p>
              <motion.div
                className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                <motion.a
                  href="https://booking.mangomint.com/470523"
                  className="inline-block rounded-3xl bg-white hover:bg-white/90 px-12 py-6 text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ border: '2px solid #e7c8c8', color: '#3F1E42' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Book Your Appointment
                </motion.a>
                <motion.button
                  onClick={() => setShowNewsletter(true)}
                  className="inline-block rounded-3xl bg-white hover:bg-white/90 px-12 py-6 text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  style={{ border: '2px solid #e7c8c8', color: '#3F1E42' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Receive Email Updates
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {showNewsletter && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowNewsletter(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl"
            style={{ width: '900px', height: '800px' }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowNewsletter(false)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://mangomint.co/BAP074"
              style={{ border: 'none', width: '100%', height: '100%', borderRadius: '24px' }}
              title="Stay in the Loop Newsletter"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default App
