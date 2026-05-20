import React from 'react';
import styles from './Navbar.module.css';
import {navLinks} from "@/components/navbar/navbar.types";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <span className={styles.logoText}>NIX</span>
        <div className={styles.logoSub}>
          Gestão<br />Eleitoral
        </div>
      </div>

      <nav className={styles.navLinks}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>

      <button className={styles.btnDownload}>
        BAIXE JÁ
      </button>
    </header>
  );
}