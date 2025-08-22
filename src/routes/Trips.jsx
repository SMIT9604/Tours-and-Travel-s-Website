import TripCard from '../ui/TripCard.jsx'
import trips from '../trips/data.js'

export default function TripsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold" style={{ color: 'var(--on-surface)' }}>All trips</h1>
      <p className="mt-2" style={{ color: 'color-mix(in srgb, var(--on-surface) 70%, transparent)' }}>Choose from our curated selection of gentle adventures.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((t) => (
          <TripCard key={t.id} trip={t} />
        ))}
      </div>
    </section>
  )
}


