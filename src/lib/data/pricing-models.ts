import { PricingModel, RiskLevel, Industry } from "../types";

export const pricingModels: PricingModel[] = [
  {
    id: "outcome-based",
    title: "Outcome-Based Pricing",
    tagline: "73% Client Preference",
    shortDescription: "Fees tied directly to measurable business results. Payment occurs only when specific outcomes are delivered.",
    longDescription: "Outcome-based pricing fundamentally aligns consultant and client incentives around results rather than effort. Unlike traditional models where consultants are paid regardless of results, outcome-based pricing puts 'skin in the game,' demonstrating confidence and creating powerful differentiation.",
    marketAdoption: "73% of consulting clients now prefer outcome-based models. McKinsey reports ~25% of projects are outcomes-priced.",
    riskLevel: "high",
    rewardLevel: "high",
    complexityLevel: "high",
    pricingFormula: "Fee = Baseline Value × Achievement % × Risk Multiplier (1.2-2.0)",
    typicalRange: "$200K - $2M+ depending on value at stake",
    whenToUse: [
      "Outcomes are clearly measurable and attributable",
      "Client has strong appetite for innovation but high risk aversion",
      "Competitive situations where rivals use traditional T&M",
      "High confidence in ability to deliver results",
      "Strong client relationship with mutual trust"
    ],
    whenNotToUse: [
      "Outcomes are fuzzy or multi-causal",
      "Baseline data unavailable or unreliable",
      "Client unwilling to share data transparently",
      "Timeline too short (<6 months to see results)",
      "High external volatility makes attribution impossible"
    ],
    bestFor: [
      "Government contracts with performance requirements",
      "Change management programs with adoption targets",
      "Cost reduction initiatives with measurable savings",
      "Process improvement with efficiency metrics"
    ],
    nhApplications: [
      {
        title: "Change Management AI",
        description: "Price based on % employee adoption vs. baseline",
        pricing: "$15K per percentage point above 60% adoption (floor: $150K, cap: $375K)"
      },
      {
        title: "Supply Chain AI",
        description: "Fee tied to % inventory cost reduction achieved",
        pricing: "12% of 3-year cumulative savings (e.g., $777K for $6.5M savings)"
      },
      {
        title: "Customer Experience AI",
        description: "Pricing linked to NPS improvement points",
        pricing: "$25K per NPS point improved above baseline"
      }
    ],
    relatedModels: ["value-based-roi", "success-based-risk-sharing"],
    relatedPractices: ["advisory-outcome-oriented", "productivity-gains-over-time"],
    relatedIndustries: ["public-sector", "retail-cpg"],
    caseStudyIds: ["medicaid-ai-optimization"],
    hasCalculator: true,
    calculatorType: "outcome-based"
  },

  {
    id: "ai-productivity-multiplier",
    title: "AI Productivity Multiplier Pricing",
    tagline: "Charge for 10x Value, Not Reduced Time",
    shortDescription: "Price based on amplified value and superior outcomes enabled by AI, not the reduced consultant hours.",
    longDescription: "AI Productivity Multiplier Pricing addresses the core paradox of the AI era: charge for the 10x value delivered, not the reduced time spent. Position AI as a value amplifier that enables superior outcomes through speed, quality, scale, risk reduction, and continuous improvement.",
    marketAdoption: "Emerging model - forward-thinking firms capturing 25-40% premiums over traditional pricing",
    riskLevel: "medium",
    rewardLevel: "high",
    complexityLevel: "medium",
    pricingFormula: "Traditional Fee × Value Multiplier (1.0-1.4x) based on speed, quality, scale, risk reduction",
    typicalRange: "10-40% premium over traditional consulting fees",
    whenToUse: [
      "AI delivers demonstrably superior outcomes",
      "Speed to value is critical for client",
      "Analysis depth/breadth exceeds manual capacity",
      "Client sophisticated enough to understand value vs. effort",
      "Competitive differentiation through AI capabilities"
    ],
    whenNotToUse: [
      "Client fixated on hourly rates and effort",
      "Commodity work where AI doesn't add significant value",
      "Cannot demonstrate superior outcomes",
      "Competitive situation requires matching lowest price"
    ],
    bestFor: [
      "Market research with 10x data analysis capacity",
      "Strategic due diligence with comprehensive document review",
      "Scenario modeling with 1000+ scenario testing",
      "Competitive intelligence with real-time monitoring"
    ],
    nhApplications: [
      {
        title: "Market Research Projects",
        description: "AI-augmented research analyzing 50x more data sources, 2-week delivery",
        pricing: "$160K-$180K (vs. $150K traditional, 7-20% premium despite 4x efficiency)"
      },
      {
        title: "Strategic Due Diligence",
        description: "AI-powered analysis of 100% documents, automated risk detection, 2-week delivery",
        pricing: "$220K-$260K (vs. $200K traditional, 10-30% premium)"
      },
      {
        title: "Organizational Strategy",
        description: "AI-enhanced with 1000+ scenario simulations, predictive modeling, 6-week delivery",
        pricing: "$330K-$375K (vs. $300K traditional, 10-25% premium)"
      }
    ],
    relatedModels: ["tiered-augmentation", "value-based-roi"],
    relatedPractices: ["productivity-gains-over-time"],
    relatedIndustries: ["retail-cpg", "life-sciences"],
    caseStudyIds: [],
    hasCalculator: true,
    calculatorType: "generic"
  },

  {
    id: "tiered-augmentation",
    title: "Tiered AI Augmentation Packages",
    tagline: "Good-Better-Best Pricing",
    shortDescription: "Offer three service tiers based on degree of AI augmentation: Traditional, AI-Enhanced, AI-Native.",
    longDescription: "Tiered AI Augmentation shifts conversations from hourly rates to value tiers. Offers clients explicit choices enabling self-selection based on budget, timeline, and desired outcomes. Creates anchoring effects and enables premium pricing for advanced AI while maintaining accessible entry points.",
    marketAdoption: "Widely adopted in SaaS (92% use tiering), emerging in consulting with strong client preference",
    riskLevel: "low",
    rewardLevel: "medium",
    complexityLevel: "medium",
    pricingFormula: "Traditional (baseline) / AI-Enhanced (+10-20%) / AI-Native (+25-40%)",
    typicalRange: "Traditional: $150K-$500K | Enhanced: $180K-$600K | Native: $225K-$700K",
    whenToUse: [
      "Client wants choice and flexibility",
      "Uncertain about AI adoption readiness",
      "Competitive situation benefits from options",
      "Can deliver differentiated value at each tier",
      "Want to encourage upselling over time"
    ],
    whenNotToUse: [
      "Only one tier is viable (others would be poor value)",
      "Client has clear preference/requirements (no need for options)",
      "Tiers would confuse rather than clarify",
      "Cannot deliver meaningful differences between tiers"
    ],
    bestFor: [
      "First-time AI adopters wanting options",
      "Clients with unclear budgets",
      "Competitive situations requiring flexibility",
      "Opportunities for future expansion through tier upgrades"
    ],
    nhApplications: [
      {
        title: "Supply Chain Optimization",
        description: "Traditional ($250K, 12 weeks) / Enhanced ($300K, 6 weeks) / Native ($375K, 3 weeks + monitoring)",
        pricing: "Traditional establishes baseline, Enhanced most popular, Native premium"
      },
      {
        title: "Change Management Program",
        description: "Traditional ($180K) / Enhanced ($210K with AI sentiment) / Native ($260K with real-time tracking)",
        pricing: "60-70% select Enhanced tier balancing innovation and proven methods"
      }
    ],
    relatedModels: ["ai-productivity-multiplier", "hybrid-customized"],
    relatedPractices: ["cross-workstream-synergies"],
    relatedIndustries: ["retail-cpg", "mid-market"],
    caseStudyIds: ["cpg-supply-chain"],
    hasCalculator: true,
    calculatorType: "tiered"
  },

  {
    id: "consumption-based",
    title: "Consumption-Based Models",
    tagline: "Pay for What You Use",
    shortDescription: "Clients pay based on actual usage—API calls, data processed, compute time, or outputs generated.",
    longDescription: "Consumption-based pricing dramatically lowers barriers to entry (pay only for what you use) while scaling naturally with client value realization. Creates transparent, trustworthy pricing with alignment between cost and value. Popular with 72% of enterprise decision-makers for AI technologies.",
    marketAdoption: "38% of AI companies use pure usage-based pricing; 56% use hybrid subscription + consumption",
    riskLevel: "low",
    rewardLevel: "medium",
    complexityLevel: "medium",
    pricingFormula: "Per-unit pricing: $/query, $/GB, $/hour, $/output × Volume",
    typicalRange: "$0.10-$500 per unit depending on complexity; $5K-$50K monthly typical",
    whenToUse: [
      "Usage varies significantly between clients",
      "Want to lower barrier to entry (no high upfront cost)",
      "Can accurately meter consumption",
      "Value scales with usage",
      "Platform or tool-based services"
    ],
    whenNotToUse: [
      "Cannot accurately measure consumption",
      "Fixed costs dominate (usage doesn't drive costs)",
      "Client wants budget predictability",
      "Metering infrastructure too expensive to build"
    ],
    bestFor: [
      "AI analytics platforms",
      "Automated reporting services",
      "API-based consulting tools",
      "Data processing services"
    ],
    nhApplications: [
      {
        title: "AI-Powered Analytics Platform",
        description: "Per-query and per-report pricing",
        pricing: "$2.50/query, $500/comprehensive report, $5,000/custom dashboard"
      },
      {
        title: "Continuous Risk Monitoring",
        description: "Per data point analyzed and per anomaly detected",
        pricing: "$1/data point, $100/anomaly detected, $1,000/critical issue with remediation"
      },
      {
        title: "Automated Document Processing",
        description: "Per document processed by complexity",
        pricing: "$5/standard document, $50/complex contract, $500/legal review"
      }
    ],
    relatedModels: ["platform-saas-hybrid", "subscription-continuous-insights"],
    relatedPractices: ["productivity-gains-over-time"],
    relatedIndustries: ["mid-market", "financial-services"],
    caseStudyIds: [],
    hasCalculator: true,
    calculatorType: "consumption"
  },

  {
    id: "platform-saas-hybrid",
    title: "Platform/SaaS Hybrid Models",
    tagline: "Subscription + Services",
    shortDescription: "Combines recurring subscription revenue (platform access) with professional services fees (implementation and customization).",
    longDescription: "Platform/SaaS Hybrid provides revenue stability through subscriptions while capturing high-margin services revenue. Positions North Highland as both technology provider and transformation partner. 56% of AI companies use hybrid subscription + usage models.",
    marketAdoption: "56% of AI companies use hybrid models; emerging as preferred model for consulting platforms",
    riskLevel: "medium",
    rewardLevel: "high",
    complexityLevel: "high",
    pricingFormula: "Monthly Subscription + Implementation Fee + Success Services + Overages",
    typicalRange: "$10K-$75K/month subscription + $50K-$500K implementation + add-ons",
    whenToUse: [
      "Have proprietary platform or AI tool to license",
      "Can provide ongoing value through continuous insights",
      "Implementation/customization needed beyond platform",
      "Want recurring revenue and client stickiness",
      "Can support platform operations efficiently"
    ],
    whenNotToUse: [
      "No platform to offer (pure services)",
      "Platform requires excessive customization per client",
      "Cannot support ongoing platform operations",
      "Market unwilling to pay subscription + services"
    ],
    bestFor: [
      "Transformation intelligence platforms",
      "Continuous monitoring and optimization services",
      "Industry-specific AI platforms",
      "Enterprise clients needing ongoing support"
    ],
    nhApplications: [
      {
        title: "Transformation Intelligence Platform",
        description: "Subscription for platform access + implementation + premium advisory",
        pricing: "$30K-$80K/month + $150K implementation + $20K/month premium advisory"
      },
      {
        title: "Supply Chain Resilience Suite",
        description: "AI-powered monitoring + optimization services",
        pricing: "$40K-$100K/month + $200K setup + consumption fees for advanced analytics"
      }
    ],
    relatedModels: ["subscription-continuous-insights", "consumption-based"],
    relatedPractices: ["project-to-mo-transitions"],
    relatedIndustries: ["retail-cpg", "life-sciences"],
    caseStudyIds: [],
    hasCalculator: true,
    calculatorType: "platform"
  },

  {
    id: "success-based-risk-sharing",
    title: "Success-Based & Risk-Sharing Models",
    tagline: "We Share Your Risk",
    shortDescription: "Fees contingent on achieving specific results. Typical structure: 40-60% base fee + 40-60% success fee.",
    longDescription: "Success-based risk-sharing demonstrates partnership commitment by tying significant portion of fees to outcome achievement. Reduces client downside risk while providing upside participation. Powerful differentiation in competitive situations where competitors want full payment regardless of results.",
    marketAdoption: "Increasingly popular for AI transformations and high-uncertainty initiatives",
    riskLevel: "high",
    rewardLevel: "high",
    complexityLevel: "medium",
    pricingFormula: "Base Fee (40-60%) + Success Fee (40-60%) upon outcome achievement",
    typicalRange: "Base: $200K-$1M | Success: $200K-$3M | Total: $400K-$4M if successful",
    whenToUse: [
      "Client is risk-averse and wants shared risk",
      "High-uncertainty projects (AI pilots, transformations)",
      "Competitive differentiation opportunity",
      "Confident in ability to deliver results",
      "Large upside justifies downside risk"
    ],
    whenNotToUse: [
      "Cannot afford to deliver without full payment",
      "Outcomes heavily dependent on client actions beyond your control",
      "Measurement disputes likely",
      "Small engagement where risk-sharing admin exceeds value"
    ],
    bestFor: [
      "AI transformation programs",
      "Clinical trial optimizations",
      "Major change initiatives",
      "Market entry strategies with measurable goals"
    ],
    nhApplications: [
      {
        title: "AI Transformation Program",
        description: "$2M engagement with performance tiers",
        pricing: "$800K base (40%) + up to $1.2M in performance fees based on cost reduction achievement"
      },
      {
        title: "Digital Transformation (Mid-Market)",
        description: "Pilot + implementation with risk-sharing",
        pricing: "$50K pilot + $150K base + 20% of Year 1 savings (capped at $300K total)"
      }
    ],
    relatedModels: ["outcome-based", "value-based-roi"],
    relatedPractices: ["advisory-outcome-oriented"],
    relatedIndustries: ["life-sciences", "public-sector"],
    caseStudyIds: ["pharma-clinical-trial"],
    hasCalculator: true,
    calculatorType: "outcome-based"
  },

  {
    id: "subscription-continuous-insights",
    title: "Subscription Models for Continuous Insights",
    tagline: "Recurring Revenue, Continuous Value",
    shortDescription: "Shift from project-based to subscription-based revenue providing continuous AI-powered insights and advisory.",
    longDescription: "Subscription models create predictable recurring revenue while delivering ongoing value to clients. 89% of buyers want more digital delivery models from consultants. Enables long-term partnerships, reduces sales cycles, and creates opportunities for expansion revenue.",
    marketAdoption: "89% of buyers want digital delivery models; subscriptions increasingly preferred over projects",
    riskLevel: "low",
    rewardLevel: "medium",
    complexityLevel: "medium",
    pricingFormula: "Monthly Subscription Fee × 12 months (or annual commit with 10-15% discount)",
    typicalRange: "$5K-$75K per month depending on scope and support level",
    whenToUse: [
      "Can provide ongoing continuous value (not one-time)",
      "Want predictable recurring revenue",
      "Building long-term client relationships",
      "Have platform or continuous insights to deliver",
      "Client values always-on support and intelligence"
    ],
    whenNotToUse: [
      "One-time project with clear end date",
      "Cannot sustain ongoing value delivery",
      "Client prefers project-based budgeting",
      "Renewal risk too high (churn would be problematic)"
    ],
    bestFor: [
      "Strategic advisory retainers",
      "Continuous market intelligence",
      "Ongoing transformation monitoring",
      "Platform access with support"
    ],
    nhApplications: [
      {
        title: "Transformation Intelligence Subscription",
        description: "Real-time monitoring + strategic advisory",
        pricing: "Basic $20K/month | Professional $45K/month | Enterprise $85K/month"
      },
      {
        title: "Supply Chain Resilience Subscription",
        description: "AI risk monitoring + optimization recommendations",
        pricing: "Standard $30K/month | Advanced $65K/month | Premium $120K/month"
      }
    ],
    relatedModels: ["platform-saas-hybrid", "consumption-based"],
    relatedPractices: ["project-to-mo-transitions", "advisory-outcome-oriented"],
    relatedIndustries: ["retail-cpg", "financial-services"],
    caseStudyIds: [],
    hasCalculator: true,
    calculatorType: "platform"
  },

  {
    id: "value-based-roi",
    title: "Value-Based with ROI Guarantees",
    tagline: "10-25% of Value Created",
    shortDescription: "Fee = 10-25% of first-year value or 5-15% of 3-year cumulative value using Total Economic Impact framework.",
    longDescription: "Value-based pricing with ROI guarantees uses comprehensive TEI (Total Economic Impact) framework capturing direct benefits, indirect benefits, risk mitigation, and strategic option value. Provides rigorous financial justification while aligning fees with client value realization.",
    marketAdoption: "Standard for high-value consulting engagements; ROI guarantees emerging as differentiation",
    riskLevel: "medium",
    rewardLevel: "high",
    complexityLevel: "high",
    pricingFormula: "Fee = (Direct + Indirect + Risk + Strategic Value) × Fee % (10-25%)",
    typicalRange: "$150K-$2M+ based on total economic impact quantified",
    whenToUse: [
      "Can quantify comprehensive value (not just direct savings)",
      "Client sophisticated and willing to work through TEI analysis",
      "Large total value justifies comprehensive analysis",
      "Want to capture fair share of significant value created",
      "Differentiation through rigorous value quantification"
    ],
    whenNotToUse: [
      "Value primarily intangible or unmeasurable",
      "Client wants simple pricing (TEI may seem complex)",
      "Small engagement where TEI analysis effort exceeds value",
      "Cannot get client data needed for value calculation"
    ],
    bestFor: [
      "Supply chain optimizations with multiple value streams",
      "Digital transformations with broad impact",
      "Process improvements with measurable efficiency",
      "Technology implementations with clear ROI"
    ],
    nhApplications: [
      {
        title: "Supply Chain AI Optimization",
        description: "18% of 3-year cumulative inventory cost savings",
        pricing: "$1.46M for $8.1M 3-year value (18% fee rate)"
      },
      {
        title: "AI-Powered CX Transformation",
        description: "15% of total 3-year economic impact",
        pricing: "$540K for $3.6M total value (customer service savings + retention value)"
      }
    ],
    relatedModels: ["outcome-based", "success-based-risk-sharing"],
    relatedPractices: ["advisory-outcome-oriented"],
    relatedIndustries: ["retail-cpg", "life-sciences"],
    caseStudyIds: ["cpg-supply-chain"],
    hasCalculator: true,
    calculatorType: "value-based"
  },

  {
    id: "hybrid-customized",
    title: "Hybrid & Customized Models",
    tagline: "Mix and Match for Win-Win Deals",
    shortDescription: "Combine elements of multiple pricing models to craft customized win-win structures.",
    longDescription: "Hybrid models provide flexibility to address unique client situations by mixing fixed fees, performance bonuses, subscriptions, T&M, and other elements. Enables creative deal structures that balance client constraints with NH profitability goals.",
    marketAdoption: "Most sophisticated firms use hybrid models for 30-50% of engagements",
    riskLevel: "medium",
    rewardLevel: "medium",
    complexityLevel: "medium",
    pricingFormula: "Custom combination based on client situation",
    typicalRange: "Highly variable - depends on structure",
    whenToUse: [
      "Client situation doesn't fit standard models cleanly",
      "Need to balance multiple objectives (risk, predictability, alignment)",
      "Competitive situation requires creative approach",
      "Long-term relationship worth customizing structure",
      "Client sophisticated enough to understand custom models"
    ],
    whenNotToUse: [
      "Standard model would work fine (avoid unnecessary complexity)",
      "Client wants simplicity over optimization",
      "Administrative burden of custom model exceeds benefits",
      "Creates precedent that's unsustainable for future clients"
    ],
    bestFor: [
      "Strategic accounts requiring tailored approaches",
      "Complex multi-phase transformations",
      "Situations with mixed risk profiles",
      "Innovative clients open to creative structures"
    ],
    nhApplications: [
      {
        title: "Fixed Base + Performance Bonus",
        description: "De-risks client while incentivizing NH excellence",
        pricing: "$400K fixed + up to $200K bonus for exceeding targets"
      },
      {
        title: "Subscription + Professional Services",
        description: "Recurring platform revenue + high-margin project work",
        pricing: "$25K/month subscription + $150K-$500K per implementation project"
      },
      {
        title: "T&M with Cap + Gainshare",
        description: "Flexibility with outcome participation",
        pricing: "$250/hour capped at $500K + 15% of documented savings above baseline"
      }
    ],
    relatedModels: ["outcome-based", "subscription-continuous-insights", "time-materials"],
    relatedPractices: ["advisory-outcome-oriented", "no-cost-transitioning"],
    relatedIndustries: ["mid-market", "financial-services"],
    caseStudyIds: [],
    hasCalculator: false
  },

  {
    id: "productized-solutions",
    title: "Productized AI Solutions",
    tagline: "60-80% Margins, Infinite Scale",
    shortDescription: "Convert consulting IP into scalable AI-powered products achieving 60-80% gross margins.",
    longDescription: "Productization transforms consulting expertise into scalable products and platforms with dramatically reduced incremental cost. Shift from 1:1 labor-intensive services to 1:Many platform-enabled services. Creates sustainable competitive advantages and enterprise valuations 3-5x higher than services-only firms.",
    marketAdoption: "41% of professional services work can be automated; platforms enabling massive scaling",
    riskLevel: "medium",
    rewardLevel: "high",
    complexityLevel: "high",
    pricingFormula: "Per-assessment, per-user/month, or platform subscription based on product type",
    typicalRange: "$2K-$100K/month depending on product type and scale",
    whenToUse: [
      "High-frequency, repeatable deliverables",
      "Standardized process (60%+ repeatable)",
      "Large addressable market (100+ prospects)",
      "NH has proprietary differentiation",
      "Can achieve scale economics"
    ],
    whenNotToUse: [
      "Low frequency, mostly custom work",
      "Limited market demand (<20 prospects)",
      "Cannot standardize sufficiently",
      "Platform investment ROI uncertain"
    ],
    bestFor: [
      "Assessments and diagnostics",
      "Frameworks and templates",
      "Self-service AI tools",
      "Continuous advisory platforms"
    ],
    nhApplications: [
      {
        title: "AI Assessment & Diagnostics",
        description: "Self-service organizational readiness assessments",
        pricing: "$5K-$25K per assessment (vs. $50K-$100K manual)"
      },
      {
        title: "Rapid Strategy Simulator",
        description: "AI-powered scenario planning tool",
        pricing: "$10K per strategic initiative or $40K/month subscription"
      },
      {
        title: "Talent Optimization Platform",
        description: "AI workforce planning and development",
        pricing: "$15K-$50K/month + $75K setup fee"
      }
    ],
    relatedModels: ["platform-saas-hybrid", "subscription-continuous-insights"],
    relatedPractices: ["cross-workstream-synergies"],
    relatedIndustries: ["mid-market", "retail-cpg"],
    caseStudyIds: [],
    hasCalculator: false
  },

  {
    id: "time-materials",
    title: "Time & Materials (Legacy)",
    tagline: "Traditional Hourly Billing",
    shortDescription: "Traditional hourly billing appropriate for open-ended projects, staff augmentation, and uncertain scope.",
    longDescription: "Time and Materials remains appropriate for specific situations despite AI productivity gains. Key is to augment with AI for enhanced quality and speed while explaining AI enhances value, doesn't reduce fees. Maintain competitive rates while avoiding commoditization.",
    marketAdoption: "Still 60-70% of Big 4 billing but declining; NH should minimize reliance",
    riskLevel: "low",
    rewardLevel: "low",
    complexityLevel: "low",
    pricingFormula: "Hourly Rate × Hours Worked",
    typicalRange: "$100-$400/hour by seniority level",
    whenToUse: [
      "Scope highly uncertain and evolving",
      "Discovery phases before committing to fixed approach",
      "Staff augmentation in client-managed projects",
      "Client explicitly prefers/requires hourly transparency",
      "Short-term tactical work"
    ],
    whenNotToUse: [
      "Scope is clear (use fixed-price or outcome-based instead)",
      "Client values outcomes over effort",
      "Risk of commoditization (hourly comparison shopping)",
      "Want to capture full value of AI productivity"
    ],
    bestFor: [
      "Discovery and assessment phases",
      "Staff augmentation engagements",
      "On-demand advisory (ad-hoc requests)",
      "Clients requiring hourly budgeting control"
    ],
    nhApplications: [
      {
        title: "Discovery Phase Work",
        description: "Initial assessment before fixed-price engagement",
        pricing: "$200-$350/hour for 2-4 week assessment"
      },
      {
        title: "Staff Augmentation",
        description: "Resources integrated into client teams",
        pricing: "$150-$300/hour competitive with market, AI-enhanced quality"
      }
    ],
    relatedModels: ["hybrid-customized"],
    relatedPractices: ["productivity-gains-over-time"],
    relatedIndustries: ["mid-market", "financial-services"],
    caseStudyIds: [],
    hasCalculator: false
  },

  // Additional models would be added here following same pattern
  // For brevity, showing structure for remaining models more concisely

];

// Helper function to get model by ID
export function getModelById(id: string): PricingModel | undefined {
  return pricingModels.find(model => model.id === id);
}

// Helper to filter models by criteria
export function filterModels(criteria: {
  riskLevel?: RiskLevel;
  industry?: Industry;
  hasCalculator?: boolean;
}): PricingModel[] {
  return pricingModels.filter(model => {
    if (criteria.riskLevel && model.riskLevel !== criteria.riskLevel) return false;
    if (criteria.hasCalculator !== undefined && model.hasCalculator !== criteria.hasCalculator) return false;
    if (criteria.industry && !model.relatedIndustries.includes(criteria.industry)) return false;
    return true;
  });
}

// Get recommended models based on situation
export function getRecommendedModels(situation: {
  outcomeMeasurability: "high" | "medium" | "low";
  clientRiskTolerance: "high" | "medium" | "low";
  scopeCertainty: "clear" | "moderate" | "uncertain";
}): string[] {
  const recommendations: string[] = [];

  // Decision logic from playbook
  if (situation.outcomeMeasurability === "high" && situation.clientRiskTolerance !== "low") {
    recommendations.push("outcome-based");
  }

  if (situation.clientRiskTolerance === "low") {
    recommendations.push("success-based-risk-sharing");
  }

  if (situation.scopeCertainty === "clear") {
    recommendations.push("tiered-augmentation", "value-based-roi");
  } else if (situation.scopeCertainty === "uncertain") {
    recommendations.push("time-materials", "hybrid-customized");
  }

  return recommendations.length > 0 ? recommendations : ["hybrid-customized"];
}
