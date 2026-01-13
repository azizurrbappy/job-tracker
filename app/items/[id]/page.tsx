import { ItemDetailView } from '@/components/ItemDetailView';
import { notFound } from 'next/navigation';

async function getItem(id: string) {
  try {
    const backendURL = process.env.NEXT_PUBLIC_API_URL as string;

    const res = await fetch(`${backendURL}/items/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

export default async function ItemPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  return <ItemDetailView item={item} />;
}
