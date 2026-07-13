'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import Image from 'next/image';
import { X, Loader2, Check } from 'lucide-react';
import styles from './RegisterTesterModal.module.css';

interface RegisterTesterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterTesterModal({ isOpen, onClose }: RegisterTesterModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, zoomedImage]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Por favor, insira um e-mail válido.');
      setIsLoading(false);
      return;
    }

    try {
      const apiHost = process.env.NEXT_PUBLIC_API_HOST || 'https://nix-ge-api.onrender.com';
      const response = await fetch(`${apiHost}/register-tester/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        throw new Error('Falha ao registrar e-mail. Tente novamente mais tarde.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro ao enviar seu e-mail.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setError(null);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.glowEffect}></div>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Fechar modal"
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <>
            <h2 className={styles.title}>Inscreva-se para baixar agora!</h2>
            <p className={styles.subtitle}>
              Insira o e-mail associado à sua conta da Google Play Store para receber acesso à versão de testes.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="googlePlayEmail" className={styles.label}>
                  E-mail da Google Play
                </label>
                <input
                  type="email"
                  id="googlePlayEmail"
                  className={styles.input}
                  placeholder="exemplo@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  disabled={isLoading}
                  required
                />
                {error && <span className={styles.errorText}>{error}</span>}
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading || !email}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Processando...
                  </>
                ) : (
                  'Receber Acesso'
                )}
              </button>
            </form>

            <div className={styles.screenshotContainer}>
              <div className={styles.screenshotWrapper} onClick={() => setZoomedImage('/tutorials/gplay-1.png')}>
                <Image
                  src="/tutorials/gplay-1.png"
                  alt="Tutorial Passo 1 - Abrir o menu na Google Play"
                  className={styles.screenshot}
                  fill
                />
              </div>
              <div className={styles.screenshotWrapper} onClick={() => setZoomedImage('/tutorials/gplay-2.png')}>
                <Image
                  src="/tutorials/gplay-2.png"
                  alt="Tutorial Passo 2 - Visualizar o e-mail no menu"
                  className={styles.screenshot}
                  fill
                />
              </div>
            </div>

            <div className={styles.instructionsSection}>
              <h3 className={styles.instructionsTitle}>Como encontrar seu e-mail do Google Play:</h3>
              <ul className={styles.instructionsList}>
                <li className={styles.instructionItem}>
                  Abra o aplicativo Google Play Store.
                </li>
                <li className={styles.instructionItem}>
                  Toque na sua foto de perfil (ou inicial do seu nome) no canto superior direito da tela.
                </li>
                <li className={styles.instructionItem}>
                  Veja o endereço de e-mail exibido no topo do menu, logo abaixo do seu nome.
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className={styles.successContent}>
            <div className={styles.successIconWrapper}>
              <Check size={36} />
            </div>
            <h2 className={styles.successTitle}>Inscrição Concluída!</h2>
            <p className={styles.successMessage}>
              Parabéns! Sua inscrição foi realizada com sucesso.
            </p>
            <p className={styles.successMessage}>
              Você receberá o link para acessar o aplicativo através do e-mail <span className={styles.successHighlighted}>{email}</span>.
            </p>
            <button className={styles.okButton} onClick={handleClose}>
              Entendi
            </button>
          </div>
        )}
      </div>

      {zoomedImage && (
        <div className={styles.zoomOverlay} onClick={() => setZoomedImage(null)}>
          <div className={styles.zoomedImageWrapper} onClick={(e) => e.stopPropagation()}>
            <Image
              src={zoomedImage}
              alt="Screenshot ampliada"
              className={styles.zoomedImage}
              fill
            />
            <button
              className={styles.closeZoomButton}
              onClick={() => setZoomedImage(null)}
              aria-label="Fechar zoom"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
