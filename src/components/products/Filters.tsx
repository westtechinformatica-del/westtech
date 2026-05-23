'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { SlidersHorizontal, X } from 'lucide-react'
import { categories } from '@/data/products'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: '', label: 'Relevancia' },
  { value: 'price-asc', label: 'Menor precio' },
  { value: 'price-desc', label: 'Mayor precio' },
  { value: 'rating', label: 'Mejor valorados' },
  { value: 'newest', label: 'Más nuevos' },
]

export default function Filters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get('categoria') || ''
  const currentSort = searchParams.get('orden') || ''
  const currentBadge = searchParams.get('badge') || ''

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    params.delete('page')
    router.push(`/productos?${params.toString()}`)
  }

  const clearAll = () => router.push('/productos')
  const hasFilters = currentCategory || currentSort || currentBadge

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Filtros</h3>
        </div>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 font-medium"
          >
            <X className="w-3 h-3" />
            Limpiar
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Categoría</p>
        <div className="space-y-1">
          <button
            onClick={() => updateFilter('categoria', '')}
            className={cn(
              'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
              !currentCategory
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-50'
            )}
          >
            Todos los productos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => updateFilter('categoria', cat.slug)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2',
                currentCategory === cat.slug
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Ordenar por</p>
        <div className="space-y-1">
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateFilter('orden', opt.value)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                currentSort === opt.value
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Badge filter */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Destacados</p>
        <div className="flex flex-wrap gap-2">
          {[
            { value: 'sale', label: '🏷️ Ofertas' },
            { value: 'new', label: '✨ Nuevos' },
            { value: 'hot', label: '🔥 Hot' },
          ].map((badge) => (
            <button
              key={badge.value}
              onClick={() => updateFilter('badge', currentBadge === badge.value ? '' : badge.value)}
              className={cn(
                'px-3 py-1.5 rounded-full text-xs font-medium transition-colors border',
                currentBadge === badge.value
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              )}
            >
              {badge.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
