const formatPrice = (raw) => {
  const normalized = String(raw).replace(/[^0-9.]/g, '')
  const value = Number(normalized)

  if (isNaN(value)) return '₹0'

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}


const trips = [
 
  {
    id: 'kedarnath',
    title: 'Kedarnath',
    description: 'Sacred Himalayan trek with divine vibes and breathtaking snowy peaks.',
    price: formatPrice('13999'),
    image: '/images/1.png',
    carouselImage: '/carousel/carousel1.jpg',
    brochure: '/brochures/kedarnath.pdf',
  },
  {
    id: 'saputara',
    title: 'Saputara',
    description: 'Gujarat’s hill station with misty hills, lakes, and serene sunset points.',
    price: formatPrice('3299'),
    image: '/images/2.png',
    carouselImage: '/carousel/carousel2.jpg',
    brochure: '/brochures/saputara.pdf',
  },
  {
    id: 'matheran',
    title: 'Matheran',
    description: 'No-vehicle hill retreat, toy trains, and panoramic valley views.',
    price: formatPrice('7499'),
    image: '/images/5.png',
    carouselImage: '/carousel/carousel5.jpg',
    brochure: '/brochures/matheran.pdf',
  },
  {
    id: 'goa',
    title: 'Goa',
    description: 'Beaches, nightlife, shacks, and the ultimate chill holiday vibes.',
    price: formatPrice('8499'),
    image: '/images/3.png',
    carouselImage: '/carousel/carousel3.jpg',
    brochure: '/brochures/goa.pdf',
  },
  {
    id: 'chandratal',
    title: 'Chandratal',
    description: 'A magical high-altitude lake reflecting endless stars and mountains.',
    price: formatPrice('15999'),
    image: '/images/6.png',
    carouselImage: '/carousel/carousel6.jpg',
    brochure: '/brochures/chandratal.pdf',
  },
  {
    id: 'udaipur',
    title: 'Udaipur',
    description: 'Romantic city of lakes, palaces, and royal Rajasthani charm.',
    price: formatPrice('3899'),
    image: '/images/7.png',
    carouselImage: '/carousel/carousel7.jpg',
    brochure: '/brochures/udaipur.pdf',
  },
  {
    id: 'kashi',
    title: 'Kashi',
    description: 'Spiritual capital with ghats, Ganga aarti, and timeless traditions.',
    price: formatPrice('12999'),
    image: '/images/4.png',
    carouselImage: '/carousel/carousel4.jpg',
    brochure: '/brochures/kashi.pdf',
  },
]

export default trips


