import { Suspense } from 'react';
import { NewArrivalsClient } from './_NewArrivalClient';

export default function NewArrivalsPage() {
  return (
    <Suspense fallback={null}>
      <NewArrivalsClient />
    </Suspense>
  );
}