import type { Product, Combo, Review, Category } from '@/lib/types';

export const categories: Category[] = [
  { id: 'cat-floral-sweet', name: 'Floral & Sweet', slug: 'floral-sweet', description: 'Soft, attractive & feminine', icon: 'flower' },
  { id: 'cat-fresh-aquatic', name: 'Fresh & Aquatic', slug: 'fresh-aquatic', description: 'For hot weather & everyday use', icon: 'waves' },
  { id: 'cat-fresh-citrus', name: 'Fresh & Citrus', slug: 'fresh-citrus', description: 'Clean, energetic & refreshing', icon: 'lemon' },
  { id: 'cat-sweet-warm', name: 'Sweet & Warm', slug: 'sweet-warm', description: 'Perfect for evenings', icon: 'flame' },
  { id: 'cat-woody-oud', name: 'Woody & Oud', slug: 'woody-oud', description: 'Rich, warm & elegant', icon: 'tree-pine' },
  { id: 'cat-attar-oils', name: 'Attar / Concentrated Oils', slug: 'attar-concentrated-oils', description: 'Traditional alcohol-free concentrated perfume oils', icon: 'droplet' },
];

export const products: Product[] = [
  {
    id: 'prod-hawas-ice',
    name: 'Hawas Ice',
    slug: 'hawas-ice',
    description: 'A refreshing burst of icy aquatic freshness with citrus sparkle and a clean woody dry-down.',
    top_notes: 'Fresh citrus, Aquatic notes',
    heart_notes: 'Aromatic, Floral notes',
    base_notes: 'Woody, Musky notes',
    scent_tags: 'Fresh, Aquatic, Cool',
    price_4ml: 0, price_6ml: 200, price_10ml: 300, price_15ml: 400, price_30ml: 750, price_50ml: 1300,
    image_url: 'https://images.pexels.com/photos/7364096/pexels-photo-7364096.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Bestseller',
    is_bestseller: true, is_new_arrival: false, is_attar: false, in_stock: true,
    sort_order: 1, created_at: '2026-08-19T08:45:27Z',
  },
  {
    id: 'prod-polo-sport',
    name: 'Polo Sport',
    slug: 'polo-sport',
    description: 'An energetic fresh aquatic fragrance with citrus zest and sporty clean vibes.',
    top_notes: 'Fresh citrus, Aquatic notes',
    heart_notes: 'Aromatic, Floral notes',
    base_notes: 'Woody, Musky notes',
    scent_tags: 'Fresh, Aquatic, Citrus',
    price_4ml: 0, price_6ml: 200, price_10ml: 300, price_15ml: 400, price_30ml: 750, price_50ml: 1300,
    image_url: 'https://images.pexels.com/photos/32630384/pexels-photo-32630384.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Bestseller',
    is_bestseller: true, is_new_arrival: false, is_attar: false, in_stock: true,
    sort_order: 2, created_at: '2026-08-19T08:45:27Z',
  },
  {
    id: 'prod-dior-sauvage',
    name: 'Dior Sauvage',
    slug: 'dior-sauvage',
    description: 'A bold and raw fresh woody fragrance with bergamot top notes and warm ambergris base.',
    top_notes: 'Bergamot, Pepper',
    heart_notes: 'Lavender, Sichuan pepper',
    base_notes: 'Ambroxan, Cedar, Musk',
    scent_tags: 'Fresh, Woody, Aromatic',
    price_4ml: 0, price_6ml: 200, price_10ml: 300, price_15ml: 400, price_30ml: 750, price_50ml: 1300,
    image_url: 'https://images.pexels.com/photos/34690231/pexels-photo-34690231.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'New Arrival',
    is_bestseller: false, is_new_arrival: true, is_attar: false, in_stock: true,
    sort_order: 3, created_at: '2026-08-19T08:45:27Z',
  },
  {
    id: 'prod-gucci-flora',
    name: 'Gucci Flora',
    slug: 'gucci-flora',
    description: 'A delicate floral sweet fragrance with rose and peony wrapped in soft musk.',
    top_notes: 'Citrus, Peony',
    heart_notes: 'Rose, Osmanthus',
    base_notes: 'Patchouli, Pink pepper, Musk',
    scent_tags: 'Floral, Sweet, Feminine',
    price_4ml: 0, price_6ml: 200, price_10ml: 300, price_15ml: 400, price_30ml: 750, price_50ml: 1300,
    image_url: 'https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'New Arrival',
    is_bestseller: false, is_new_arrival: true, is_attar: false, in_stock: true,
    sort_order: 4, created_at: '2026-08-19T08:45:27Z',
  },
  {
    id: 'prod-aqua-di-gio',
    name: 'Aqua Di Gio',
    slug: 'aqua-di-gio',
    description: 'A timeless aquatic fragrance inspired by the Mediterranean coast.',
    top_notes: 'Marine notes, Citrus',
    heart_notes: 'Jasmine, Rosemary',
    base_notes: 'Cedar, Patchouli, White musk',
    scent_tags: 'Fresh, Aquatic, Citrus',
    price_4ml: 0, price_6ml: 200, price_10ml: 300, price_15ml: 400, price_30ml: 750, price_50ml: 1300,
    image_url: 'https://images.pexels.com/photos/20899863/pexels-photo-20899863.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: null,
    is_bestseller: true, is_new_arrival: false, is_attar: false, in_stock: true,
    sort_order: 5, created_at: '2026-08-19T08:45:27Z',
  },
  {
    id: 'prod-bleu-de-chanel',
    name: 'Bleu de Chanel',
    slug: 'bleu-de-chanel',
    description: 'A sophisticated woody aromatic fragrance with crisp citrus and deep sandalwood.',
    top_notes: 'Citrus, Mint',
    heart_notes: 'Ginger, Nutmeg, Jasmine',
    base_notes: 'Sandalwood, Cedar, Incense',
    scent_tags: 'Woody, Fresh, Aromatic',
    price_4ml: 0, price_6ml: 200, price_10ml: 300, price_15ml: 400, price_30ml: 750, price_50ml: 1300,
    image_url: 'https://images.pexels.com/photos/21008941/pexels-photo-21008941.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: null,
    is_bestseller: true, is_new_arrival: false, is_attar: false, in_stock: true,
    sort_order: 6, created_at: '2026-08-19T08:45:27Z',
  },
  {
    id: 'prod-amir-al-oud',
    name: 'Amir Al Oud',
    slug: 'amir-al-oud',
    description: 'A rich, deep and premium oud attar with authentic agarwood warmth and smoky depth.',
    top_notes: 'Saffron, Smoky oud',
    heart_notes: 'Agarwood, Rose',
    base_notes: 'Sandalwood, Amber, Musk',
    scent_tags: 'Rich, Deep, Premium, Oud, Attar',
    price_4ml: 150, price_6ml: 220, price_10ml: 0, price_15ml: 550, price_30ml: 0, price_50ml: 0,
    image_url: 'https://images.pexels.com/photos/30981935/pexels-photo-30981935.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'New Arrival',
    is_bestseller: false, is_new_arrival: true, is_attar: true, in_stock: true,
    sort_order: 7, created_at: '2026-09-01T00:00:00Z',
  },
  {
    id: 'prod-versace-eros',
    name: 'Versace Eros',
    slug: 'versace-eros',
    description: 'A passionate sweet warm fragrance with mint, green apple, and vanilla.',
    top_notes: 'Mint, Green apple, Lemon',
    heart_notes: 'Tonka bean, Geranium',
    base_notes: 'Vanilla, Vetiver, Oakmoss',
    scent_tags: 'Sweet, Warm, Fresh',
    price_4ml: 0, price_6ml: 200, price_10ml: 300, price_15ml: 400, price_30ml: 750, price_50ml: 1300,
    image_url: 'https://images.pexels.com/photos/34642420/pexels-photo-34642420.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: null,
    is_bestseller: false, is_new_arrival: false, is_attar: false, in_stock: true,
    sort_order: 8, created_at: '2026-08-19T08:45:27Z',
  },
  {
    id: 'prod-silver-stone',
    name: 'Silver Stone',
    slug: 'silver-stone',
    description: 'A fresh, clean and earthy attar with mineral clarity and a smooth woody dry-down.',
    top_notes: 'Fresh citrus, Mineral notes',
    heart_notes: 'Earthy, Clean floral',
    base_notes: 'Woody, Musky, Soft amber',
    scent_tags: 'Fresh, Clean, Earthy, Attar',
    price_4ml: 150, price_6ml: 220, price_10ml: 0, price_15ml: 550, price_30ml: 0, price_50ml: 0,
    image_url: 'https://images.pexels.com/photos/5790458/pexels-photo-5790458.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'New Arrival',
    is_bestseller: false, is_new_arrival: true, is_attar: true, in_stock: true,
    sort_order: 9, created_at: '2026-09-01T00:00:00Z',
  },
  {
    id: 'prod-ehsas-al-arabiya',
    name: 'Ehsas Al Arabiya',
    slug: 'ehsas-al-arabiya',
    description: 'A warm, royal and spicy Arabian attar with rich oriental spices and luxurious depth.',
    top_notes: 'Cardamom, Pink pepper, Saffron',
    heart_notes: 'Rose, Oud, Spicy notes',
    base_notes: 'Amber, Musk, Sandalwood, Warm spices',
    scent_tags: 'Warm, Royal, Spicy, Arabian, Attar',
    price_4ml: 150, price_6ml: 220, price_10ml: 0, price_15ml: 550, price_30ml: 0, price_50ml: 0,
    image_url: 'https://images.pexels.com/photos/17155333/pexels-photo-17155333.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'New Arrival',
    is_bestseller: false, is_new_arrival: true, is_attar: true, in_stock: true,
    sort_order: 11, created_at: '2026-09-01T00:00:00Z',
  },
];

export const combos: Combo[] = [
  {
    id: 'combo-fresh-summer',
    name: 'Fresh Summer Combo',
    slug: 'fresh-summer-combo',
    description: 'Aqua Di Gio + Polo Sport — stay fresh all summer long',
    price: 350,
    image_url: 'https://images.pexels.com/photos/20470833/pexels-photo-20470833.jpeg?auto=compress&cs=tinysrgb&w=800',
    created_at: '2026-08-19T08:45:39Z',
  },
  {
    id: 'combo-hawas-duo',
    name: 'Hawas Duo',
    slug: 'hawas-duo',
    description: 'Hawas + Hawas Ice — the ultimate fresh combo',
    price: 350,
    image_url: 'https://images.pexels.com/photos/13875783/pexels-photo-13875783.jpeg?auto=compress&cs=tinysrgb&w=800',
    created_at: '2026-08-19T08:45:39Z',
  },
  {
    id: 'combo-office-fresh',
    name: 'Office Fresh Combo',
    slug: 'office-fresh-combo',
    description: 'Bleu de Chanel + Polo Sport — perfect for the office',
    price: 350,
    image_url: 'https://images.pexels.com/photos/10924510/pexels-photo-10924510.jpeg?auto=compress&cs=tinysrgb&w=800',
    created_at: '2026-08-19T08:45:39Z',
  },
  {
    id: 'combo-oud-sport',
    name: 'Oud & Sport Combo',
    slug: 'oud-sport-combo',
    description: 'Polo Sport + Amir Al Oud — day to night transition',
    price: 350,
    image_url: 'https://images.pexels.com/photos/28664171/pexels-photo-28664171.jpeg?auto=compress&cs=tinysrgb&w=800',
    created_at: '2026-08-19T08:45:39Z',
  },
];

export const reviews: Review[] = [
  { id: 'rev-1', product_id: 'prod-bleu-de-chanel', customer_name: 'Arif M.', rating: 5, review_text: 'Classy and sophisticated. The 30ML bottle is great value. Lasts all day.', is_featured: true, created_at: '2026-08-19T08:45:55Z' },
  { id: 'rev-2', product_id: 'prod-gucci-flora', customer_name: 'Nusrat J.', rating: 5, review_text: 'Beautiful floral scent. Perfect for daily use and the price is unbeatable.', is_featured: true, created_at: '2026-08-19T08:45:55Z' },
  { id: 'rev-3', product_id: 'prod-aqua-di-gio', customer_name: 'Fahim K.', rating: 4, review_text: 'Very fresh and summery. Great for university. Would buy again.', is_featured: true, created_at: '2026-08-19T08:45:55Z' },
  { id: 'rev-4', product_id: 'prod-hawas-ice', customer_name: 'Rahim A.', rating: 5, review_text: 'Smells amazing and the 6ML size is perfect for carrying around. Lasts longer than expected!', is_featured: true, created_at: '2026-08-19T08:45:55Z' },
  { id: 'rev-5', product_id: 'prod-polo-sport', customer_name: 'Sadia R.', rating: 5, review_text: 'Fresh and clean. I get compliments every time I wear it to the office.', is_featured: true, created_at: '2026-08-19T08:45:55Z' },
  { id: 'rev-6', product_id: 'prod-dior-sauvage', customer_name: 'Tanvir H.', rating: 5, review_text: 'The 15ML is the perfect size to try. Scent is very close to the original. Highly recommended!', is_featured: true, created_at: '2026-08-19T08:45:55Z' },
  { id: 'rev-7', product_id: null, customer_name: 'Sabbir R.', rating: 5, review_text: 'Ordered the 6ML to try and came back for the 50ML. The scents are long-lasting and premium.', is_featured: true, created_at: '2026-08-19T08:45:01Z' },
  { id: 'rev-8', product_id: null, customer_name: 'Mahmuda A.', rating: 5, review_text: 'KHAAT is my go-to for perfumes. Quick delivery and genuine quality every time.', is_featured: true, created_at: '2026-08-19T08:45:01Z' },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.is_bestseller).sort((a, b) => a.sort_order - b.sort_order);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.is_new_arrival).sort((a, b) => b.created_at.localeCompare(a.created_at));
}

export function getFeaturedReviews(): Review[] {
  return reviews.filter((r) => r.is_featured);
}

export function getReviewsForProduct(productId: string): Review[] {
  return reviews.filter((r) => r.product_id === productId);
}
