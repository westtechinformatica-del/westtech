# Westtech — Tienda de Tecnología Argentina

Ecommerce moderno construido con Next.js 15, Tailwind CSS, TypeScript y Supabase.

## Stack tecnológico

- **Frontend**: Next.js 15 (App Router) + TypeScript
- **Estilos**: Tailwind CSS v4
- **Base de datos**: Supabase (PostgreSQL)
- **Despliegue**: Vercel
- **UI**: lucide-react, sonner
- **Formularios**: react-hook-form + zod

## Inicio rápido

```bash
npm install
cp .env.example .env.local
# editar .env.local con tus credenciales
npm run dev
```

## Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
NEXT_PUBLIC_WHATSAPP_NUMBER=5491112345678
NEXT_PUBLIC_SITE_URL=https://westtech.com.ar
```

## Estructura

```
src/
├── app/                 # Pages (App Router)
│   ├── page.tsx         # Homepage
│   ├── productos/       # Listing + [slug] detail
│   └── contacto/        # Contact page
├── components/
│   ├── layout/          # Navbar, Footer, WhatsAppButton
│   ├── home/            # HeroBanner, CategorySection, FeaturedProducts, PromoBanner
│   └── products/        # ProductCard, SearchBar, Filters
├── data/products.ts     # Catalog data (migrable to Supabase)
├── lib/                 # utils, whatsapp, supabase
└── types/index.ts       # TypeScript interfaces
```

## Deploy en Vercel

1. Push a GitHub
2. Conectar en vercel.com
3. Setear env vars en dashboard
4. Deploy automático en cada push a main

## Supabase SQL Schema

```sql
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  image TEXT,
  product_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  short_description TEXT,
  price BIGINT NOT NULL,
  price_usd INT NOT NULL,
  compare_at_price BIGINT,
  images TEXT[] DEFAULT '{}',
  category_slug TEXT REFERENCES categories(slug),
  tags TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  stock INT DEFAULT 0,
  rating DECIMAL(2,1) DEFAULT 5.0,
  review_count INT DEFAULT 0,
  badge TEXT CHECK (badge IN ('new','sale','hot','limited')),
  specs JSONB,
  whatsapp_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON products FOR SELECT USING (true);
CREATE POLICY "Public read" ON categories FOR SELECT USING (true);
```

## WhatsApp

El número se configura en `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5491112345678
```

## Roadmap

- [ ] Panel admin
- [ ] MercadoPago
- [ ] Carrito
- [ ] Reseñas
- [ ] Email marketing
