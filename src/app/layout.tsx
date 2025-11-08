import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pricing Excellence of the Future | North Highland",
  description: "AI-Enabled Pricing Strategies for Professional Services (2025-2027). Explore 11 pricing models, competitive strategies, and interactive tools for pricing transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-8">
                <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
                  Pricing Excellence
                </Link>
                <div className="hidden md:flex gap-6">
                  <Link href="/models" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Pricing Models
                  </Link>
                  <Link href="/practices" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Best Practices
                  </Link>
                  <Link href="/industries" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Industries
                  </Link>
                  <Link href="/competitive" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Competitive
                  </Link>
                  <Link href="/tools" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Tools
                  </Link>
                  <Link href="/case-studies" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    Case Studies
                  </Link>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-500">
                North Highland
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="border-t bg-gray-50 mt-16">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="font-bold text-gray-900 mb-4">Pricing Models</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <Link href="/models/outcome-based" className="block hover:text-blue-600 transition-colors">Outcome-Based</Link>
                  <Link href="/models/tiered-augmentation" className="block hover:text-blue-600 transition-colors">Tiered Augmentation</Link>
                  <Link href="/models/value-based-roi" className="block hover:text-blue-600 transition-colors">Value-Based ROI</Link>
                  <Link href="/models" className="block hover:text-blue-600 font-medium transition-colors">View All 11 →</Link>
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-4">Interactive Tools</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <Link href="/tools/roi-calculator" className="block hover:text-blue-600 transition-colors">ROI Calculator</Link>
                  <Link href="/tools/model-selector" className="block hover:text-blue-600 transition-colors">Model Selector Wizard</Link>
                  <Link href="/tools/price-to-win" className="block hover:text-blue-600 transition-colors">Price-to-Win Optimizer</Link>
                  <Link href="/tools" className="block hover:text-blue-600 font-medium transition-colors">All Tools →</Link>
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-4">Resources</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <Link href="/case-studies" className="block hover:text-blue-600 transition-colors">Case Studies</Link>
                  <Link href="/competitive" className="block hover:text-blue-600 transition-colors">Competitive Intel</Link>
                  <Link href="/industries" className="block hover:text-blue-600 transition-colors">Industry Strategies</Link>
                  <Link href="/practices" className="block hover:text-blue-600 transition-colors">Best Practices</Link>
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-4">About</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>North Highland Internal Strategic Resource</div>
                  <div className="text-xs text-gray-500 mt-4">Version 2025.1</div>
                  <div className="text-xs text-gray-500">58-64 Pages | 11 Models | 7 Practices</div>
                  <div className="text-xs text-gray-400 mt-4">
                    © 2025 The North Highland Company. Internal use only.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
