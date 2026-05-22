"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Feature } from '../features.types';
import FeatureCard from '../FeatureCard/FeatureCard';
import { featuresData } from "../featuresData";
import styles from './FeaturesGrid.module.css';

export default function FeaturesGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

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

        {/* Grid for Desktop */}
        <div className={styles.grid}>
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isActive={false}
            />
          ))}
        </div>

        {/* Carousel for Mobile */}
        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {featuresData.map((feature) => (
              <div className={styles.emblaSlide} key={feature.id}>
                <FeatureCard
                  feature={feature}
                  isActive={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`${styles.dot} ${index === selectedIndex ? styles.dotSelected : ''}`}
              aria-label={`Ir para o recurso ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
