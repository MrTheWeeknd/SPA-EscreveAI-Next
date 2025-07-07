"use client";
import { useState } from "react";
import { Transition } from '@headlessui/react'

const faqs = [
  {
    q: 'O serviço é gratuito?',
    a: 'Sim! Você pode usar todas as funcionalidades do SmartRedações sem pagar nada. Basta se cadastrar e começar a escrever.',
  },
  {
    q: 'Posso ver minhas redações antigas?',
    a: 'Sim. Todas as suas redações ficam salvas no seu histórico, permitindo que você acompanhe sua evolução ao longo do tempo.',
  },
  {
    q: 'Como funciona a correção automática?',
    a: 'Após enviar sua redação, o sistema analisa automaticamente seu texto com base nas competências exigidas e gera comentários personalizados com sugestões de melhoria.',
  },
  {
    q: 'Preciso instalar algum programa?',
    a: 'Não. O SmartRedações funciona totalmente online. Você só precisa de um navegador com acesso à internet para começar a escrever.',
  },
  {
    q: 'É indicado para quem está se preparando para o ENEM?',
    a: 'Sim! O sistema é ideal para quem está se preparando para o ENEM e outros vestibulares, pois corrige com base nas cinco competências exigidas pela prova.',
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="perguntasfrequentes" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-6xl font-semibold text-center mb-4">Perguntas frequentes</h3>
        <p className="text-2x1 text-center mb-8 text-gray-600">Dúvidas? Estamos aqui para ajudar!</p>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={item.q} className="border-b">
              <button
                onClick={() => setOpenIndex(i)}
                className="w-full flex justify-between py-4"
              >
                <span className='text-2x1 font-bold'>{item.q}</span>
                <span>{openIndex === i ? '–' : '+'}</span>
              </button>
              <Transition
                show={openIndex === i}
                enter="transition-all duration-500 ease-out"
                enterFrom="opacity-0 transform scale-y-95 -translate-y-2"
                enterTo="opacity-100 transform scale-y-100 translate-y-0"
                leave="transition-all duration-200 ease-in"
                leaveFrom="opacity-100 transform scale-y-100 translate-y-0"
                leaveTo="opacity-0 transform scale-y-95 -translate-y-2"
              >
                <div className="overflow-hidden max-h-[500px]">
                  <p className="pb-4 text-gray-700 text-x1">{item.a}</p>
                </div>
              </Transition>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-x1 text-black">
          Não achou o que queria? 
          Entre em contato conosco em <a>duvidas@smartredacoes.com</a>.
        </p>
      </div>
    </section>
  );
}
