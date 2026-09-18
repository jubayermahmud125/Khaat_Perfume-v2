export type ProductSize = '4ML' | '6ML' | '10ML' | '15ML' | '30ML' | '50ML';

export const SIZES: ProductSize[] = ['6ML', '10ML', '15ML', '30ML', '50ML'];

export const ATTAR_SIZES: ProductSize[] = ['4ML', '6ML', '15ML'];

type ProductPriceKey =
  | 'price_4ml'
  | 'price_6ml'
  | 'price_10ml'
  | 'price_15ml'
  | 'price_30ml'
  | 'price_50ml';

export const SIZE_PRICE_MAP: Record<ProductSize, ProductPriceKey> = {
  '4ML': 'price_4ml',
  '6ML': 'price_6ml',
  '10ML': 'price_10ml',
  '15ML': 'price_15ml',
  '30ML': 'price_30ml',
  '50ML': 'price_50ml',
};

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  top_notes: string | null;
  heart_notes: string | null;
  base_notes: string | null;
  scent_tags: string | null;
  price_4ml: number;
  price_6ml: number;
  price_10ml: number;
  price_15ml: number;
  price_30ml: number;
  price_50ml: number;
  image_url: string | null;
  badge: string | null;
  is_bestseller: boolean;
  is_new_arrival: boolean;
  is_attar: boolean;
  in_stock: boolean;
  sort_order: number;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
}

export interface Combo {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  image_url: string | null;
  created_at: string;
}

export interface Review {
  id: string;
  product_id: string | null;
  customer_name: string;
  rating: number;
  review_text: string;
  is_featured: boolean;
  created_at: string;
}

export interface CartItem {
  id: string;
  product_id: string;
  product_name: string;
  product_slug: string;
  image_url: string;
  size: ProductSize;
  quantity: number;
  unit_price: number;
  is_combo: boolean;
}

export interface OrderData {
  customer_name: string;
  phone: string;
  address: string;
  city: string;
  payment_method: string;
  total_amount: number;
}

export function getPriceForSize(product: Product, size: ProductSize): number {
  const key = SIZE_PRICE_MAP[size];
  return product[key] as number;
}

export function getStartingPrice(product: Product): number {
  if (product.is_attar) return product.price_4ml;
  return product.price_6ml;
}
