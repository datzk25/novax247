// File: components/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} МойМагазин. Все права защищены.
      </div>
    </footer>
  );
}
