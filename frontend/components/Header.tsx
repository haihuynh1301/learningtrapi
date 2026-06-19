import Link from "next/link";

export default function Header({ header }: any) {
  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-6">

        <Link
          href={header.logoLink.href}
          className="text-3xl font-serif text-white"
        >
          {header.logoLink.text}
        </Link>

        <nav className="flex gap-8">
          {header.link.map((item: any) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-white"
            >
              {item.text}
            </Link>
          ))}
        </nav>

        <Link
          href={header.cta.href}
          className="bg-yellow-500 px-5 py-3 rounded"
        >
          {header.cta.text}
        </Link>

      </div>
    </header>
  );
}