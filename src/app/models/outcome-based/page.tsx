"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Target,
  TrendingUp,
  Shield,
  Calculator,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  DollarSign,
  Download,
  Award
} from "lucide-react";

export default function OutcomeBasedPricing() {
  const [baseline, setBaseline] = useState(2000000);
  const [achievement, setAchievement] = useState(110);
  const [riskMultiplier, setRiskMultiplier] = useState(1.3);

  const fee = baseline * (achievement / 100) * riskMultiplier;
  const savings = baseline * (achievement / 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/models" className="hover:text-blue-600">Pricing Models</Link>
          <span className="mx-2">→</span>
          <span>Outcome-Based Pricing</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900">
                Outcome-Based Pricing
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Fees tied directly to measurable business results
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge className="bg-blue-100 text-blue-700 text-sm px-3 py-1">
              73% Client Preference
            </Badge>
            <Badge variant="outline" className="text-red-600 border-red-300">
              High Risk
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-300">
              High Reward
            </Badge>
            <Badge variant="outline" className="text-orange-600 border-orange-300">
              High Complexity
            </Badge>
            <Badge className="bg-green-100 text-green-700">
              <Calculator className="w-3 h-3 mr-1 inline-block" />
              Has Calculator
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="guidance">When to Use</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What is Outcome-Based Pricing?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Outcome-based pricing ties consulting fees directly to measurable business results achieved through AI implementations
                  and transformation initiatives. Payment occurs only when specific, predefined outcomes are delivered and validated.
                  This model fundamentally aligns consultant and client incentives around results rather than effort, dramatically reducing
                  client perceived risk while positioning the firm as a true transformation partner.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Unlike traditional models where consultants are paid regardless of results, outcome-based pricing demonstrates confidence
                  in the approach and creates powerful differentiation in competitive situations. When executed well with clear metrics,
                  baseline establishment, and fair risk-sharing, this model can command premium economics (higher total fees than equivalent
                  T&M engagements) while winning more deals through reduced client risk.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                      Market Adoption
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 73% of consulting clients prefer outcome-based models</li>
                      <li>• McKinsey, BCG, Bain report ~25% of projects outcomes-priced</li>
                      <li>• Gaining traction as preferred model for AI transformations</li>
                      <li>• Clients report 30-40% higher satisfaction vs. hourly billing</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                      Pricing Formula
                    </h3>
                    <div className="bg-white p-4 rounded border-2 border-green-200 font-mono text-sm mb-3">
                      Fee = Baseline Value × Achievement % × Risk Multiplier (1.2-2.0)
                    </div>
                    <p className="text-sm text-gray-700">
                      Risk multiplier accounts for implementation uncertainty, external dependencies, and control over outcome drivers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Implementation Requirements</CardTitle>
                <CardDescription>What's needed to successfully execute outcome-based pricing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Clear, measurable baseline established before engagement (documented current state with third-party validation)",
                    "Defined timeline with measurement periods (typically 12 months post-implementation for sustained results)",
                    "Stakeholder alignment on success metrics, measurement methodologies, and data sources",
                    "Documented consensus on pricing formula with examples showing different outcome scenarios",
                    "Robust tracking infrastructure for continuous measurement and transparent reporting",
                    "Third-party validation processes for outcome verification (financial audits, operational audits)",
                    "Contractual clarity on attribution (how to separate AI impact from external factors)"
                  ].map((req, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calculator Tab */}
          <TabsContent value="calculator">
            <Card>
              <CardHeader>
                <CardTitle>Outcome-Based Pricing Calculator</CardTitle>
                <CardDescription>Calculate fees based on baseline value, achievement, and risk</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="baseline">Baseline Value (Annual Savings/Revenue)</Label>
                      <Input
                        id="baseline"
                        type="number"
                        value={baseline}
                        onChange={(e) => setBaseline(Number(e.target.value))}
                        className="text-lg"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Current state cost or revenue that will be improved
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="achievement">Achievement Percentage</Label>
                      <Input
                        id="achievement"
                        type="number"
                        value={achievement}
                        onChange={(e) => setAchievement(Number(e.target.value))}
                        className="text-lg"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Target improvement (100% = baseline, 150% = 50% better than target)
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="riskMultiplier">Risk Multiplier</Label>
                      <Input
                        id="riskMultiplier"
                        type="number"
                        step="0.1"
                        min="1.0"
                        max="2.0"
                        value={riskMultiplier}
                        onChange={(e) => setRiskMultiplier(Number(e.target.value))}
                        className="text-lg"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        1.2 = Low risk, 1.5 = Medium risk, 2.0 = High risk
                      </p>
                    </div>
                  </div>

                  <div>
                    <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0">
                      <CardHeader>
                        <CardTitle className="text-white text-2xl">Calculated Fee</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-5xl font-bold">
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(fee)}
                        </div>

                        <div className="space-y-2 text-sm text-blue-100">
                          <div className="flex justify-between">
                            <span>Baseline Value:</span>
                            <span className="font-medium">
                              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(baseline)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Achievement:</span>
                            <span className="font-medium">{achievement}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Risk Multiplier:</span>
                            <span className="font-medium">{riskMultiplier}x</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Client Savings:</span>
                            <span className="font-medium">
                              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(savings)}
                            </span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-blue-400">
                            <span>Client Net Benefit:</span>
                            <span className="font-bold text-lg">
                              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(savings - fee)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Client ROI:</span>
                            <span className="font-bold text-lg">
                              {fee > 0 ? `${(savings / fee).toFixed(1)}x` : '-'}
                            </span>
                          </div>
                        </div>

                        <Button className="w-full bg-white text-blue-900 hover:bg-blue-50">
                          <Download className="w-4 h-4 mr-2" />
                          Export Calculation
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Example Calculation</h3>
                  <p className="text-sm text-gray-700">
                    Target: Reduce supply chain costs by 20% ($2M savings on $10M baseline)
                    <br />Achievement: 22% reduction achieved ($2.2M savings)
                    <br />Fee = $2.2M × 110% × 1.3 risk multiplier = $3,146,000 = <strong className="text-blue-600">$314,600</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            {[
              {
                title: "Change Management AI - Employee Adoption",
                baseline: "40% employee adoption rate (historical average)",
                target: "75% adoption within 3 months",
                pricing: "$15,000 per percentage point above 60% (floor: $150K if <60%, cap: $375K if >85%)",
                result: "78% achieved = $15K × 18 points = $270,000 fee"
              },
              {
                title: "Supply Chain AI - Cost Reduction",
                baseline: "$12M annual supply chain operating costs",
                target: "18% cost reduction ($2.16M savings)",
                pricing: "12% of 3-year cumulative savings",
                result: "Fee: $777,600 paid over 18 months as savings realized"
              },
              {
                title: "Customer Experience AI - NPS Improvement",
                baseline: "Net Promoter Score of 35 (industry average 45)",
                target: "Reach NPS of 55+ (top quartile)",
                pricing: "$25,000 per NPS point improved above baseline",
                result: "NPS 58 achieved = $25K × 23 points = $575,000"
              }
            ].map((example, i) => (
              <Card key={i} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl">{example.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-700 mb-1">Baseline:</div>
                      <div className="text-gray-600">{example.baseline}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-1">Target:</div>
                      <div className="text-gray-600">{example.target}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-1">Pricing Structure:</div>
                      <div className="text-gray-600">{example.pricing}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-1">Result:</div>
                      <div className="text-green-600 font-semibold">{example.result}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button asChild className="w-full" size="lg">
              <Link href="/case-studies/medicaid-ai-optimization">
                <Award className="mr-2 h-5 w-5" />
                See Full Case Study: State Medicaid AI Optimization ($990K outcome-based deal)
              </Link>
            </Button>
          </TabsContent>

          {/* Guidance Tab */}
          <TabsContent value="guidance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <CheckCircle2 className="w-6 h-6 mr-2" />
                    When to Use This Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Outcomes are clearly measurable and attributable to your work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Client has strong appetite for innovation but high risk aversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Competitive situations where rivals use traditional T&M</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>High confidence in ability to deliver results based on track record</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Strong client relationship with mutual trust and transparency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Timeline sufficient to see sustained results (6-12 months minimum)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <XCircle className="w-6 h-6 mr-2" />
                    When NOT to Use This Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Outcomes are fuzzy, multi-causal, or heavily dependent on client actions outside your control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Baseline data is unavailable or unreliable (can't measure improvement accurately)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Client is unwilling to share data transparently for measurement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Timeline too short to see sustained results (need 6-12 months minimum)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>High external volatility makes attribution impossible (market crashes, regulatory changes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Cannot afford to deliver without full payment (cash flow constraints)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Best For */}
            <Card className="bg-blue-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2 text-blue-600" />
                  Best Fit Situations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Government contracts with performance requirements",
                    "Change management programs with adoption targets",
                    "Cost reduction initiatives with measurable savings",
                    "Process improvement projects with efficiency metrics",
                    "AI implementations with clear business outcomes",
                    "Situations where clients value results over effort"
                  ].map((situation, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{situation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Related Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/models/value-based-roi">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Value-Based with ROI Guarantees
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/models/success-based-risk-sharing">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Success-Based Risk-Sharing
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/practices/advisory-outcome-oriented">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Best Practice: Advisory & Outcome-Oriented
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Downloads & Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Proposal Template (Outcome-Based)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Measurement Framework Template
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Baseline Establishment Checklist
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
