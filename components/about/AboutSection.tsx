"use client";
import { ShieldCheck, Target, Zap } from 'lucide-react';
import styles from './About.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>

        {/* Coluna da Esquerda: Textos Principais */}
        <div className={styles.textContent}>
          <span className="section-subtitle">Sobre o NIX</span>
          <h2 className={`${styles.title} section-title`}>
            Transformamos o caos das ruas em inteligência de dados.
          </h2>
          <p className={styles.description}>
            Em uma campanha eleitoral, a informação é o seu maior ativo estratégico.
            O NIX Gestão Eleitoral é a plataforma definitiva desenvolvida para resolver o maior desafio dos comitês modernos:
            a falta de sincronia entre quem planeja a estratégia e quem busca o voto nas ruas.
          </p>
        </div>

        {/* Coluna da Direita: Os 3 Pilares */}
        <div className={styles.pillarsGrid}>

          <div className={styles.pillarCard}>
            <div className={styles.iconWrapper}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className={styles.pillarTitle}>Hierarquia Segura</h3>
              <p className={styles.pillarDesc}>
                O candidato acompanha tudo; as lideranças acessam apenas o que produzem.
                Uma estrutura de permissões inteligente que protege suas informações e blinda sua base de dados contra vazamentos.
              </p>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.iconWrapper}>
              <Target size={24} />
            </div>
            <div>
              <h3 className={styles.pillarTitle}>Estratégia em Tempo Real</h3>
              <p className={styles.pillarDesc}>
                Direcione seus recursos logísticos com máxima eficiência utilizando nosso Mapa de Calor e inteligência artificial aplicada.
              </p>
            </div>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.iconWrapper}>
              <Zap size={24} />
            </div>
            <div>
              <h3 className={styles.pillarTitle}>Mobilização Imediata</h3>
              <p className={styles.pillarDesc}>
                Coordenação, assessores e equipes de rua integrados no mesmo ecossistema.
                Envie comandos e notificações instantâneas para acionar sua base na palma da mão.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}