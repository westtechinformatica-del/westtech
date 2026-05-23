import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import Filters from '@/components/products/Filters'
import SearchBar from '@/components/products/SearchBar'
import type { SearchFilters } from '@/types'

export const metadata: Metadata = {
  title: 'Productos | Westtech',
  description:
    'Catálogo completo de tecnología Westtech. Notebooks, iPads, TV Boxes, proyectores y accesorios al mejor precio.',
}

interface ProductsPageProps {
  searchParams: Promise<{
    q?: string
    categoria?: string
    orden?: string
    badge?: string
  }>
}

function filterAndSortProducts(filters: {
  q?: string
  categoria?: string
  orden?: string
  badge?: string
}) {
  let filtered = [...products]

  if (filters.q) {
    const q = filters.q.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  if (filters.categoria) {
    filtered = filtered.filter((p) => p.categorySlug === filters.categoria)
  }

  if (filters.badge) {
    filtered = filtered.filter((p) => p.badge === filters.badge)
  }

  switch (filters.orden) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating)
      break
    default:
      break
  }

  return filtered
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const filtered = filterAndSortProducts(params)

  const activeCategory = params.categoria
  const searchQuery = params.q

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-700 font-medium">Productos</span>
            {activeCategory && (
              <>
                <ChevronRight className="w-3 h-3" />
                <span className="text-gray-700 font-medium capitalize">{activeCategory}</span>
              </>
            )}
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {searchQuery ? `Resultados: "${searchQuery}"` : activeCategory ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}` : 'Todos los productos'}
              </h1>
              <p className="text-gray-500 mt-1">{filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}</p>
            </div>
            <SearchBar defaultValue={searchQuery} className="w-full sm:w-80" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0">
            <Suspense fallback={<div className="h-96 bg-white rounded-2xl animate-pulse" />}>
              <Filters />
            </Suspense>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No encontramos productos</h3>
                <p className="text-gray-500 mb-6">Intentá con otro término de búsqueda o revisá los filtros.</p>
                <Link
                  href="/productos"
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Ver todos los productos
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
