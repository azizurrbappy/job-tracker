"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="container px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your lifestyle?</h2>
                <p className="text-primary-foreground/80 text-xl mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied customers today.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/items">
                        <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
                            Shop Now
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
