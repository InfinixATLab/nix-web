"use client";
import { useRef } from 'react';
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Pricing.module.css';
import { PLANS, PLAN_FEATURES_MAP } from './plansData';

export default function Pricing() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            // A largura do container inteiro dita o tamanho do "salto"
            const scrollAmount = carouselRef.current.clientWidth;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={styles.section} id="planos">
            <div className={styles.header}>
                <span className="section-subtitle">Investimento Inteligente</span>
                <h2 className={styles.title}>
                    Escolha o plano ideal para a sua campanha
                </h2>
            </div>

            <div className={styles.carouselWrapper}>
                {/* Botão Esquerdo */}
                <button
                    className={`${styles.navButton} ${styles.navButtonLeft}`}
                    onClick={() => scroll('left')}
                    aria-label="Ver planos anteriores"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Carrossel */}
                <div className={styles.carousel} ref={carouselRef}>
                    {PLANS.map((plan, index) => (
                        <div key={index} className={styles.card}>
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
                    ))}
                </div>

                {/* Botão Direito */}
                <button
                    className={`${styles.navButton} ${styles.navButtonRight}`}
                    onClick={() => scroll('right')}
                    aria-label="Ver próximos planos"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
}