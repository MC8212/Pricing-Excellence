import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Target,
  DollarSign,
  Zap,
  Shield,
  BarChart,
  Calculator
} from "lucide-react";

// Comprehensive pricing models data
const allModels = [
  {
    id: "outcome-based",
    title: "Outcome-Based Pricing",
    tagline: "73% Client Preference",
    description: "Fees tied to measurable results. Payment only when outcomes delivered.",
    risk: "high",
    reward: "high",
    complexity: "high",
    popular: true,
    hasCalculator: true,
    icon: Target,
    color: "blue"
  },
  {
    id: "ai-productivity-multiplier",
    title: "AI Productivity Multiplier",
    tagline: "10x Value, Not Reduced Time",
    description: "Charge for amplified value enabled by AI, not reduced consultant hours.",
    risk: "medium",
    reward: "high",
    complexity: "medium",
    hasCalculator: true,
    icon: Zap,
    color: "yellow"
  },
  {
    id: "tiered-augmentation",
    title: "Tiered AI Augmentation",
    tagline: "Good-Better-Best",
    description: "Three tiers: Traditional, AI-Enhanced, AI-Native with 10-40% premiums.",
    risk: "low",
    reward: "medium",
    complexity: "medium",
    popular: true,
    hasCalculator: true,
    icon: BarChart,
    color: "green"
  },
  {
    id: "consumption-based",
    title: "Consumption-Based Models",
    tagline: "Pay for What You Use",
    description: "Usage-based pricing: API calls, data processed, outputs generated.",
    risk: "low",
    reward: "medium",
    complexity: "medium",
    hasCalculator: true,
    icon: Calculator,
    color: "cyan"
  },
  {
    id: "platform-saas-hybrid",
    title: "Platform/SaaS Hybrid",
    tagline: "Subscription + Services",
    description: "Recurring subscription plus professional services fees.",
    risk: "medium",
    reward: "high",
    complexity: "high",
    hasCalculator: true,
    icon: TrendingUp,
    color: "indigo"
  },
  {
    id: "success-based-risk-sharing",
    title: "Success-Based Risk-Sharing",
    tagline: "We Share Your Risk",
    description: "40-60% base + 40-60% success fee upon achievement.",
    risk: "high",
    reward: "high",
    complexity: "medium",
    popular: true,
    hasCalculator: true,
    icon: Shield,
    color: "purple"
  },
  {
    id: "subscription-continuous",
    title: "Subscription for Continuous Insights",
    tagline: "Recurring Revenue Model",
    description: "Monthly subscription providing ongoing AI insights and advisory.",
    risk: "low",
    reward: "medium",
    complexity: "medium",
    hasCalculator: false,
    icon: TrendingUp,
    color: "teal"
  },
  {
    id: "value-based-roi",
    title: "Value-Based with ROI Guarantees",
    tagline: "10-25% of Total Value",
    description: "Fee based on comprehensive Total Economic Impact framework.",
    risk: "medium",
    reward: "high",
    complexity: "high",
    hasCalculator: true,
    icon: DollarSign,
    color: "emerald"
  },
  {
    id: "hybrid-customized",
    title: "Hybrid & Customized Models",
    tagline: "Mix and Match",
    description: "Combine multiple models for customized win-win structures.",
    risk: "medium",
    reward: "medium",
    complexity: "medium",
    hasCalculator: false,
    icon: Target,
    color: "orange"
  },
  {
    id: "productized-solutions",
    title: "Productized AI Solutions",
    tagline: "60-80% Margins",
    description: "Convert consulting IP into scalable AI products and platforms.",
    risk: "medium",
    reward: "high",
    complexity: "high",
    hasCalculator: false,
    icon: Zap,
    color: "pink"
  },
  {
    id: "time-materials",
    title: "Time & Materials (Legacy)",
    tagline: "Traditional Hourly",
    description: "Hourly billing for uncertain scope and staff augmentation.",
    risk: "low",
    reward: "low",
    complexity: "low",
    hasCalculator: false,
    icon: BarChart,
    color: "gray"
  }
];

const getRiskColor = (risk: string) => {
  if (risk === "high") return "text-red-600 bg-red-50 border-red-200";
  if (risk === "medium") return "text-yellow-600 bg-yellow-50 border-yellow-200";
  return "text-green-600 bg-green-50 border-green-200";
};

const getRewardColor = (reward: string) => {
  if (reward === "high") return "text-green-600 bg-green-50 border-green-200";
  if (reward === "medium") return "text-yellow-600 bg-yellow-50 border-yellow-200";
  return "text-gray-600 bg-gray-50 border-gray-200";
};

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-4" variant="secondary">
            11 Strategic Frameworks
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Pricing Models Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guide to AI-enabled pricing strategies. From outcome-based to productized solutions,
            master the models driving $50M-$100M revenue transformations.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">11</div>
              <div className="text-sm text-gray-600">Total Models</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">8</div>
              <div className="text-sm text-gray-600">With Calculators</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Case Studies</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Battle-Tested</div>
            </CardContent>
          </Card>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allModels.map((model) => {
            const Icon = model.icon;
            return (
              <Card
                key={model.id}
                className="relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-blue-500"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${model.color}-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform`} />

                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${model.color}-400 to-${model.color}-600 rounded-lg flex items-center justify-center shadow-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {model.popular && (
                      <Badge className="bg-blue-100 text-blue-700">Popular</Badge>
                    )}
                  </div>

                  <CardTitle className="text-xl mb-1">{model.title}</CardTitle>
                  <CardDescription className="font-medium">{model.tagline}</CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {model.description}
                  </p>

                  {/* Risk/Reward Indicators */}
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className={getRiskColor(model.risk)}>
                      {model.risk.charAt(0).toUpperCase() + model.risk.slice(1)} Risk
                    </Badge>
                    <Badge variant="outline" className={getRewardColor(model.reward)}>
                      {model.reward.charAt(0).toUpperCase() + model.reward.slice(1)} Reward
                    </Badge>
                    {model.hasCalculator && (
                      <Badge variant="outline" className="text-blue-600 bg-blue-50">
                        <Calculator className="w-3 h-3 mr-1" />
                        Calculator
                      </Badge>
                    )}
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/models/${model.id}`}>
                      Explore Model
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white border-0">
          <CardContent className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Model to Use?</h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Our Pricing Model Selection Wizard asks 8 questions about your situation and recommends
              the optimal model(s) with confidence scores and rationale.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/tools/model-selector">
                <Target className="mr-2 h-5 w-5" />
                Start Model Selector Wizard
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
