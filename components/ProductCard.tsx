// File: components/ProductCard.tsx
'use client';

import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{product.name}</h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
        <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Добавить в корзину (заглушка)
        </button>
      </div>
    </div>
  );
}
