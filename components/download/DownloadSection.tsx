import React from 'react';
import StoreButton from '../ui/StoreButton/StoreButton';
import styles from './Download.module.css';

interface DownloadSectionProps {
  onGooglePlayClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function DownloadSection({ onGooglePlayClick }: DownloadSectionProps) {
  return (
    <section className={styles.section} id="download">
      <div className={`container ${styles.container}`}>
        <div className={styles.glowEffect}></div>
        <h2 className={styles.title}>Comece a transformar sua campanha hoje</h2>
        <p className={styles.description}>
          Disponível para download na App Store e para Android.
        </p>
        <div className={styles.storeButtonsWrapper}>
          <StoreButton store="apple" />
          <StoreButton store="google" onClick={onGooglePlayClick} />
        </div>
      </div>
    </section>
  );
}