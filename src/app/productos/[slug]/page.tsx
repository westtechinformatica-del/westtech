import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Star, MessageCircle, Truck, Shield, CreditCard, Zap, CheckCircle } from 'lucide-react'
import { getProductBySlug, products } from '@/data/products'
import { formatPrice, formatPriceUSD, calculateDiscount } from '@/lib/utils'
import { productWhatsAppLink } from '@/lib/whatsapp'
import ProductCard from '@/components/products/ProductCard'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} | Westtech`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const discount = product.compareAtPrice
    ? calculateDiscount(product.price, product.compareAtPrice)
    : null

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/productos" className="hover:text-blue-600">Productos</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/productos?categoria=${product.categorySlug}`} className="hover:text-blue-600 capitalize">
              {product.category.name}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-700 line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Image */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 flex items-center justify-center min-h-96 relative">
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                {product.badge === 'new' ? 'NUEVO' : product.badge === 'sale' ? 'OFERTA' : product.badge === 'hot' ? '🔥 HOT' : 'LTD'}
              </span>
            )}
            {discount && (
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
                -{discount}%
              </span>
            )}
            <div className="text-[160px] leading-none">
              {product.category.icon}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <Link
                href={`/productos?categoria=${product.categorySlug}`}
                className="text-sm text-blue-600 font-medium hover:underline"
              >
                {product.category.name}
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviewCount} reseñas)</span>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-2xl p-5 mb-6">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                {product.compareAtPrice && (
                  <span className="text-xl text-gray-400 line-through">{formatPrice(product.compareAtPrice)}</span>
                )}
              </div>
              <p className="text-gray-500 text-sm">{formatPriceUSD(product.priceUSD)} USD · Precio en dólares referencial</p>
              {discount && (
                <p className="text-green-600 font-semibold text-sm mt-1">Ahorrás {discount}%</p>
              )}
            </div>

            {/* Short description */}
            <p className="text-gray-600 leading-relaxed mb-5">{product.description}</p>

            {/* Key features */}
            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">Características principales</p>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock */}
            {product.stock <= 5 && (
              <div className="flex items-center gap-2 text-orange-600 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                ¡Últimas {product.stock} unidades!
              </div>
            )}

            {/* CTA */}
            <div className="flex gap-3">
              <a
                href={productWhatsAppLink(product.name, product.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-base rounded-2xl transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5" />
                Consultar por WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { icon: Truck, label: 'Envío a todo el país' },
                { icon: Shield, label: 'Garantía oficial' },
                { icon: CreditCard, label: 'Cuotas sin interés' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5 p-3 bg-gray-50 rounded-xl text-center">
                  <item.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-gray-500 leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specs */}
        {product.specs && (
          <div className="bg-white rounded-3xl border border-gray-100 p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Especificaciones técnicas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex items-center py-3 border-b border-gray-50 last:border-0">
                  <span className="text-sm font-medium text-gray-500 w-40 shrink-0">{key}</span>
                  <span className="text-sm text-gray-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
