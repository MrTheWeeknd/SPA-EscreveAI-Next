export default function AuthContainer({ illustration, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Container responsivo: mobile-first, mas mantendo desktop */}
      <div className="w-full max-w-md lg:max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Ilustração: topo no mobile, lateral no desktop */}
        <div className="w-full lg:w-1/4 bg-indigo-600 text-white flex items-center justify-center p-6 lg:p-8">
          {illustration}
        </div>
        {/* Conteúdo do formulário */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}