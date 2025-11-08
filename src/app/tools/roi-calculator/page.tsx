"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calculator, Download, TrendingUp, DollarSign, Shield, Sparkles, RotateCcw } from "lucide-react";

interface ROIInputs {
  // Direct Benefits
  laborSavings: number;
  revenueIncrease: number;
  costAvoidance: number;

  // Indirect Benefits
  decisionQuality: number;
  timeToMarket: number;
  employeeExperience: number;

  // Risk Mitigation
  complianceProbability: number;
  complianceValue: number;
  securityProbability: number;
  securityValue: number;

  // Strategic Value
  futureCapabilities: number;
  competitiveMoat: number;

  // Fee calculation
  feePercentage: number;
}

const TEMPLATES = {
  "supply-chain": {
    name: "Supply Chain Optimization (CPG)",
    inputs: {
      laborSavings: 720000,
      revenueIncrease: 0,
      costAvoidance: 3120000,
      decisionQuality: 450000,
      timeToMarket: 300000,
      employeeExperience: 150000,
      complianceProbability: 40,
      complianceValue: 1500000,
      securityProbability: 0,
      securityValue: 0,
      futureCapabilities: 400000,
      competitiveMoat: 300000,
      feePercentage: 12
    }
  },
  "digital-transformation": {
    name: "Digital Transformation",
    inputs: {
      laborSavings: 500000,
      revenueIncrease: 1500000,
      costAvoidance: 800000,
      decisionQuality: 400000,
      timeToMarket: 600000,
      employeeExperience: 200000,
      complianceProbability: 25,
      complianceValue: 2000000,
      securityProbability: 30,
      securityValue: 1500000,
      futureCapabilities: 800000,
      competitiveMoat: 600000,
      feePercentage: 15
    }
  },
  "change-management": {
    name: "Change Management Program",
    inputs: {
      laborSavings: 300000,
      revenueIncrease: 0,
      costAvoidance: 400000,
      decisionQuality: 250000,
      timeToMarket: 150000,
      employeeExperience: 400000,
      complianceProbability: 10,
      complianceValue: 1000000,
      securityProbability: 0,
      securityValue: 0,
      futureCapabilities: 200000,
      competitiveMoat: 150000,
      feePercentage: 18
    }
  }
};

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    laborSavings: 0,
    revenueIncrease: 0,
    costAvoidance: 0,
    decisionQuality: 0,
    timeToMarket: 0,
    employeeExperience: 0,
    complianceProbability: 0,
    complianceValue: 0,
    securityProbability: 0,
    securityValue: 0,
    futureCapabilities: 0,
    competitiveMoat: 0,
    feePercentage: 15
  });

  // Calculate values
  const directBenefits = inputs.laborSavings + inputs.revenueIncrease + inputs.costAvoidance;
  const indirectBenefits = inputs.decisionQuality + inputs.timeToMarket + inputs.employeeExperience;
  const riskMitigation = (inputs.complianceProbability / 100 * inputs.complianceValue) + (inputs.securityProbability / 100 * inputs.securityValue);
  const strategicValue = inputs.futureCapabilities + inputs.competitiveMoat;

  const totalValue = directBenefits + indirectBenefits + riskMitigation + strategicValue;
  const nhFee = totalValue * (inputs.feePercentage / 100);
  const netBenefit = totalValue - nhFee;
  const roi = nhFee > 0 ? totalValue / nhFee : 0;
  const paybackMonths = nhFee > 0 ? Math.round((nhFee / (totalValue / 36)) * 10) / 10 : 0;

  // Chart data
  const valueBreakdown = [
    { name: "Direct Benefits", value: directBenefits, fill: "#3b82f6" },
    { name: "Indirect Benefits", value: indirectBenefits, fill: "#10b981" },
    { name: "Risk Mitigation", value: riskMitigation, fill: "#f59e0b" },
    { name: "Strategic Value", value: strategicValue, fill: "#8b5cf6" }
  ].filter(item => item.value > 0);

  const timelineData = Array.from({ length: 37 }, (_, i) => ({
    month: i,
    investment: i === 0 ? nhFee : nhFee,
    value: i === 0 ? 0 : (totalValue / 36) * i,
    netBenefit: i === 0 ? -nhFee : ((totalValue / 36) * i) - nhFee
  }));

  const loadTemplate = (templateKey: keyof typeof TEMPLATES) => {
    setInputs(TEMPLATES[templateKey].inputs);
  };

  const resetCalculator = () => {
    setInputs({
      laborSavings: 0,
      revenueIncrease: 0,
      costAvoidance: 0,
      decisionQuality: 0,
      timeToMarket: 0,
      employeeExperience: 0,
      complianceProbability: 0,
      complianceValue: 0,
      securityProbability: 0,
      securityValue: 0,
      futureCapabilities: 0,
      competitiveMoat: 0,
      feePercentage: 15
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-4" variant="secondary">
            <Calculator className="w-4 h-4 mr-2 inline-block" />
            Interactive Tool
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Calculate Total Economic Impact using the comprehensive TEI Framework. Quantify direct benefits, indirect benefits, risk mitigation, and strategic value to justify value-based pricing.
          </p>
        </div>

        {/* Template Selector */}
        <Card className="mb-8 border-2 border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
              Quick Start Templates
            </CardTitle>
            <CardDescription>Load pre-filled examples to see the calculator in action</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {Object.entries(TEMPLATES).map(([key, template]) => (
              <Button
                key={key}
                variant="outline"
                onClick={() => loadTemplate(key as keyof typeof TEMPLATES)}
                className="border-blue-300 hover:bg-blue-100"
              >
                {template.name}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={resetCalculator}
              className="border-gray-300"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel: Inputs */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Direct Benefits</CardTitle>
                <CardDescription>Quantifiable hard-dollar impacts (3-year total)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="laborSavings">Labor Cost Savings</Label>
                  <Input
                    id="laborSavings"
                    type="number"
                    value={inputs.laborSavings}
                    onChange={(e) => setInputs({...inputs, laborSavings: Number(e.target.value)})}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">e.g., 3 FTEs × $80K × 3 years = $720,000</p>
                </div>
                <div>
                  <Label htmlFor="revenueIncrease">Revenue Increases</Label>
                  <Input
                    id="revenueIncrease"
                    type="number"
                    value={inputs.revenueIncrease}
                    onChange={(e) => setInputs({...inputs, revenueIncrease: Number(e.target.value)})}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">e.g., 3% lift on $50M × 3 years = $4.5M</p>
                </div>
                <div>
                  <Label htmlFor="costAvoidance">Cost Avoidance</Label>
                  <Input
                    id="costAvoidance"
                    type="number"
                    value={inputs.costAvoidance}
                    onChange={(e) => setInputs({...inputs, costAvoidance: Number(e.target.value)})}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">e.g., Inventory reduction $1.8M/year × 3 = $5.4M</p>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Direct Benefits Total:</span>
                    <span className="text-blue-600">{formatCurrency(directBenefits)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Indirect Benefits</CardTitle>
                <CardDescription>Softer but real improvements converted to financial value</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="decisionQuality">Decision Quality Improvement</Label>
                  <Input
                    id="decisionQuality"
                    type="number"
                    value={inputs.decisionQuality}
                    onChange={(e) => setInputs({...inputs, decisionQuality: Number(e.target.value)})}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Value of better decisions (avoided bad investments)</p>
                </div>
                <div>
                  <Label htmlFor="timeToMarket">Time-to-Market Acceleration</Label>
                  <Input
                    id="timeToMarket"
                    type="number"
                    value={inputs.timeToMarket}
                    onChange={(e) => setInputs({...inputs, timeToMarket: Number(e.target.value)})}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Value of faster launches (earlier revenue)</p>
                </div>
                <div>
                  <Label htmlFor="employeeExperience">Employee Experience Improvement</Label>
                  <Input
                    id="employeeExperience"
                    type="number"
                    value={inputs.employeeExperience}
                    onChange={(e) => setInputs({...inputs, employeeExperience: Number(e.target.value)})}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Reduced turnover, higher productivity value</p>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Indirect Benefits Total:</span>
                    <span className="text-green-600">{formatCurrency(indirectBenefits)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Risk Mitigation Value</CardTitle>
                <CardDescription>Probability-weighted value of bad outcomes avoided</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="complianceProbability">Compliance Risk Probability (%)</Label>
                    <Input
                      id="complianceProbability"
                      type="number"
                      min="0"
                      max="100"
                      value={inputs.complianceProbability}
                      onChange={(e) => setInputs({...inputs, complianceProbability: Number(e.target.value)})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="complianceValue">Compliance Failure Cost</Label>
                    <Input
                      id="complianceValue"
                      type="number"
                      value={inputs.complianceValue}
                      onChange={(e) => setInputs({...inputs, complianceValue: Number(e.target.value)})}
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  Compliance Expected Value: {formatCurrency(inputs.complianceProbability / 100 * inputs.complianceValue)}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="securityProbability">Security Risk Probability (%)</Label>
                    <Input
                      id="securityProbability"
                      type="number"
                      min="0"
                      max="100"
                      value={inputs.securityProbability}
                      onChange={(e) => setInputs({...inputs, securityProbability: Number(e.target.value)})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="securityValue">Security Breach Cost</Label>
                    <Input
                      id="securityValue"
                      type="number"
                      value={inputs.securityValue}
                      onChange={(e) => setInputs({...inputs, securityValue: Number(e.target.value)})}
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  Security Expected Value: {formatCurrency(inputs.securityProbability / 100 * inputs.securityValue)}
                </div>

                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Risk Mitigation Total:</span>
                    <span className="text-orange-600">{formatCurrency(riskMitigation)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Strategic Option Value</CardTitle>
                <CardDescription>Future capabilities and opportunities enabled</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="futureCapabilities">Platform for Future Innovations</Label>
                  <Input
                    id="futureCapabilities"
                    type="number"
                    value={inputs.futureCapabilities}
                    onChange={(e) => setInputs({...inputs, futureCapabilities: Number(e.target.value)})}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">AI infrastructure enables future use cases</p>
                </div>
                <div>
                  <Label htmlFor="competitiveMoat">Competitive Moat / Market Protection</Label>
                  <Input
                    id="competitiveMoat"
                    type="number"
                    value={inputs.competitiveMoat}
                    onChange={(e) => setInputs({...inputs, competitiveMoat: Number(e.target.value)})}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">Market share protection value</p>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Strategic Value Total:</span>
                    <span className="text-purple-600">{formatCurrency(strategicValue)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <CardHeader>
                <CardTitle className="text-white">Fee Percentage</CardTitle>
                <CardDescription className="text-blue-100">Typical range: 10-25% of Total Economic Impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium">Fee Rate:</span>
                  <span className="text-3xl font-bold">{inputs.feePercentage}%</span>
                </div>
                <Slider
                  value={[inputs.feePercentage]}
                  onValueChange={(value) => setInputs({...inputs, feePercentage: value[0]})}
                  min={5}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-blue-200">
                  <span>5% (Low)</span>
                  <span>15% (Typical)</span>
                  <span>30% (Premium)</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel: Results */}
          <div className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            {/* Results Summary */}
            <Card className="border-2 border-blue-500 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="text-2xl">ROI Results</CardTitle>
                <CardDescription>Based on 3-year Total Economic Impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Big Numbers */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">ROI Multiple</div>
                    <div className="text-4xl font-bold text-green-600">
                      {roi > 0 ? `${roi.toFixed(1)}x` : '-'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Payback Period</div>
                    <div className="text-4xl font-bold text-blue-600">
                      {paybackMonths > 0 ? `${paybackMonths}mo` : '-'}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Value Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Total 3-Year Value:</span>
                    <span className="text-2xl font-bold text-gray-900">{formatCurrency(totalValue)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">North Highland Fee:</span>
                    <span className="text-2xl font-bold text-blue-600">{formatCurrency(nhFee)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Client Net Benefit:</span>
                    <span className="text-3xl font-bold text-green-600">{formatCurrency(netBenefit)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Create Proposal
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Visualizations */}
            <Card>
              <CardHeader>
                <CardTitle>Value Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                {totalValue > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={[
                      { category: 'Direct', value: directBenefits },
                      { category: 'Indirect', value: indirectBenefits },
                      { category: 'Risk', value: riskMitigation },
                      { category: 'Strategic', value: strategicValue }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                      <Tooltip formatter={(value) => formatCurrency(value as number)} />
                      <Bar dataKey="value" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-[300px] flex items-center justify-center text-gray-400">
                    Enter values to see visualization
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investment vs. Value Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                {totalValue > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={timelineData.filter((_, i) => i % 6 === 0)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom', offset: -5 }} />
                      <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                      <Tooltip formatter={(value) => formatCurrency(value as number)} />
                      <Legend />
                      <Line type="monotone" dataKey="investment" stroke="#ef4444" name="Investment" strokeWidth={2} />
                      <Line type="monotone" dataKey="value" stroke="#10b981" name="Cumulative Value" strokeWidth={2} />
                      <Line type="monotone" dataKey="netBenefit" stroke="#3b82f6" name="Net Benefit" strokeWidth={2} strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-[300px] flex items-center justify-center text-gray-400">
                    Enter values to see timeline
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Methodology Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>How the TEI Framework Works</CardTitle>
            <CardDescription>Understanding Total Economic Impact calculation methodology</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-blue-500" />
                  Direct Benefits
                </h3>
                <p className="text-sm text-gray-600">
                  Quantifiable hard-dollar impacts including labor cost savings (reduced FTEs), revenue increases (incremental sales),
                  and cost avoidance (expenses prevented). Use before-and-after measurement with financial validation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Indirect Benefits
                </h3>
                <p className="text-sm text-gray-600">
                  Softer but real improvements converted to financial value: better decisions (avoided bad investments),
                  faster time-to-market (earlier revenue), improved employee experience (retention savings).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-orange-500" />
                  Risk Mitigation
                </h3>
                <p className="text-sm text-gray-600">
                  Probability-weighted value of bad outcomes avoided: compliance fines (probability × fine amount),
                  security breaches (attack probability × breach cost), disruptions minimized.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
                  Strategic Value
                </h3>
                <p className="text-sm text-gray-600">
                  Future capabilities enabled: AI platform for innovations, competitive moat (capability competitors lack),
                  market expansion opportunities. Conservative estimate of future value.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
