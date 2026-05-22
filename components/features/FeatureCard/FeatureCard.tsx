import styles from '@/components/features/FeatureCard/FeatureCard.module.css';
import {Feature} from "@/components/features/features.types";

interface FeatureCardProps {
    feature: Feature;
    isActive: boolean;
    onClick: () => void;
}

export default function FeatureCard({feature, isActive, onClick}: FeatureCardProps) {
    return (
        <div
            onClick={onClick}
            className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
        >
            <div className={styles.cardIconWrapper}>
                {feature.icon}
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>
                {feature.shortDescription}
            </p>
        </div>
    );
}