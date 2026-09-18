/*
# Update Attar Pricing — Unified 4ML / 6ML / 15ML Tiers

1. Changes
- Set uniform pricing across all 3 attar products (Silver Stone, Amir Al Oud,
  Ehsas Al Arabiya):
    4ML  → ৳150 (Pocket Attar — daily carry, campus, Jummah)
    6ML  → ৳220 (Standard Applicator — regular daily driver)
    15ML → ৳550 (Value Bottle — longer-lasting)
- Zero out the unused sizes (10ML, 30ML, 50ML) since attars only offer
  4ML, 6ML, and 15ML.

2. Security
- No RLS or policy changes.
*/

UPDATE products SET
  price_4ml = 150,
  price_6ml = 220,
  price_10ml = 0,
  price_15ml = 550,
  price_30ml = 0,
  price_50ml = 0
WHERE is_attar = true;
