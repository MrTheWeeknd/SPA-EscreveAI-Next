"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50" id="top">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src="./Logo (1).svg" alt="Logo EscreveAI" className="w-46 h-10 mr-2" />
        
        <ul
          className={`md:flex md:items-center md:static absolute bg-white w-full md:w-auto left-0 md:opacity-100 transition-all duration-300 ease-in-out ${
            open ? 'top-16 opacity-100' : 'top-[-500px] opacity-0'
          }`}
        >
          {['Features', 'Perguntas frequentes'].map((text) => (
            <li key={text} className="mx-4 my-2 md:my-0 text-sm font-medium">
              <Link
                href={`#${text.toLowerCase().replace(' ', '')}`}
                className="hover:text-blue-600"
              >
                {text}
              </Link>
            </li>
          ))}
          <li className="mx-4 my-2 md:my-0 text-sm font-medium">
            <a
              href="https://escreveai-frontend.onrender.com"
              className="hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrar
            </a>
          </li>

          <li className="mx-4 my-2 md:my-0">
            <a
              href="https://escreveai-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Cadastre-se
            </a>
          </li>

        </ul>

        {/*mobile*/}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-800">
          {open ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
