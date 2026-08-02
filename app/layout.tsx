// File: app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shop Novax247',
  description: 'Mua sắm sản phẩm chất lượng cao với giá tốt nhất',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
