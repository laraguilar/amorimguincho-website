import { Logo } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white text-[#4076a2] px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        <Image
        src={Logo.src}
        alt="Logo Amorim Guincho"
        width={139}
        height={80}
        // className="mr-2"
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
