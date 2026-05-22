import React, { ReactNode } from 'react';

export interface FeatureDetail {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FeatureStats {
  areasAnalyzed: string;
  strongSupport: string;
  mediumSupport: string;
  lowSupport: string;
}

export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  mockupImage?: string;
  details: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}