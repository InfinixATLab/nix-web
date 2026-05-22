import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { navLinks } from "@/components/navbar/navbar.types";
import { NavigationMenu } from "@base-ui/react";

export default function Navbar() {
  return (
    <header className={`container ${styles.navbar}`}>
      <div className={styles.logoContainer}>
        <Image
          src="/Nix.svg"
          alt="Nix Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          className={styles.logoImage}
        />
      </div>

      <NavigationMenu.Root>
        <NavigationMenu.List className={styles.navLinks}>
          {navLinks.map((link) => (
            <NavigationMenu.Item key={link.label}>
              <NavigationMenu.Link href={link.href} className={styles.navLink}>
                {link.label}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <a href="#download" className={styles.btnDownload}>
        BAIXE JÁ
      </a>
    </header>
  );
}