import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import StoreButton from '../ui/StoreButton/StoreButton';

export default function HeroSection() {
    return (
        <div className={styles.heroWrapper}>

            <div className={styles.glowEffect}></div>

            <main className={`container ${styles.mainContent}`}>

                <div className={styles.leftColumn}>
                    <h1 className={styles.title}>
                        NIX GESTÃO<br/>
                        <span className={styles.highlightWrapper}>
              <span className={styles.highlightText}>ELEITORAL</span>
              <span className={styles.yellowHighlight}></span>
            </span>
                    </h1>

                    <p className={styles.description}>
                        A gestão da sua campanha política, agora na palma da mão. Simples, eficiente e estratégica.
                    </p>

                    <div className={styles.storeButtons}>
                        <StoreButton store="apple" />
                        <StoreButton store="google" />
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.mockupContainer}>
                        <Image
                            src="/mockups/initial-page.webp"
                            alt="Interface do aplicativo Nix Gestão Eleitoral no celular"
                            className={styles.mockupImage}
                            width={1080}
                            height={1920}
                        />
                    </div>
                </div>

            </main>
        </div>
    );
}