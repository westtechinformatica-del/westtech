import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/products'

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Categorías</h2>
            <p className="text-gray-500 mt-1">Encontrá lo que buscás</p>
          </div>
          <Link
            href="/productos"
            className="hidden sm:flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Ver todo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/productos?categoria=${category.slug}`}
              className="group flex flex-col items-center p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {category.icon}
              </div>
              <span className="text-sm font-semibold text-gray-800 text-center leading-tight">{category.name}</span>
              <span className="text-xs text-gray-400 mt-1">{category.productCount} productos</span>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
