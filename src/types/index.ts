export interface Product {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  price: number
  priceUSD: number
  compareAtPrice?: number
  images: string[]
  category: Category
  categorySlug: string
  tags: string[]
  features: string[]
  stock: number
  rating: number
  reviewCount: number
  badge?: 'new' | 'sale' | 'hot' | 'limited'
  whatsappMessage?: string
  specs?: Record<string, string>
}

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  image: string
  productCount: number
}

export interface Banner {
  id: string
  title: string
  subtitle: string
  cta: string
  ctaLink: string
  image: string
  badge?: string
  gradient: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface SearchFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest'
  inStock?: boolean
}
