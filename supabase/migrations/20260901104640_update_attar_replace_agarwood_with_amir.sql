/*
# Update Attar Products: Replace Agarwood with Amir Al Oud

1. Changes
- Convert the existing `Amir Al Oud` product (slug: `amir-al-oud`) into an attar:
  update its description, notes, scent tags, pricing (add price_4ml), image, badge,
  is_new_arrival flag, and set is_attar = true.
- Delete the `Agarwood` attar product (slug: `agarwood`) that was added in the
  previous migration, since this release uses Amir Al Oud as the oud attar instead.
- Re-link Amir Al Oud to the `attar-concentrated-oils` category in product_categories.
- Remove the old product_categories link for the deleted Agarwood product.

2. Security
- No RLS or policy changes. Existing anon SELECT policies cover all rows.
*/

-- Convert Amir Al Oud into an attar product
UPDATE products SET
  description = 'A rich, deep and premium oud attar with authentic agarwood warmth and smoky depth.',
  top_notes = 'Saffron, Smoky oud',
  heart_notes = 'Agarwood, Rose',
  base_notes = 'Sandalwood, Amber, Musk',
  scent_tags = 'Rich, Deep, Premium, Oud, Attar',
  price_4ml = 200,
  price_6ml = 350,
  price_10ml = 500,
  price_15ml = 700,
  price_30ml = 1200,
  price_50ml = 2000,
  image_url = 'https://images.pexels.com/photos/30981935/pexels-photo-30981935.jpeg?auto=compress&cs=tinysrgb&w=800',
  badge = 'New Arrival',
  is_new_arrival = true,
  is_attar = true,
  in_stock = true,
  sort_order = 7
WHERE slug = 'amir-al-oud';

-- Delete the Agarwood attar product (cascade removes its product_categories rows)
DELETE FROM products WHERE slug = 'agarwood';

-- Link Amir Al Oud to the attar category
INSERT INTO product_categories (product_id, category_id)
SELECT p.id, c.id
FROM products p
CROSS JOIN categories c
WHERE p.slug = 'amir-al-oud'
  AND c.slug = 'attar-concentrated-oils'
ON CONFLICT DO NOTHING;
