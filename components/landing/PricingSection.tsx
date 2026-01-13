'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['Browse Products', 'Create Wishlist', 'Basic Support'],
    recommended: false,
  },
  {
    name: 'ProMember',
    price: '$9.99/mo',
    features: [
      'Priority Shipping',
      'Early Access',
      'Exclusive Discounts',
      '24/7 Support',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Bulk Ordering', 'Dedicated Manager', 'Custom Branding'],
    recommended: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple Pricing
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Choose the plan that fits you best.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="relative">
              <Card
                className={`h-full flex flex-col ${
                  plan.recommended
                    ? 'border-primary shadow-lg scale-105 z-10'
                    : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <CardDescription>Perfect for individuals.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((f, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.recommended ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
