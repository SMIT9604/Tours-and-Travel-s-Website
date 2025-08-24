import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold" style={{ color: 'var(--on-surface)' }}>Contact us</h1>
          <p className="mt-2" style={{ color: 'color-mix(in srgb, var(--on-surface) 70%, transparent)' }}>
            We'd love to hear from you. Send us a message and we'll reply within 24 hours.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-sm mb-1" style={{ color: 'var(--on-surface)' }}>Name</label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700/70 px-4 py-3 focus:outline-none focus:ring-2"
                style={{ backgroundColor: 'var(--surface-elev)', color: 'var(--on-surface)', borderColor: 'var(--color-secondary)', outlineColor: 'var(--color-primary)' }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" style={{ color: 'var(--on-surface)' }}>Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700/70 px-4 py-3 focus:outline-none focus:ring-2"
                style={{ backgroundColor: 'var(--surface-elev)', color: 'var(--on-surface)', borderColor: 'var(--color-secondary)', outlineColor: 'var(--color-primary)' }}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" style={{ color: 'var(--on-surface)' }}>Message</label>
              <textarea
                className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700/70 px-4 py-3 min-h-32 focus:outline-none focus:ring-2"
                style={{ backgroundColor: 'var(--surface-elev)', color: 'var(--on-surface)', borderColor: 'var(--color-secondary)', outlineColor: 'var(--color-primary)' }}
                placeholder="Tell us about your plans..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-full px-6 py-3 font-medium shadow-sm hover:opacity-90 transition"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--surface)' }}
            >
              Send message
            </button>
          </form>
        </div>

        {/* Contact Info + Map */}
        <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 p-6 h-fit"
             style={{ backgroundColor: 'var(--surface-elev)', color: 'var(--on-surface)' }}>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--on-surface)' }}>Contact details</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3"><FiMapPin style={{ color: 'var(--color-accent)' }} /> Sadguru Heritage, Hathijan Circle, Ahmedabad</li>
            <li className="flex items-center gap-3"><FiPhone style={{ color: 'var(--color-accent)' }} /> +91 635174000</li>
            <li className="flex items-center gap-3"><FiMail style={{ color: 'var(--color-accent)' }} /> traveltours@gmail.com</li>
          </ul>

          {/* Google Map Embed */}
          <div className="mt-6 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.364699777364!2d72.6521!3d23.0215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86a23e2a35bb%3A0x123456789abcdef!2sRajshree%20Skyz%2C%20CTM%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1692458475000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Instagram Icon at Bottom */}
      <div className="mt-12 flex justify-center">
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
