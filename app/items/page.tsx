import { ItemCard } from '@/components/ItemCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getItems() {
  try {
    const res = await fetch('http://localhost:5001/api/items', {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error('Failed to fetch items', res.status);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Browse Items</h1>
          <p className="text-muted-foreground">
            Explore our curated collection.
          </p>
        </div>
        {/* Optional: Add condition to show only if logged in or allow redirect */}
        <Link href="/add-item">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Item
          </Button>
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg mb-4">No items found.</p>
          <Link href="/add-item">
            <Button variant="outline">Be the first to add one!</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item: any) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
