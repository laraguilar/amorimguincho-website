import { BannerImage } from "@/icons";
import Image from "next/image";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";

export default function Banner({telefone}: { telefone: string }) {
  return (
    <section className="relative flex items-center justify-center h-[500px]">
      {/* Imagem de fundo */}
      <Image
        src={BannerImage.src}
        alt="Guincho"
        width={1108}
        height={638}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: "cover" }}
      />
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Conteúdo sobreposto */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">
          Serviços de Guincho e<br />Auto Socorro 24hrs
        </h1>
        <p className="mb-6 text-lg">Serra e Vitória - ES</p>
        <div className="flex gap-4 justify-center">
          <a
            href={`tel:${telefone}`}
            target="_blank"
            className="bg-[#25D366] px-5 py-3 rounded flex items-center gap-2 font-semibold hover:bg-green-700 transition"
          >
            <IoCall />
            Ligue Agora
          </a>
          <a
            href={`https://wa.me/55${telefone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4076a2] px-5 py-3 rounded flex items-center gap-2 font-semibold hover:bg-green-500 transition"
          >
            <IoLogoWhatsapp />
            Envie uma mensagem
          </a>
        </div>
      </div>
    </section>
  );
}
