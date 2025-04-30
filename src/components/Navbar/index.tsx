/* eslint-disable @next/next/no-img-element */
import { Logo } from '@/icons';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white text-[#4076a2] px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        <img
        src={Logo.src}
        alt="Logo Amorim Guincho"
        className="h-[80px]"
        />
      </Link>
      <div className="flex gap-6 uppercase font-semibold text-md">
        <a href="#servicos" className="hover:underline">Nossos Serviços</a>
        <a href="#sobre" className="hover:underline">Sobre Nós</a>
        <a href="#contato" className="hover:underline">Contato</a>
      </div>
    </nav>
  );
}
