// src/app/login/page.jsx
"use client";
import { useState } from "react";
import AuthContainer from "../components/auth/AuthContainer";
import AuthIllustration from "../components/auth/AuthIllustration";
import AuthHeader from "../components/auth/AuthHeader";
import InputField from "../components/auth/InputField";
import PasswordField from "../components/auth/PasswordField";
import SocialLoginButton from "../components/auth/SocialLoginButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContainer
      illustration={
        <AuthIllustration
          src="/Coder.svg"
          logo="/LogoBranca.svg"
          alt="Ilustração Login"
          caption="Desbloqueie o potencial da sua escrita."
        />
      }
    >
      <AuthHeader
        title="Entre na sua conta"
        question="Ainda não tem seu login?"
        linkText="Cadastre‑se aqui."
        linkHref="/register"
      />
      <form className="space-y-4">
        <InputField
          label="Email"
          type="email"
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PasswordField
          label="Senha"
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full lg:w-auto px-8 py-3 bg-indigo-600 text-white rounded-3xl hover:bg-indigo-700 transition mx-auto block"
        >
          Entrar
        </button>
        <div className="relative my-6 text-center">
          <span className="bg-white px-3 text-sm text-gray-500">Ou entre com</span>
        </div>
        <SocialLoginButton onClick={() => {}} iconSrc="/google.png">
          Google
        </SocialLoginButton>
      </form>
    </AuthContainer>
  );
}