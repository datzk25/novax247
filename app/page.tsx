import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';

async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*, category:categories(name, slug)')
    .eq('is_active', true)
    .limit(20);
  
  if (error) return [];
  return data || [];
}

export default async function HomePage() {
  const products = await getProducts();
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Novax247 Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p: any) => (
          <div key={p.id} className="bg-gray-900 p-4 rounded-xl border border-gray-800">
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="text-sm text-gray-400">{p.category?.name || 'Không danh mục'}</p>
            <p className="text-2xl font-bold text-blue-400 mt-2">
              {p.price.toLocaleString()}đ
            </p>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>📦 Còn: {p.stock}</span>
              <span>🛒 Đã bán: {p.sold}</span>
            </div>
            <button className="w-full mt-3 bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition">
              Mua ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
