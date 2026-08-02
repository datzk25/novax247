import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const mockProducts = [
  { id: 'p1', name: 'Sản phẩm 1', price: 299000, imageUrl: '', description: 'Mô tả sản phẩm 1' },
  { id: 'p2', name: 'Sản phẩm 2', price: 499000, imageUrl: '', description: 'Mô tả sản phẩm 2' },
  { id: 'p3', name: 'Sản phẩm 3', price: 199000, imageUrl: '', description: 'Mô tả sản phẩm 3' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Danh sách sản phẩm</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
