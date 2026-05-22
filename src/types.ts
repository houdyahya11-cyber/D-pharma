/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface AICapability {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CompetitiveAdvantage {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  iconName: string;
}

export interface MarketStat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface CustomerSegment {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  iconName: string;
  hoverColor: string;
}

export interface RevenueStream {
  id: string;
  title: string;
  description: string;
  details?: string[];
  iconName: string;
  borderColor: string;
}

export interface QuarterProjection {
  quarter: string;
  label: string;
  value: number; // in FDJ
  transactionsPerMonth: number;
  strategy: string;
  mix?: string;
}

export interface AcquisitionPhase {
  phase: string;
  timeline: string;
  title: string;
  userGoal: string;
  color: string;
  tactics: {
    label: string;
    iconName: string;
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  quote?: string;
  avatarUrl: string;
  linkedinUrl: string;
  ringColor: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

export interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number; // in FDJ
  description: string;
  dosage: string;
  availability: boolean;
  pharmacy: string;
}

export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  distance: string;
  isOpen: boolean;
  isCustomGuard: boolean; // de garde
  coords: { x: number; y: number }; // Relative coordinates for interactive map
  imageUrl?: string;
}
