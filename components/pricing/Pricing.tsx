"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Pricing.module.css';
import { PLANS, PLAN_FEATURES_MAP } from './plansData';

export default function Pricing() {
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles.section} id="planos">
      <div className={styles.header}>
        <span className="section-subtitle">Investimento Inteligente</span>
        <h2 className={styles.title}>
          Escolha o plano ideal para a sua campanha
        </h2>
      </div>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${styles.navButtonLeft}`}
          onClick={scrollPrev}
          aria-label="Ver plano anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.emblaViewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {PLANS.map((plan, index) => (
              <div className={styles.emblaSlide} key={index}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <div className={styles.priceContainer}>
                      {plan.oldPrice && (
                        <div className={styles.oldPrice}>R$ {plan.oldPrice}</div>
                      )}
                      <div className={styles.price}>
                        <span className={styles.currency}>R$</span>
                        <span className={styles.priceBig}>{plan.price}</span>
                        <span className={styles.priceMonth}>{plan.name === 'Pré-Pago' ? '' : '/mês'}</span>
                      </div>
                    </div>
                    <div className={styles.specialFeatures}>
                      <div className={styles.specialFeatureText}>
                        👥 Perfis: <span className={styles.highlight}>{plan.profiles}</span>
                      </div>
                      <div className={styles.specialFeatureText}>
                        🎧 Fale Conosco: <span className={styles.highlight}>{plan.support}</span>
                      </div>
                    </div>
                    <div className={styles.featuresList}>
                      {PLAN_FEATURES_MAP.map((feat) => {
                        const hasFeature = plan.features[feat.key as keyof typeof plan.features];
                        return (
                          <div key={feat.key} className={styles.featureRow}>
                            <div className={`${styles.checkCircle} ${!hasFeature ? styles.uncheckCircle : ''}`}>
                              {hasFeature ? (
                                <Check size={12} color="#00C853" strokeWidth={4} />
                              ) : (
                                <X size={12} color="#606A75" strokeWidth={4} />
                              )}
                            </div>
                            <span className={`${styles.featureText} ${!hasFeature ? styles.featureTextDisabled : ''}`}>
                              {feat.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.navButtonRight}`}
          onClick={scrollNext}
          aria-label="Ver próximo plano"
        >
          <ChevronRight size={24} />
        </button>

        <div className={styles.dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`${styles.dot} ${index === selectedIndex ? styles.dotSelected : ''}`}
              aria-label={`Ir para o plano ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
