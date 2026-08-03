import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getProducts() {
  console.log('🔍 Đang lấy dữ liệu từ Supabase...');
  const { data, error } = await supabase
    .from('products')
    .select('*, category:categories(name, slug)')
    .eq('is_active', true)
    .limit(20);
  
  if (error) {
    console.error('❌ Lỗi Supabase:', error);
    return [];
  }
  console.log('✅ Đã lấy:', data?.length, 'sản phẩm');
  return data || [];
}

export default async function HomePage() {
  const products = await getProducts();
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">🛒 Sản phẩm từ Supabase</h1>
      <p className="text-gray-400 mb-4">Số lượng: {products.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <div className="col-span-4 text-center text-gray-500 p-8 bg-gray-900 rounded-xl">
            <p>⚠️ Không có sản phẩm nào trong database.</p>
            <p className="text-sm mt-2">Hãy kiểm tra bảng products trong Supabase.</p>
          </div>
        ) : (
          products.map((p: any) => (
            <div key={p.id} className="bg-gray-900 p-4 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <div className="text-3xl mb-2">🎮</div>
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
          ))
        )}
      </div>
    </div>
  );
}
