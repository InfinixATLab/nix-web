import React from 'react';
import Image from 'next/image';
import styles from './StoreButton.module.css';

interface StoreButtonProps {
  store: 'apple' | 'google';
}

const storeDetails = {
  apple: {
    label: 'Baixar na',
    name: 'App Store',
    icon: '/apple-store.webp',
    alt: 'App Store',
  },
  google: {
    label: 'Baixar no',
    name: 'Google Play',
    icon: '/google-play.webp',
    alt: 'Google Play',
  },
};

export default function StoreButton({ store }: StoreButtonProps) {
  const { label, name, icon, alt } = storeDetails[store];

  return (
    <a href="#" className={styles.storeBtn} aria-label={alt}>
      <Image
        src={icon}
        alt={alt}
        className={styles.storeIcon}
        width={18}
        height={20}
      />
      <div className={styles.storeText}>
        <span className={styles.storeLabel}>{label}</span>
        <span className={styles.storeName}>{name}</span>
      </div>
    </a>
  );
}