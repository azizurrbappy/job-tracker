export function Footer() {
    return (
        <footer className="border-t bg-background py-10 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">ProductCatalog</h3>
                    <p className="text-muted-foreground text-sm">
                        The best place to find amazing products.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Links</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>Browse Items</li>
                        <li>Pricing</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Support</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>FAQ</li>
                        <li>Contact</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-3">Subscribe</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                        Get the latest updates.
                    </p>
                    {/* Placeholder for newsletter */}
                </div>
            </div>
            <div className="container mx-auto mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                © 2026 ProductCatalog Inc. All rights reserved.
            </div>
        </footer>
    );
}
