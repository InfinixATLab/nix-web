import React from 'react';
import styles from './Navbar.module.css';
import { navLinks } from "@/components/navbar/navbar.types";
import { NavigationMenu } from "@base-ui/react";

export default function Navbar() {
  return (
    <header className={`container ${styles.navbar}`}>
      <div className={styles.logoContainer}>
        <span className={styles.logoText}>NIX</span>
        <div className={styles.logoSub}>
          Gestão<br />Eleitoral
        </div>
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