"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-purple-50/10 to-background overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-black dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20" />

            <div className="container px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        Discover Exceptional Products
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Curated items for the modern lifestyle. Quality, aesthetics, and functionality combined.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/items">
                            <Button size="lg" className="text-lg px-8 h-12 rounded-full">
                                Browse Items
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button size="lg" variant="outline" className="text-lg px-8 h-12 rounded-full backdrop-blur-sm">
                                Login
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
