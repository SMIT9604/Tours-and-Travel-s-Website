import Lottie from 'lottie-react'
import traveler from '../assets/traveler.json'
import { FaInstagram } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold" style={{ color: 'var(--on-surface)' }}>About TravelTours</h1>
          <p className="mt-4 leading-relaxed" style={{ color: 'color-mix(in srgb, var(--on-surface) 75%, transparent)' }}>
            We design slow, mindful journeys that balance comfort and discovery. Our itineraries blend boutique stays, scenic routes, and local flavors—all in a modern, elegant style.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl" style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 30%, transparent)' }} />
          <img
            src="/images/travel_logo.jpg"   
            alt="Traveler"
            className="w-100 h-100 object-cover rounded-full shadow-lg"
          />
        {/* <Lottie animationData={traveler} loop autoplay className="w-full h-full" />  */}
        </div>
      </div>

      <div className="mt-12 flex justify-left">
        <a
          href="https://www.instagram.com/smit_9604/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:opacity-80 transition"
          style={{ color: 'var(--color-accent)' }}
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  )
}


