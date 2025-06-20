"use client";
import { useState } from "react";
import AuthContainer from "../components/auth/AuthContainer";
import AuthIllustration from "../components/auth/AuthIllustration";
import AuthHeader from "../components/auth/AuthHeader";
import InputField from "../components/auth/InputField";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthContainer
      illustration={
        <AuthIllustration
          logo="/LogoBranca.svg"
          src="/Coder.svg"
          alt="Esqueci a senha"
          caption="Desbloqueie o potencial da sua escrita."
        />
      }
    >
      <AuthHeader
        title="Sem problemas! Informe o email registrado na sua conta."
        question=""
        linkText=""
        linkHref=""
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="Email"
          type="email"
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Enviar código
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
