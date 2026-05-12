"use client";

import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {globalStyle} from "styles";
import {IoArrowBack} from "react-icons/io5";
import styles from "./login.module.css";
import Input from "components/Input";

export default function Login() {
    const {login} = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        if (!email || !password) {
            setError("Preencha email e senha");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await login(email, password);
            router.push("/");
        } catch (err: any) {
            setError(err?.message || "Falha ao entrar");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <div className={styles.content}>

                <div className={styles.logoTopContainer}>
                    <img
                        src="/assets/icons/Nix.webp"
                        alt="Nix Logo"
                        className={styles.logoTop}
                    />
                </div>

                <form className={styles.loginBox} onSubmit={handleLogin}>

                    <div className={styles.headerRow}>
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className={styles.backButton}
                            aria-label="Voltar"
                        >
                            <IoArrowBack size={24} color="var(--text-color, white)" />
                        </button>
                        <div className={styles.headerTitleBox}>
                            <PageTitle title=". Login ."/>
                        </div>
                    </div>

                    {error && <span className={styles.error}>{error}</span>}

                    <Input
                        title="EMAIL"
                        type="email"
                        placeholder="Email@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                     <Input
                            title="SENHA"
                            type="password"
                            placeholder="Sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={loading}
                    >
                        <span className={styles.buttonText}>
                            {loading ? "AGUARDE..." : "ENTRAR"}
                        </span>
                    </button>
                </form>

                <img
                    src="/assets/icons/Nix-logo-inferior.webp"
                    alt="Logo inferior"
                    className={styles.logoBottom}
                />
            </div>
        </div>
    );
}