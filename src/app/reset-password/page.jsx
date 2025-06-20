"use client";
import { useState } from "react";
import AuthContainer from "../components/auth/AuthContainer";
import AuthIllustration from "../components/auth/AuthIllustration";
import AuthHeader from "../components/auth/AuthHeader";
import PasswordField from "../components/auth/PasswordField";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("As senhas não conferem");
      return;
    }
  };

  return (
    <AuthContainer
      illustration={
        <AuthIllustration
          logo="/logoBranca.svg"
          src="/Coder.svg"
          alt="Redefinir senha"
          caption="Desbloqueie o potencial da sua escrita."
        />
      }
    >
      <AuthHeader
        title="Agora informe sua nova senha."
        question=""
        linkText=""
        linkHref=""
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <PasswordField
          label="Nova senha"
          placeholder="Insira sua nova senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <PasswordField
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button
          type="submit"
          className="px-8 py-3 
            bg-indigo-600 
            text-white 
            rounded-3xl 
            hover:bg-indigo-700 
            transition 
            mx-auto block"
        >
          Redefinir senha
        </button>

        <Link href="/login">
          <span className="block text-center text-sm text-gray-600 hover:underline">
            Voltar ao início
          </span>
        </Link>
      </form>
    </AuthContainer>
  );
}
