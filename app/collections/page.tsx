import { Suspense } from 'react';
import { CollectionClient } from './_CollectionClient';

export default function CollectionsPage() {
  return (
    <Suspense fallback={null}>
      <CollectionClient />
    </Suspense>
  );
}