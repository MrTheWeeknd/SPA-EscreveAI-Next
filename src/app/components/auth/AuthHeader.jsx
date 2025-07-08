import Link from "next/link";

export default function AuthHeader({ title, question, linkText, linkHref }) {
  return (
    <header className="mb-6">
      <h1 className="text-5xl text-center font-bold">{title}</h1>
      <p className="mt-2 text-sm text-center">
        {question}{" "}
        <Link href={linkHref}>
          <span className="text-blue-700 font-bold hover:underline">{linkText}</span>
        </Link>
      </p>
    </header>
  );
}
