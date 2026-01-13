'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Interior Designer',
    content:
      'The quality of the products surpassed my expectations. Absolutely stunning designs!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'Tech Professional',
    content:
      'Fast shipping and excellent customer service. My home office setup looks complete now.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'James Wilson',
    role: 'Architect',
    content:
      'I recommend this catalog to all my clients. The minimalist aesthetic is perfect.',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src={t.image} alt={t.name} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
