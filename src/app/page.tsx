import type { Metadata } from 'next'
import HeroBanner from '@/components/home/HeroBanner'
import CategorySection from '@/components/home/CategorySection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import PromoBanner from '@/components/home/PromoBanner'

export const metadata: Metadata = {
  title: 'Westtech | Tecnología Premium en Argentina',
  description:
    'Tu tienda de tecnología en Argentina. Notebooks, iPads, TV Boxes, proyectores y más. Envíos a todo el país.',
}

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
      <PromoBanner />
    </>
  )
}
