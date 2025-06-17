export default function Hero() {
  return (
    <section className="pt-24 bg-white" id="Hero">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-6xl text-black font-bold mb-4">
            Escreva melhor.<br />
            Corrija mais fácil.<br />
            Evolua sempre.
          </h2>
          <p className="text-3x1 text-black mb-6">
            Treine com temas motivadores, receba correções automáticas e acompanhe seu progresso.
          </p>
          <a
            href="#"
            className="text-x1 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Começar a escrever →
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./Write a review.svg"
            alt="Ilustração de pessoa escrevendo"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
