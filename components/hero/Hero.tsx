import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>

      <div className={styles.glowEffect}></div>

      <main className={styles.mainContent}>

        <div className={styles.leftColumn}>
          <h1 className={styles.title}>
            NIX GESTÃO<br />
            <span className={styles.highlightWrapper}>
              <span className={styles.highlightText}>ELEITORAL</span>
              <span className={styles.yellowHighlight}></span>
            </span>
          </h1>

          <p className={styles.description}>
            A gestão da sua campanha política, agora na palma da mão. Simples, eficiente e estratégica.
          </p>

          <div className={styles.storeButtons}>
            <a href="#" className={styles.storeBtn} aria-label="App Store">
              <Image src="/apple-store.webp" alt="App Store" className={styles.storeIcon} />
              <div className={styles.storeText}>
                <span className={styles.storeLabel}>Baixar na</span>
                <span className={styles.storeName}>App Store</span>
              </div>
            </a>

            <a href="#" className={styles.storeBtn} aria-label="Google Play">
              <Image src="/google-play.webp" alt="Google Play" className={styles.storeIcon} />
              <div className={styles.storeText}>
                <span className={styles.storeLabel}>Baixar no</span>
                <span className={styles.storeName}>Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.mockupContainer}>
            <Image
              src="/mockup-app.png"
              alt="Interface do aplicativo Nix Gestão Eleitoral no celular"
              className={styles.mockupImage}
            />
          </div>
        </div>

      </main>
    </div>
  );
}