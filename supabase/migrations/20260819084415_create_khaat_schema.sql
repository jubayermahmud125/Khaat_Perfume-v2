/*
# KHAAT Perfume Store — Initial Schema

1. New Tables
- `categories`: Scent families (Fresh, Aquatic, Sweet, Woody, Floral, etc.)
- `products`: Individual perfumes with notes, pricing per size, stock status
- `product_categories`: Join table for product ↔ category (many-to-many)
- `combos`: Bundle deals (e.g. Fresh Summer Combo)
- `combo_items`: Which products are in each combo
- `reviews`: Customer reviews with rating and text
- `orders`: Customer order records (name, phone, address, payment method)
- `order_items`: Individual line items in an order (product, size, qty, price)

2. Pricing
- Products store prices for 5 sizes: 6ML, 10ML, 15ML, 30ML, 50ML as integer columns (BDT taka).
- Combos store a single combo price.

3. Security
- RLS enabled on all tables.
- This is a no-auth storefront: anon + authenticated can read all catalog data (products, categories, combos, reviews).
- Only anon + authenticated can INSERT orders and order_items (customers placing orders).
- Orders cannot be updated or deleted by customers (no UPDATE/DELETE policy on orders/order_items).
- Products, categories, combos, reviews are read-only for anon (no INSERT/UPDATE/DELETE policies).

4. Notes
- All prices in Bangladeshi Taka (BDT), stored as integers.
- Products have a `badge` field for labels like "Bestseller", "New Arrival", etc.
- Products have `is_bestseller` and `is_new_arrival` boolean flags for easy filtering.
*/

-- Categories
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text,
  icon text,
  created_at timestamptz DEFAULT now()
);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  top_notes text,
  heart_notes text,
  base_notes text,
  scent_tags text,
  price_6ml integer NOT NULL DEFAULT 200,
  price_10ml integer NOT NULL DEFAULT 300,
  price_15ml integer NOT NULL DEFAULT 400,
  price_30ml integer NOT NULL DEFAULT 750,
  price_50ml integer NOT NULL DEFAULT 1300,
  image_url text,
  badge text,
  is_bestseller boolean NOT NULL DEFAULT false,
  is_new_arrival boolean NOT NULL DEFAULT false,
  in_stock boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Product ↔ Categories (many-to-many)
CREATE TABLE IF NOT EXISTS product_categories (
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, category_id)
);

-- Combos
CREATE TABLE IF NOT EXISTS combos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  price integer NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Combo items
CREATE TABLE IF NOT EXISTS combo_items (
  combo_id uuid NOT NULL REFERENCES combos(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  PRIMARY KEY (combo_id, product_id)
);

-- Reviews
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  customer_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  is_featured boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Orders
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  payment_method text NOT NULL DEFAULT 'Cash on Delivery',
  total_amount integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'Pending',
  created_at timestamptz DEFAULT now()
);

-- Order items
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  product_name text NOT NULL,
  size text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  unit_price integer NOT NULL,
  line_total integer NOT NULL
);

-- Enable RLS on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE combos ENABLE ROW LEVEL SECURITY;
ALTER TABLE combo_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Categories: read-only for anon
DROP POLICY IF EXISTS "anon_read_categories" ON categories;
CREATE POLICY "anon_read_categories" ON categories FOR SELECT
  TO anon, authenticated USING (true);

-- Products: read-only for anon
DROP POLICY IF EXISTS "anon_read_products" ON products;
CREATE POLICY "anon_read_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

-- Product categories: read-only for anon
DROP POLICY IF EXISTS "anon_read_product_categories" ON product_categories;
CREATE POLICY "anon_read_product_categories" ON product_categories FOR SELECT
  TO anon, authenticated USING (true);

-- Combos: read-only for anon
DROP POLICY IF EXISTS "anon_read_combos" ON combos;
CREATE POLICY "anon_read_combos" ON combos FOR SELECT
  TO anon, authenticated USING (true);

-- Combo items: read-only for anon
DROP POLICY IF EXISTS "anon_read_combo_items" ON combo_items;
CREATE POLICY "anon_read_combo_items" ON combo_items FOR SELECT
  TO anon, authenticated USING (true);

-- Reviews: read-only for anon
DROP POLICY IF EXISTS "anon_read_reviews" ON reviews;
CREATE POLICY "anon_read_reviews" ON reviews FOR SELECT
  TO anon, authenticated USING (true);

-- Orders: anon can insert (customers placing orders), cannot read/update/delete
DROP POLICY IF EXISTS "anon_insert_orders" ON orders;
CREATE POLICY "anon_insert_orders" ON orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Order items: anon can insert, cannot read/update/delete
DROP POLICY IF EXISTS "anon_insert_order_items" ON order_items;
CREATE POLICY "anon_insert_order_items" ON order_items FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_bestseller ON products(is_bestseller);
CREATE INDEX IF NOT EXISTS idx_products_new_arrival ON products(is_new_arrival);
CREATE INDEX IF NOT EXISTS idx_reviews_product ON reviews(product_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
