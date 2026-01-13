"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Globe } from "lucide-react";

const features = [
    {
        title: "Premium Quality",
        description: "Expertly sourced materials ensuring longevity and style.",
        icon: Shield,
    },
    {
        title: "Fast Delivery",
        description: "Global shipping with real-time tracking updates.",
        icon: Zap,
    },
    {
        title: "Eco-Friendly",
        description: "Sustainable packaging and responsible manufacturing.",
        icon: Globe,
    },
    {
        title: "Satisfaction Guaranteed",
        description: "30-day return policy for your peace of mind.",
        icon: CheckCircle2,
    },
];

export function FeaturesSection() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We prioritize quality and customer satisfaction above all else.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <feature.icon className="w-10 h-10 text-primary mb-2" />
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
