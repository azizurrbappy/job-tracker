"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export function ItemDetailView({ item }: { item: any }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container py-12 px-4"
        >
            <Link href="/items" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Items
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="aspect-square bg-muted rounded-xl overflow-hidden relative"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={item.image || "https://placehold.co/600x600"}
                        alt={item.name}
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Badge className="mb-4">In Stock</Badge>
                    <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
                    <div className="text-3xl font-bold text-primary mb-6">${item.price}</div>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        {item.description}
                    </p>

                    <div className="flex gap-4">
                        <Button size="lg" className="w-full md:w-auto px-8" onClick={() => toast.success("Added to cart!")}>
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                        <Button size="lg" variant="outline">Share</Button>
                    </div>

                    <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                        <h3 className="font-semibold mb-2">Product Details</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• High quality materials</li>
                            <li>• 2 year warranty</li>
                            <li>• Free shipping worldwide</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
