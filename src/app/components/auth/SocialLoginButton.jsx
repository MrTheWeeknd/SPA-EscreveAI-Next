import Image from "next/image";

export default function SocialLoginButton({ onClick, iconSrc, children }) {
  return (
    <button
        type="button"
        onClick={onClick}
        className="
            flex items-center justify-center
            px-8 py-3
            border border-gray-300
            rounded-3xl
            hover:bg-gray-50
            transition
            mx-auto
            text-sm text-gray-700
            shadow-sm
        "
        >
        <Image src={iconSrc} width={20} height={20} alt="Ícone" className="mr-2" />
        {children}
    </button>

  );
}
