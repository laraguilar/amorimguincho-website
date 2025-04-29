import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Amorim Guincho</Link>
      <div className="flex gap-6">
        <a href="#servicos" className="hover:underline">Nossos Serviços</a>
        <a href="#sobre" className="hover:underline">Sobre Nós</a>
        <a href="#contato" className="hover:underline">Contato</a>
      </div>
    </nav>
  );
}
