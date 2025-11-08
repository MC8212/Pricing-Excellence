"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Target,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Shield,
  Calculator,
  Lightbulb
} from "lucide-react";

interface WizardState {
  outcomeMeasurability: "high" | "medium" | "low" | "";
  clientRiskTolerance: "high" | "medium" | "low" | "";
  relationshipMaturity: "new" | "developing" | "mature" | "";
  budgetVisibility: "fixed" | "flexible" | "unknown" | "";
  scopeCertainty: "clear" | "moderate" | "uncertain" | "";
  valueClarity: "high" | "medium" | "low" | "";
  timeline: "short" | "medium" | "long" | "";
  clientSophistication: "high" | "medium" | "low" | "";
}

export default function ModelSelector() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<WizardState>({
    outcomeMeasurability: "",
    clientRiskTolerance: "",
    relationshipMaturity: "",
    budgetVisibility: "",
    scopeCertainty: "",
    valueClarity: "",
    timeline: "",
    clientSophistication: ""
  });

  const questions = [
    {
      id: "outcomeMeasurability",
      question: "Can you clearly measure and attribute outcomes to your work?",
      options: [
        { value: "high", label: "Yes, very clear metrics", description: "We can measure specific improvements and attribute them to our work" },
        { value: "medium", label: "Moderately clear", description: "We can measure outcomes but attribution may be challenging" },
        { value: "low", label: "Difficult to measure", description: "Outcomes are fuzzy or multi-causal" }
      ]
    },
    {
      id: "clientRiskTolerance",
      question: "How much risk is your client willing to accept?",
      options: [
        { value: "high", label: "High risk tolerance", description: "Client comfortable with outcome-based or performance models" },
        { value: "medium", label: "Moderate risk tolerance", description: "Client wants some risk-sharing but needs protection" },
        { value: "low", label: "Risk-averse", description: "Client wants predictability and low risk" }
      ]
    },
    {
      id: "relationshipMaturity",
      question: "What's your relationship maturity with this client?",
      options: [
        { value: "new", label: "New relationship", description: "First engagement or early in relationship" },
        { value: "developing", label: "Developing relationship", description: "Done 1-2 projects together, building trust" },
        { value: "mature", label: "Mature partnership", description: "Long-term client with strong trust and transparency" }
      ]
    },
    {
      id: "budgetVisibility",
      question: "What's the client's budget situation?",
      options: [
        { value: "fixed", label: "Fixed budget", description: "Client has specific budget approved/allocated" },
        { value: "flexible", label: "Flexible budget", description: "Client can adjust based on value demonstrated" },
        { value: "unknown", label: "Budget unclear", description: "Budget visibility is limited or uncertain" }
      ]
    },
    {
      id: "scopeCertainty",
      question: "How well-defined is the project scope?",
      options: [
        { value: "clear", label: "Very clear", description: "Scope is well-defined with clear deliverables" },
        { value: "moderate", label: "Moderately clear", description: "General scope defined but details evolving" },
        { value: "uncertain", label: "Highly uncertain", description: "Scope will emerge through discovery" }
      ]
    },
    {
      id: "valueClarity",
      question: "Can you quantify the business impact and value?",
      options: [
        { value: "high", label: "Yes, clearly", description: "We can calculate ROI and value with confidence" },
        { value: "medium", label: "Somewhat", description: "We can estimate value but with uncertainty" },
        { value: "low", label: "Difficult", description: "Value is intangible or hard to quantify" }
      ]
    },
    {
      id: "timeline",
      question: "What's the expected engagement timeline?",
      options: [
        { value: "short", label: "Short (< 3 months)", description: "Quick project or assessment" },
        { value: "medium", label: "Medium (3-12 months)", description: "Standard transformation timeline" },
        { value: "long", label: "Long (12+ months)", description: "Multi-year transformation or ongoing" }
      ]
    },
    {
      id: "clientSophistication",
      question: "How sophisticated is the client with pricing models?",
      options: [
        { value: "high", label: "Very sophisticated", description: "Experienced with various pricing models" },
        { value: "medium", label: "Moderately sophisticated", description: "Open to innovation but needs education" },
        { value: "low", label: "Traditional", description: "Prefers familiar hourly or fixed-price models" }
      ]
    }
  ];

  const totalSteps = questions.length;
  const currentQuestion = questions[step];

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value
    });
  };

  const canProgress = answers[currentQuestion?.id as keyof WizardState] !== "";

  const nextStep = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setStep(totalSteps); // Go to results
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // Recommendation logic
  const getRecommendations = () => {
    const recommendations = [];

    // Outcome-Based: High measurability + Client accepts risk
    if (answers.outcomeMeasurability === "high" && answers.clientRiskTolerance !== "low") {
      recommendations.push({
        model: "Outcome-Based Pricing",
        confidence: 95,
        reason: "High outcome measurability and client risk tolerance make this ideal",
        link: "/models/outcome-based"
      });
    }

    // Risk-Sharing: Low client risk tolerance
    if (answers.clientRiskTolerance === "low") {
      recommendations.push({
        model: "Success-Based Risk-Sharing",
        confidence: 90,
        reason: "Risk-sharing reduces client downside while aligning incentives",
        link: "/models/success-based-risk-sharing"
      });
    }

    // Tiered: Medium everything, wants choice
    if (answers.scopeCertainty === "moderate" || answers.budgetVisibility === "unknown") {
      recommendations.push({
        model: "Tiered AI Augmentation",
        confidence: 85,
        reason: "Offering tiers provides choice and reduces decision risk",
        link: "/models/tiered-augmentation"
      });
    }

    // Value-Based: High value clarity + Clear scope
    if (answers.valueClarity === "high" && answers.scopeCertainty === "clear") {
      recommendations.push({
        model: "Value-Based with ROI Guarantees",
        confidence: 88,
        reason: "Strong value quantification enables comprehensive TEI approach",
        link: "/models/value-based-roi"
      });
    }

    // Subscription: Long timeline + Mature relationship
    if (answers.timeline === "long" && answers.relationshipMaturity === "mature") {
      recommendations.push({
        model: "Subscription for Continuous Insights",
        confidence: 82,
        reason: "Long timeline and strong relationship support recurring revenue model",
        link: "/models/subscription-continuous"
      });
    }

    // T&M: Uncertain scope + Low sophistication
    if (answers.scopeCertainty === "uncertain" || answers.clientSophistication === "low") {
      recommendations.push({
        model: "Time & Materials (Legacy)",
        confidence: 70,
        reason: "Uncertain scope or traditional client preferences suggest T&M approach",
        link: "/models/time-materials"
      });
    }

    // Hybrid: Complex situation
    if (recommendations.length === 0) {
      recommendations.push({
        model: "Hybrid & Customized Models",
        confidence: 75,
        reason: "Your situation suggests a custom hybrid approach",
        link: "/models/hybrid-customized"
      });
    }

    return recommendations.sort((a, b) => b.confidence - a.confidence).slice(0, 3);
  };

  const recommendations = step === totalSteps ? getRecommendations() : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="secondary">
            <Target className="w-4 h-4 mr-2 inline-block" />
            Interactive Wizard
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Pricing Model Selector
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answer 8 questions about your client situation and get personalized pricing model recommendations
            with confidence scores and rationale.
          </p>
        </div>

        {/* Progress Bar */}
        {step < totalSteps && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Question {step + 1} of {totalSteps}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((step + 1) / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Question Card */}
        {step < totalSteps ? (
          <Card className="shadow-xl border-2 border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
              <CardDescription>Select the option that best describes your situation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                value={answers[currentQuestion.id as keyof WizardState]}
                onValueChange={handleAnswer}
              >
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 rounded-lg border-2 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer"
                    onClick={() => handleAnswer(option.value)}
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      <div className="font-medium text-gray-900 mb-1">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>

                <Button
                  onClick={nextStep}
                  disabled={!canProgress}
                >
                  {step === totalSteps - 1 ? "See Recommendations" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Results */
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-green-600 to-emerald-700 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">
                  Analysis Complete!
                </h2>
                <p className="text-lg text-green-100">
                  Based on your answers, here are your recommended pricing models:
                </p>
              </CardContent>
            </Card>

            {recommendations.map((rec, i) => (
              <Card key={i} className="shadow-lg border-2 border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="text-lg px-4 py-1">
                      #{i + 1} Recommendation
                    </Badge>
                    <Badge variant="outline" className="text-lg border-green-500 text-green-700">
                      {rec.confidence}% Confidence
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{rec.model}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Why This Model?</div>
                      <div className="text-sm text-gray-700">{rec.reason}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild className="flex-1">
                      <Link href={rec.link}>
                        Learn More About This Model
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link href="/tools/roi-calculator">
                        <Calculator className="mr-2 h-4 w-4" />
                        Calculate ROI
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex gap-4 pt-6">
              <Button onClick={() => { setStep(0); setAnswers({
                outcomeMeasurability: "",
                clientRiskTolerance: "",
                relationshipMaturity: "",
                budgetVisibility: "",
                scopeCertainty: "",
                valueClarity: "",
                timeline: "",
                clientSophistication: ""
              }); }} variant="outline" className="flex-1">
                Start Over
              </Button>
              <Button asChild className="flex-1">
                <Link href="/models">
                  View All Models
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
