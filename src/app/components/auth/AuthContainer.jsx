export default function AuthContainer({ illustration, children }) {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className=" w-full max-w-6xl h-auto bg-white rounded-2xl shadow-lg overflow-hidden flex">
        <div className="hidden lg:flex flex-1 bg-indigo-600 text-white items-center justify-center p-8">
          {illustration}
        </div>
        <div className="flex-1 flex flex-col justify-center p-8 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
