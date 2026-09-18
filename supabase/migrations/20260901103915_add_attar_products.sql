/*
# Add Attar / Concentrated Oils Category and Products

1. New Columns
- `products.price_4ml` (integer, default 150) — price for the new 4ML attar size.
- `products.is_attar` (boolean, default false) — flags products that are traditional
  concentrated perfume oils (attars) rather than spray perfumes. Attars use different
  size options (4ML, 6ML, 15ML) and display an alcohol-free badge.

2. New Category
- `Attar / Concentrated Oils` — slug `attar-concentrated-oils`, icon `droplet`.
  Traditional alcohol-free concentrated perfume oils with long-lasting projection.

3. New Products (all flagged is_attar = true)
- Silver Stone — Fresh, clean & earthy attar. Sizes: 4ML / 6ML / 15ML.
- Agarwood — Rich, deep & premium oud attar. Sizes: 4ML / 6ML / 15ML.
- Ehsas Al Arabiya — Warm, royal & spicy Arabian attar. Sizes: 4ML / 6ML / 15ML.

4. Product ↔ Category Links
- Each new attar product is linked to the `attar-concentrated-oils` category in
  `product_categories`.

5. Security
- No changes to RLS or policies. The existing `anon_read_products`,
  `anon_read_categories`, and `anon_read_product_categories` SELECT policies
  already cover the new rows (they use `USING (true)` for the no-auth storefront).
- No new tables created.
*/

-- Add price_4ml column for the 4ML attar size
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'price_4ml'
  ) THEN
    ALTER TABLE products ADD COLUMN price_4ml integer NOT NULL DEFAULT 150;
  END IF;
END $$;

-- Add is_attar boolean flag
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'is_attar'
  ) THEN
    ALTER TABLE products ADD COLUMN is_attar boolean NOT NULL DEFAULT false;
  END IF;
END $$;

-- Insert the new Attar category (idempotent via ON CONFLICT on slug)
INSERT INTO categories (name, slug, description, icon)
VALUES (
  'Attar / Concentrated Oils',
  'attar-concentrated-oils',
  'Traditional alcohol-free concentrated perfume oils',
  'droplet'
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon;

-- Insert the 3 attar products (idempotent via ON CONFLICT on slug)
INSERT INTO products (
  name, slug, description, top_notes, heart_notes, base_notes, scent_tags,
  price_4ml, price_6ml, price_10ml, price_15ml, price_30ml, price_50ml,
  image_url, badge, is_bestseller, is_new_arrival, is_attar, in_stock, sort_order
) VALUES
(
  'Silver Stone',
  'silver-stone',
  'A fresh, clean and earthy attar with mineral clarity and a smooth woody dry-down.',
  'Fresh citrus, Mineral notes',
  'Earthy, Clean floral',
  'Woody, Musky, Soft amber',
  'Fresh, Clean, Earthy, Attar',
  150, 250, 350, 500, 900, 1500,
  'https://images.pexels.com/photos/5790458/pexels-photo-5790458.jpeg?auto=compress&cs=tinysrgb&w=800',
  'New Arrival',
  false, true, true, true, 9
),
(
  'Agarwood',
  'agarwood',
  'A rich, deep and premium oud attar with authentic agarwood warmth and smoky depth.',
  'Saffron, Smoky oud',
  'Agarwood, Rose',
  'Sandalwood, Amber, Musk',
  'Rich, Deep, Premium, Oud, Attar',
  200, 350, 500, 700, 1200, 2000,
  'https://images.pexels.com/photos/30981935/pexels-photo-30981935.jpeg?auto=compress&cs=tinysrgb&w=800',
  'New Arrival',
  false, true, true, true, 10
),
(
  'Ehsas Al Arabiya',
  'ehsas-al-arabiya',
  'A warm, royal and spicy Arabian attar with rich oriental spices and luxurious depth.',
  'Cardamom, Pink pepper, Saffron',
  'Rose, Oud, Spicy notes',
  'Amber, Musk, Sandalwood, Warm spices',
  'Warm, Royal, Spicy, Arabian, Attar',
  180, 300, 450, 650, 1100, 1800,
  'https://images.pexels.com/photos/17155333/pexels-photo-17155333.jpeg?auto=compress&cs=tinysrgb&w=800',
  'New Arrival',
  false, true, true, true, 11
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  top_notes = EXCLUDED.top_notes,
  heart_notes = EXCLUDED.heart_notes,
  base_notes = EXCLUDED.base_notes,
  scent_tags = EXCLUDED.scent_tags,
  price_4ml = EXCLUDED.price_4ml,
  price_6ml = EXCLUDED.price_6ml,
  price_10ml = EXCLUDED.price_10ml,
  price_15ml = EXCLUDED.price_15ml,
  price_30ml = EXCLUDED.price_30ml,
  price_50ml = EXCLUDED.price_50ml,
  image_url = EXCLUDED.image_url,
  badge = EXCLUDED.badge,
  is_new_arrival = EXCLUDED.is_new_arrival,
  is_attar = EXCLUDED.is_attar,
  in_stock = EXCLUDED.in_stock,
  sort_order = EXCLUDED.sort_order;

-- Link attar products to the attar category
INSERT INTO product_categories (product_id, category_id)
SELECT p.id, c.id
FROM products p
CROSS JOIN categories c
WHERE p.slug IN ('silver-stone', 'agarwood', 'ehsas-al-arabiya')
  AND c.slug = 'attar-concentrated-oils'
ON CONFLICT DO NOTHING;
