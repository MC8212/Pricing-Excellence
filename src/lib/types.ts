// Core Types for Pricing Excellence Website

export type RiskLevel = "low" | "medium" | "high";
export type Industry = "public-sector" | "retail-cpg" | "life-sciences" | "financial-services" | "mid-market";
export type CompetitorType = "big-four" | "tech-forward" | "boutique";

export interface PricingModel {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  marketAdoption?: string;
  riskLevel: RiskLevel;
  rewardLevel: RiskLevel; // Using same type for consistency
  complexityLevel: RiskLevel;

  // Pricing structure
  pricingFormula: string;
  typicalRange: string;

  // Usage guidance
  whenToUse: string[];
  whenNotToUse: string[];
  bestFor: string[];

  // Examples and applications
  nhApplications: Array<{
    title: string;
    description: string;
    pricing: string;
  }>;

  // Related content
  relatedModels: string[];
  relatedPractices: string[];
  relatedIndustries: Industry[];
  caseStudyIds: string[];

  // Calculator configuration (if applicable)
  hasCalculator: boolean;
  calculatorType?: "outcome-based" | "value-based" | "tiered" | "consumption" | "platform" | "generic";
}

export interface BestPractice {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  keyBenefits: string[];
  implementation: {
    steps: string[];
    requirements: string[];
    commonPitfalls: string[];
  };
  nhExamples: string[];
  relatedModels: string[];
  tools: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: Industry;
  pricingModelId: string;

  clientProfile: {
    type: string;
    revenue?: string;
    challenge: string;
    desiredOutcome: string;
  };

  competition: Array<{
    competitor: string;
    competitorType: CompetitorType;
    price: string;
    approach: string;
    weaknesses?: string;
  }>;

  nhSolution: {
    pricingModel: string;
    structure: string;
    baselineFee?: string;
    successFee?: string;
    totalFee: string;
    rationale: string;
  };

  results: {
    timeline: string;
    outcomeAchieved: string;
    nhFeeEarned: string;
    clientValue: string;
    roi: string;
    paybackPeriod?: string;
  };

  whyWeWon: string[];

  // For interactive scenarios
  isInteractive: boolean;
  adjustableParams?: {
    baseline: number;
    target: number;
    feePerUnit?: number;
    riskMultiplier?: number;
  };
}

export interface IndustryStrategy {
  id: Industry;
  name: string;
  overview: string;
  economics: {
    margins: string;
    keyDrivers: string[];
    challenges: string[];
  };
  procurement: {
    process: string;
    timeline: string;
    keyStakeholders: string[];
    evaluationCriteria: string[];
  };
  recommendedModels: string[];
  typicalRanges: string;
  valuePositioning: string[];
  caseStudyIds: string[];
}

export interface CompetitorAnalysis {
  id: CompetitorType;
  name: string;
  companies: string[];
  strengths: string[];
  weaknesses: string[];
  pricingApproach: string;
  typicalRates: {
    partner: string;
    seniorManager: string;
    manager: string;
    consultant: string;
  };
  nhAdvantages: string[];
  winStrategy: {
    target: string;
    leadWith: string;
    emphasize: string[];
    pricing: string;
  };
  positioning: string;
  counterMessaging: Array<{
    theySay: string;
    weSay: string;
  }>;
}

export interface CalculatorInput {
  id: string;
  label: string;
  type: "number" | "slider" | "select" | "text";
  defaultValue: number | string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  helpText?: string;
  options?: Array<{ label: string; value: string | number }>;
}

export interface CalculatorOutput {
  id: string;
  label: string;
  formula: string; // JavaScript expression
  format: "currency" | "percentage" | "number" | "multiplier";
  description?: string;
}

export interface ROICalculation {
  directBenefits: number;
  indirectBenefits: number;
  riskMitigation: number;
  strategicValue: number;
  totalValue: number;
  fee: number;
  roi: number;
  paybackMonths: number;
}
