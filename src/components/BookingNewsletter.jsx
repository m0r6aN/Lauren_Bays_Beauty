import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'

export const BOOKING_FORM_URL = 'https://clients.mangomint.com/forms/470523/97'

const BookingNewsletter = ({ onOpenForm = () => {} }) => {
  return (
    <section id="book" className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,178,153,0.2),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight" style={{ color: '#344c52' }}>
              Begin Your Beauty Transformation
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              Complete the secure Mangomint consultation form before your visit. You can fill it out right here or open
              it in a separate window if you prefer.
            </p>
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  type="button"
                  onClick={onOpenForm}
                  className="relative inline-flex items-center gap-2 px-10 py-5 text-base font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blush/40 bg-white"
                  style={{ color: '#344c52', border: '3px solid #a97f74' }}
                >
                  <span className="relative z-10">Open Form In Modal</span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blush-light/0 via-blush-light/30 to-blush-light/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </Button>
              </motion.div>

              <Button
                asChild
                variant="link"
                className="px-0 text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground"
              >
                <a
                  href={BOOKING_FORM_URL}
                  data-company-id="470523"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Form In New Window
                </a>
              </Button>
              <p className="text-sm text-muted-foreground max-w-sm">
                The form opens securely in our Mangomint portal. Use the modal for a quick preview or launch the full
                window option to complete it at your own pace.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
    </section>
  )
}

export default BookingNewsletter
