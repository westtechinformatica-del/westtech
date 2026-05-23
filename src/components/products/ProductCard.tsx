'use client'

import Link from 'next/link'
import { MessageCircle, Star, ShoppingBag, Zap } from 'lucide-react'
import { cn, formatPrice, formatPriceUSD, calculateDiscount } from '@/lib/utils'
import { productWhatsAppLink } from '@/lib/whatsapp'
import type { Product } from '@/types'

const badgeConfig = {
  new: { label: 'NUEVO', className: 'bg-emerald-500 text-white' },
  sale: { label: 'OFERTA', className: 'bg-red-500 text-white' },
  hot: { label: '🔥 HOT', className: 'bg-orange-500 text-white' },
  limited: { label: 'ÚLTIMAS UNIDADES', className: 'bg-purple-500 text-white' },
}

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export default function ProductCard({ product, featured }: ProductCardProps) {
  const discount = product.compareAtPrice
    ? calculateDiscount(product.price, product.compareAtPrice)
    : null

  const badge = product.badge ? badgeConfig[product.badge] : null

  return (
    <div
      className={cn(
        'group relative bg-white rounded-2xl border border-gray-100 overflow-hidden',
        'hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
        featured && 'shadow-md'
      )}
    >
      {/* Badge */}
      {badge && (
        <span
          className={cn(
            'absolute top-3 left-3 z-10 text-xs font-bold px-2.5 py-1 rounded-full',
            badge.className
          )}
        >
          {badge.label}
        </span>
      )}

      {/* Discount badge */}
      {discount && (
        <span className="absolute top-3 right-3 z-10 text-xs font-bold px-2.5 py-1 rounded-full bg-red-500 text-white">
          -{discount}%
        </span>
      )}

      {/* Image placeholder */}
      <Link href={`/productos/${product.slug}`}>
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
          <div className="text-8xl opacity-20 group-hover:scale-110 transition-transform duration-500">
            {product.category.icon}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl group-hover:scale-105 transition-transform duration-300">
              {product.category.icon}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link href={`/productos/${product.slug}`} className="group/title">
            <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover/title:text-blue-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>

        <p className="text-xs text-gray-500 mb-2 line-clamp-1">{product.shortDescription}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3 h-3',
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-200 fill-gray-200'
                )}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400">{formatPriceUSD(product.priceUSD)} USD</span>
        </div>

        {/* Stock warning */}
        {product.stock <= 5 && product.stock > 0 && (
          <p className="text-xs text-orange-500 font-medium mb-3 flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Solo {product.stock} disponibles
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={productWhatsAppLink(product.name, product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded-xl transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Consultar
          </a>
          <Link
            href={`/productos/${product.slug}`}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-semibold rounded-xl transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}
