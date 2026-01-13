"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ItemCardProps {
    item: {
        _id: string;
        name: string;
        price: number;
        description: string;
        image?: string;
    };
}

export function ItemCard({ item }: ItemCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="h-full flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-muted">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={item.image || "https://placehold.co/600x400"}
                        alt={item.name}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-foreground shadow-sm">
                            ${item.price}
                        </Badge>
                    </div>
                </div>
                <CardHeader>
                    <CardTitle className="text-lg line-clamp-1" title={item.name}>
                        {item.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                    </p>
                </CardContent>
                <CardFooter>
                    <Link href={`/items/${item._id}`} className="w-full">
                        <Button className="w-full" variant="outline">View Details</Button>
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
