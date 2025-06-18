"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl text-center shadow">
        <img
          src="./Start up idea.svg"
          alt="Ícone de lâmpada"
          className="mx-auto mb-6 w-68 h-68"
        />
        <h3 className="text-5xl font-semibold mb-4">Vamos começar?</h3>
        <Link href="/register">
              <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                Criar conta →
              </span>
        </Link>
      </div>
    </section>
  );
}
