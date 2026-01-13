import { Suspense } from 'react';
import { ProductsClientPage } from './product-client';

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsClientPage />
    </Suspense>
  );
}