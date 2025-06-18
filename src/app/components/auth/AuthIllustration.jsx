import Image from "next/image";

export default function AuthIllustration({ src, logo, alt, caption }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center px-4">
      <Image src={logo} width={222} height={50} alt={`${alt} Logo`} priority />
      <Image src={src} width={365} height={389} alt={alt} className="w-full max-w-[365px] max-h-[40vh] object-contain" />
      <h2 className="text-center lg:text-4xl font-bold text-white">{caption}</h2>
    </div>
  );
}
