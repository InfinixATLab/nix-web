"use client";
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>

        {/* Coluna da Esquerda: Marca e Copyright */}
        <div className={styles.brandColumn}>
          <div className={styles.logo}>
            <span className={styles.logoNix}>NIX</span>
            <div className={styles.logoDesc}>
              GESTÃO<br />ELEITORAL
            </div>
          </div>
          <div className={styles.copyright}>
            <p>© {currentYear} NIX Gestão Eleitoral.</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>

        {/* Coluna da Direita: Contato */}
        <div className={styles.contactColumn}>
          <h4 className={styles.columnTitle}>Contato</h4>
          <a href="mailto:administrativo@infinixassessoria.com" className={styles.emailLink}>
            administrativo@infinixassessoria.com
          </a>
        </div>

      </div>
    </footer>
  );
}