// File: app/page.tsx
// Next.js 14+ App Router product catalog UI shell
// No backend logic, only presentational components

import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

// Static mock data for UI layout
const mockProducts: Product[] = [
  { id: 'p1', name: 'Товар 1', price: 29.99, imageUrl: '/placeholder.png', description: 'Описание товара 1' },
  { id: 'p2', name: 'Товар 2', price: 49.99, imageUrl: '/placeholder.png', description: 'Описание товара 2' },
  { id: 'p3', name: 'Товар 3', price: 19.99, imageUrl: '/placeholder.png', description: 'Описание товара 3' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Наши товары</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* UI placeholder for future cart/checkout */}
        <div className="mt-12 p-4 border-2 border-dashed border-gray-300 text-center text-gray-500">
          [Функционал корзины и оформления заказа — будет добавлен позже]
        </div>
      </main>
      <Footer />
    </div>
  );
}
