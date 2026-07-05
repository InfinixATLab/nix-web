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
    url: 'https://apps.apple.com/br/app/gest%C3%A3o-eleitoral-nix/id6761128711',
    disabled: false,
    download: false,
  },
  google: {
    label: 'Baixar o',
    name: 'APK Android',
    icon: '/google-play.webp',
    alt: 'Download Android APK',
    url: '/nix-3.1.0.apk',
    disabled: false,
    download: true,
  },
};

export default function StoreButton({ store }: StoreButtonProps) {
  const { label, name, icon, alt, url, disabled, download } = storeDetails[store];

  const buttonClass = `${styles.storeBtn} ${disabled ? styles.storeBtnDisabled : ''}`;

  const InnerContent = (
    <>
      <Image
        src={icon}
        alt={alt}
        className={styles.storeIcon}
        width={24}
        height={26}
      />
      <div className={styles.storeText}>
        <span className={styles.storeLabel}>{label}</span>
        <span className={styles.storeName}>{name}</span>
      </div>
    </>
  );

  if (disabled) {
    return (
      <div className={buttonClass} aria-label={`${alt} (Em breve)`}>
        {InnerContent}
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
      aria-label={alt}
      download={download ? 'nix-3.1.0.apk' : undefined}
    >
      {InnerContent}
    </a>
  );
}