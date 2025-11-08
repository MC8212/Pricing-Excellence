import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  TrendingUp,
  Users,
  Target,
  BookOpen,
  Zap,
  Shield,
  ArrowRight,
  DollarSign,
  BarChart3,
  Award,
  Sparkles,
  Brain,
  Rocket
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 text-sm px-4 py-1" variant="secondary">
              <Sparkles className="inline-block w-4 h-4 mr-2" />
              North Highland Strategic Playbook 2025-2027
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Pricing Excellence of the Future
            </h1>

            <p className="text-2xl text-blue-100 mb-4 font-medium">
              AI-Enabled Pricing Strategies for Professional Services
            </p>

            <p className="text-lg text-blue-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform pricing from tactical to strategic. Explore 11 innovative pricing models, master competitive differentiation, and unlock
              <span className="font-bold text-white"> $50M-$100M in revenue opportunity</span> through AI-enabled pricing transformation.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all">
                <Link href="/tools/model-selector">
                  <Target className="mr-2 h-5 w-5" />
                  Find Your Pricing Model
                </Link>
              </Button>

              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-400 border-2 border-white/30 shadow-lg">
                <Link href="/tools/roi-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate ROI
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20">
                <Link href="/models">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Models
                </Link>
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div>
                <div className="text-5xl font-bold mb-1">11</div>
                <div className="text-sm text-blue-200">Pricing Models</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-1">$100M</div>
                <div className="text-sm text-blue-200">Revenue Opportunity</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-1">73%</div>
                <div className="text-sm text-blue-200">Prefer Outcome-Based</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-1">10x</div>
                <div className="text-sm text-blue-200">ROI Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Pathways */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What do you need today?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your path to pricing excellence based on your role and immediate needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/tools/model-selector" className="block">
              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-500 h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Price a Deal</CardTitle>
                  <CardDescription className="text-base">
                    Find the right pricing model for your opportunity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                      Pricing Model Wizard
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                      ROI Calculator
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                      Proposal Templates
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/models" className="block">
              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-green-500 h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Brain className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Learn Strategies</CardTitle>
                  <CardDescription className="text-base">
                    Master AI-enabled pricing approaches
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      11 Pricing Models
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      7 Best Practices
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      Interactive Learning
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/competitive" className="block">
              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-purple-500 h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Beat Competitors</CardTitle>
                  <CardDescription className="text-base">
                    Win against Big 4, Tech Firms, Boutiques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-purple-500" />
                      Battle Cards
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-purple-500" />
                      Win Strategies
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-purple-500" />
                      Positioning Guides
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/tools/roi-calculator" className="block">
              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-orange-500 h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Calculator className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Calculate ROI</CardTitle>
                  <CardDescription className="text-base">
                    Quantify value and justify pricing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-orange-500" />
                      TEI Framework
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-orange-500" />
                      Value Calculator
                    </div>
                    <div className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-orange-500" />
                      Export Reports
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Pricing Models */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Most Popular</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Pricing Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start with these three high-impact models—proven to win deals and capture value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Most Popular</Badge>
                  <Badge variant="outline" className="border-red-300 text-red-700">High Reward</Badge>
                </div>
                <CardTitle className="text-2xl">Outcome-Based Pricing</CardTitle>
                <CardDescription className="text-base font-medium">73% client preference</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Tie fees directly to measurable business results. Payment occurs only when specific outcomes are delivered. Transfers risk and demonstrates partnership commitment.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Zap className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Formula-based outcome calculation</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Shield className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Risk-sharing builds trust</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Premium fees justified by results</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/models/outcome-based">
                    Explore Model
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Versatile</Badge>
                  <Badge variant="outline" className="border-yellow-300 text-yellow-700">Medium Risk</Badge>
                </div>
                <CardTitle className="text-2xl">Tiered AI Augmentation</CardTitle>
                <CardDescription className="text-base font-medium">Good-Better-Best approach</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Offer three tiers based on AI depth: Traditional, AI-Enhanced, AI-Native. Creates choice, anchoring effects, and premium pricing opportunities.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    <span>3 tiers: 10-20-40% premiums</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Shield className="h-4 w-4 mr-2 text-green-500" />
                    <span>Client self-selection reduces risk</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                    <span>60-70% choose mid-tier</span>
                  </div>
                </div>
                <Button asChild className="w-full" variant="secondary">
                  <Link href="/models/tiered-augmentation">
                    Explore Model
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">ROI-Focused</Badge>
                  <Badge variant="outline" className="border-red-300 text-red-700">High Reward</Badge>
                </div>
                <CardTitle className="text-2xl">Value-Based with ROI</CardTitle>
                <CardDescription className="text-base font-medium">10-25% of total value</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Fee based on Total Economic Impact across 4 value categories. Rigorous financial justification with comprehensive value capture.
                </p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Zap className="h-4 w-4 mr-2 text-purple-500" />
                    <span>TEI Framework (4 categories)</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Shield className="h-4 w-4 mr-2 text-purple-500" />
                    <span>Data-driven value quantification</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <TrendingUp className="h-4 w-4 mr-2 text-purple-500" />
                    <span>Typical 5-10x client ROI</span>
                  </div>
                </div>
                <Button asChild className="w-full" variant="secondary">
                  <Link href="/models/value-based-roi">
                    Explore Model
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link href="/models">
                View All 11 Pricing Models
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The $50M-$100M Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform pricing from tactical to strategic, capturing AI productivity value while differentiating against all competitor types
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-3">
                $50M-$100M
              </div>
              <div className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                Incremental annual revenue by Year 3 through innovative pricing models and improved win rates
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-3">
                5-10x
              </div>
              <div className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                ROI on pricing transformation investment measured over 3 years
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-3">
                45-50%
              </div>
              <div className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                Target gross margins vs. 40-45% baseline through value-based pricing
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block max-w-2xl border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="text-sm font-medium text-blue-600 mb-2">KEY INSIGHT</div>
                <div className="text-lg text-gray-900 mb-4">
                  "AI doesn't reduce consultant value—it amplifies it. Rather than lowering prices due to faster delivery,
                  charge for the enhanced value and superior outcomes enabled by AI."
                </div>
                <div className="text-sm text-gray-500">— Pricing Excellence Playbook, Section 2</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Card className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900 text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <CardContent className="relative p-12">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Transform Your Pricing Strategy?
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Start with our industry-leading interactive tools. Calculate ROI in minutes, select optimal pricing models through guided wizards,
                  or explore battle-tested competitive strategies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg">
                    <Link href="/tools/roi-calculator">
                      <Calculator className="mr-2 h-5 w-5" />
                      Start with ROI Calculator
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20">
                    <Link href="/tools/model-selector">
                      <Target className="mr-2 h-5 w-5" />
                      Find Your Model
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20">
                    <Link href="/case-studies">
                      <Award className="mr-2 h-5 w-5" />
                      See Results
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
