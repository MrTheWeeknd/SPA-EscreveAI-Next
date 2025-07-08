// src/app/register/page.jsx
"use client";
import { useState } from "react";
import AuthContainer from "../components/auth/AuthContainer";
import AuthIllustration from "../components/auth/AuthIllustration";
import AuthHeader from "../components/auth/AuthHeader";
import InputField from "../components/auth/InputField";
import PasswordField from "../components/auth/PasswordField";
import SocialLoginButton from "../components/auth/SocialLoginButton";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <AuthContainer
      illustration={
        <AuthIllustration
          src="/Coder.svg"
          logo="/LogoBranca.svg"
          alt="Ilustração Cadastro"
          caption="Desbloqueie o potencial da sua escrita."
        />
      }
    >
      <AuthHeader
        title="Crie sua conta"
        question="Já tem sua conta?"
        linkText="Faça seu login aqui."
        linkHref="/login"
      />
      <form className="space-y-4">
        <InputField
          label="Nome"
          type="text"
          placeholder="Insira seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputField
          label="Email"
          type="email"
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
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
          className="w-full lg:w-auto px-8 py-3 bg-indigo-600 text-white rounded-3xl hover:bg-indigo-700 transition mx-auto block"
        >
          Criar conta
        </button>
      </form>
      <div className="relative my-6 text-center">
        <span className="bg-white px-3 text-sm text-gray-500">Ou cadastre com</span>
      </div>
      <SocialLoginButton onClick={() => {}} iconSrc="/google.png">
        Google
      </SocialLoginButton>
    </AuthContainer>
  );
}
