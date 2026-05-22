"use client";
import { useState } from 'react';
import { Feature } from '../features.types';
import FeatureCard from '../FeatureCard/FeatureCard';
import {featuresData} from "../featuresData";
import styles from './FeaturesGrid.module.css';

export default function FeaturesGrid() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <section className={styles.section} id="recursos">
      <div className="container">

        <div className={styles.header}>
          <span className="section-subtitle">Recursos Poderosos</span>
          <h2 className={`${styles.title} section-title`}>
            Tudo que sua campanha <br />
            precisa <span className={styles.titleHighlight}>em um só lugar</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isActive={selectedFeature?.id === feature.id}
            />
          ))}
        </div>

      </div>
    </section>
  );
}