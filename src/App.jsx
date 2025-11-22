import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'
import logoMark from './assets/LogoMark-4.png'

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
              className="flex items-center gap-2 lb-link"
            >
              <Phone className="w-4 h-4 text-blush" />
              678-819-7200
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <img src={logoMark} alt="Lauren Bays Beauty" className="h-16 w-auto" />           
          </div>
        </div>
      </motion.nav>

      <main className="pt-[9rem]">
        <section className="relative min-h-[calc(100vh-9rem)] flex items-center lb-hero-background lb-sparkle overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
          <div className="relative z-10 w-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 text-center">
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight"
                style={{ color: '#3F1E42' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                We're Just Getting Started
              </motion.h1>
              <motion.div
                className="mt-8 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
              >
                <p className="text-xl md:text-2xl">
                  We're thrilled to welcome you to Lauren Bays Beauty! Our doors are newly open, and we're building something
                  truly special.
                </p>
                <p>
                  Stay tuned as we grow our team, expand our services, and continue crafting the luxury experience you deserve.
                  We are hiring! If you would like to join our team, please submit your resume to{' '}
                  <a href="mailto:admin@laurenbaysbeauty.com" className="lb-link">
                    admin@laurenbaysbeauty.com
                  </a>
                  .
                </p>
              </motion.div>
              <motion.div
                className="mt-10 flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              >
                <motion.a
                  href="https://booking.mangomint.com/470523"
                  className="inline-flex items-center justify-center px-10 py-4 text-base md:text-lg font-semibold lb-btn-primary cursor-pointer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Book Your Treatment &rarr;
                </motion.a>
                <motion.button
                  onClick={() => setShowNewsletter(true)}
                  className="inline-flex items-center justify-center px-10 py-4 text-base md:text-lg font-semibold lb-btn-secondary cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Join Email Updates &rarr;
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {showNewsletter && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 lb-mangomint-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowNewsletter(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

          <motion.div
            className="
        relative
        bg-white/95
        rounded-[36px]
        shadow-[0_25px_60px_rgba(0,0,0,0.18)]
        border
        border-[rgba(198,170,123,0.25)]  /* soft gold border */
        overflow-hidden
        flex
        flex-col
      "
            style={{
              maxWidth: '900px',
              width: '90vw',
              maxHeight: '800px',
              height: '90vh',
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowNewsletter(false)}
              className="
          absolute top-4 right-4 z-10
          p-2 rounded-full
          bg-white/80 backdrop-blur
          border border-[#e8dfdc]      /* rose pale */
          shadow-sm
          hover:bg-white
          hover:shadow-md
          transition
        "
            >
              <svg className="w-5 h-5 text-[#444]" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center py-6 px-8 border-b border-[#e8dfdc] bg-[#f1e9cf]/40">
              <div className="text-2xl font-semibold tracking-wide text-[#a68074]">Lauren Bays Beauty</div>              
            </div>

            {/* iFrame wrapper with gradient border */}
            <div className="flex-1 p-4 sm:p-6 bg-[#fdf9f5]">
              <div className="lb-gradient-border w-full h-full">
                <div className="lb-gradient-border-inner w-full h-full rounded-2xl shadow-inner overflow-hidden">
                  <iframe
                    src="https://mangomint.co/BAP074"
                    className="w-full h-full lb-mangomint-frame"
                    style={{ border: 'none' }}
                    title="Stay in the Loop Newsletter"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default App
