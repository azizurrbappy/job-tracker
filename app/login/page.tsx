"use client";

import { useState, Suspense } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            await authClient.signIn.email({
                email,
                password,
                callbackURL: "/items"
            }, {
                onRequest: () => {
                    setLoading(true);
                },
                onSuccess: () => {
                    toast.success("Logged in successfully");
                    router.push("/items");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                    setLoading(false);
                }
            });
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : "Failed to login";
            toast.error(errorMessage);
            setLoading(false);
        }
    };

    const handleSignUp = async () => {
        setLoading(true);
        try {
            await authClient.signUp.email({
                email,
                password,
                name,
                callbackURL: "/items"
            }, {
                onRequest: () => {
                    setLoading(true);
                },
                onSuccess: () => {
                    toast.success("Account created successfully");
                    router.push("/items");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                    setLoading(false);
                }
            });
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : "Failed to sign up";
            toast.error(errorMessage);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4 bg-muted/20">
            <Tabs defaultValue={initialMode} className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome Back</CardTitle>
                            <CardDescription>Enter your credentials to access your account.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={handleSignIn} disabled={loading}>
                                {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
                                Sign In
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create Account</CardTitle>
                            <CardDescription>Enter your information to create an account.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="signup-email">Email</Label>
                                <Input id="signup-email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="signup-password">Password</Label>
                                <Input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={handleSignUp} disabled={loading}>
                                {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
                                Sign Up
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>}>
            <LoginForm />
        </Suspense>
    );
}
