'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, ShoppingBag, Star, Truck } from 'lucide-react';
import type { Product, ProductSize, Review } from '@/lib/types';
import { getPriceForSize, SIZES, ATTAR_SIZES } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { CartDrawer } from '@/components/site/cart-drawer';

interface ProductDetailsProps {
  product: Product;
  reviews: Review[];
}

export default function ProductDetails({ product, reviews }: ProductDetailsProps) {
  const availableSizes = product.is_attar ? ATTAR_SIZES : SIZES;
  const [selectedSize, setSelectedSize] = useState<ProductSize>(availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const price = getPriceForSize(product, selectedSize);

  const handleAddToCart = () => {
    addItem({
      product_id: product.id,
      title: product.title,
      price: price,
      image_url: product.image_url,
      size: selectedSize,
      quantity,
      is_attar: product.is_attar,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 w-full">
        <Link
          href="/shop"
          className="inline-flex items-center text-sm text-[#8c7a6b] hover:text-[#2c221e] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="aspect-square bg-[#f3ece2] rounded-2xl overflow-hidden shadow-sm relative">
            <img
              src={product.image_url}
              alt={product.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8c7a6b]">
                {product.is_attar ? 'Attar Collection' : 'Perfume Collection'}
              </span>
              <h1 className="text-3xl font-serif text-[#2c221e] mt-1">{product.title}</h1>
              <p className="text-2xl font-serif text-[#a3704c] mt-2">৳{price}</p>
            </div>

            <p className="text-[#5c4d43] leading-relaxed">{product.description}</p>

            <div>
              <label className="block text-sm font-medium text-[#2c221e] mb-3">
                Packaging & Presentation
              </label>
              <div className="grid grid-cols-2 gap-3">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 text-center border ${
                      selectedSize === size
                        ? 'border-[#2c221e] bg-[#2c221e] text-white shadow-md'
                        : 'border-[#e2d7c9] bg-white text-[#2c221e] hover:border-[#8c7a6b]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-[#e2d7c9] rounded-xl bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-[#2c221e] hover:bg-[#f3ece2] rounded-l-xl transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-3 text-sm font-medium text-[#2c221e]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-[#2c221e] hover:bg-[#f3ece2] rounded-r-xl transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#2c221e] text-white py-3.5 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-[#42332c] transition-colors shadow-sm"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart • ৳{price * quantity}</span>
                  </>
                )}
              </button>
            </div>

            <div className="border-t border-[#e2d7c9] pt-6 space-y-3 text-xs text-[#8c7a6b]">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-[#a3704c]" />
                <span>Fast express delivery across Bangladesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-[#a3704c]" />
                <span>100% Authentic Premium Ingredients</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
