'use client';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Item {
  _id: string;
  name: string;
  price: number;
  image?: string;
  description: string;
}

export function ProductPreviewSection() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`);
        if (res.ok) {
          const data = await res.json();
          setItems(data.slice(0, 4)); // Show only 4
        } else {
          // Fallback mock data if API fails or empty
          setItems(mockItems);
        }
      } catch (e) {
        console.error('Failed to fetch items', e);
        setItems(mockItems);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const mockItems = [
    {
      _id: '1',
      name: 'Modern Lamp',
      price: 120,
      description: 'Elegant lighting for your desk.',
      image:
        'https://images.unsplash.com/photo-1507473888900-52e1ad14db3a?w=500&auto=format&fit=crop&q=60',
    },
    {
      _id: '2',
      name: 'Ergonomic Chair',
      price: 299,
      description: 'Comfort for long hours.',
      image:
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60',
    },
    {
      _id: '3',
      name: 'Wireless Headphones',
      price: 199,
      description: 'Crystal clear sound.',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
    },
    {
      _id: '4',
      name: 'Minimalist Watch',
      price: 150,
      description: 'Timeless design.',
      image:
        'https://images.unsplash.com/photo-1524592094765-f7a5f16801e0?w=500&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Check out what's trending.</p>
          </div>
          <Link href="/items">
            <Button variant="outline">View All</Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer h-full flex flex-col">
                <div className="aspect-square relative overflow-hidden bg-secondary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image || 'https://placehold.co/400'}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{item.name}</span>
                    <span className="text-primary text-lg">${item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/items/${item._id}`} className="w-full">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
