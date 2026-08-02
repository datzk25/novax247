export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Novax247</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Trang chủ</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Sản phẩm</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Liên hệ</a>
        </nav>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">🛒 Giỏ hàng (0)</span>
        </div>
      </div>
    </header>
  );
}
