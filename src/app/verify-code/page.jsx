"use client";
import { useState, useRef, useEffect } from "react";
import AuthContainer from "../components/auth/AuthContainer";
import AuthIllustration from "../components/auth/AuthIllustration";
import AuthHeader from "../components/auth/AuthHeader";
import Link from "next/link";

export default function VerifyCodePage() {
  const length = 6;
  const [code, setCode] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/\D/, "");
    const newCode = [...code];
    newCode[idx] = val;
    setCode(newCode);
    if (val && idx < length - 1) inputsRef.current[idx + 1].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthContainer
      illustration={
        <AuthIllustration
          logo="/logoBranca.svg"
          src="/Coder.svg"
          alt="Código de acesso"
          caption="Desbloqueie o potencial da sua escrita."
        />
      }
    >
      <AuthHeader
        title="Insira abaixo o código de acesso que enviamos para o seu email."
        question="Não esqueça de verificar a caixa de spam!"
        linkText=""
        linkHref=""
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Código de acesso</label>
          <div className="flex space-x-2">
            {code.map((num, i) => (
              <input
                key={i}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={num}
                onChange={(e) => handleChange(e, i)}
                ref={(el) => (inputsRef.current[i] = el)}
                className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:border-indigo-600 outline-none"
              />
            ))}
          </div>
        </div>

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
          Enviar
        </button>

        <button
          type="button"
          onClick={() => {}}
          className="px-8 py-3 
            bg-indigo-600 
            text-white 
            rounded-3xl 
            hover:bg-indigo-700 
            transition 
            mx-auto block"
        >
          Enviar código novamente
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
