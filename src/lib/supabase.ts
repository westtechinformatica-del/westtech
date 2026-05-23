import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          slug: string
          name: string
          description: string
          short_description: string
          price: number
          price_usd: number
          compare_at_price: number | null
          images: string[]
          category_slug: string
          tags: string[]
          features: string[]
          stock: number
          rating: number
          review_count: number
          badge: string | null
          specs: Record<string, string> | null
          whatsapp_message: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['products']['Insert']>
      }
      categories: {
        Row: {
          id: string
          slug: string
          name: string
          description: string
          icon: string
          image: string
          product_count: number
        }
        Insert: Omit<Database['public']['Tables']['categories']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['categories']['Insert']>
      }
    }
  }
}
