import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { featuredProducts } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Lo más vendido</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Productos destacados</h2>
          </div>
          <Link
            href="/productos"
            className="hidden sm:flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            Ver todo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
