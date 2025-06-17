const items = [
  {
    title: 'Escreva redações com temas motivadores',
    text:
      'Escreva sobre assuntos relevantes e desafiadores com o apoio de sugestões de temas que estimulem o pensamento crítico e a criatividade.',
    icon: './lapis.svg',
  },
  {
    title: 'Revise seu texto de forma automática',
    text:
      'Receba uma nota geral e individual por competência, com comentários personalizados que te ajudam a entender exatamente o que melhorar.',
    icon: './lupa.svg',
  },
  {
    title: 'Acompanhe sua evolução na escrita',
    text:
      'Acesse seu histórico ao longo do tempo com todas as suas redações, notas gerais e individuais, correções aplicadas e progressos nas competências.',
    icon: './grafico.svg',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-6xl font-semibold text-black">
          Evolua a sua escrita dissertativa de forma gratuita.
        </h3>
        <p className="mt-2 text-black text-2xl">
          Confira as ferramentas criadas para te ajudar a escrever e aperfeiçoar suas redações.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {items.map((f) => (
          <div
            key={f.title}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <img src={f.icon} alt="" className="w-12 h-12 mb-4" />
            <h4 className="font-semibold text-3x1 text-black mb-2">{f.title}</h4>
            <p className="text-x1 text-gray-600">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
