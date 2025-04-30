/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
import { IoCall } from "react-icons/io5";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge"; // Opcional, para evitar classes duplicadas

export default function BotaoTelefoneFixo({ telefone = '27999992422', intervalo = 4000 }) {
    const btnRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
      const vibrar = () => {
        if (btnRef.current) {
          btnRef.current.classList.add('animate-vibrate');
          setTimeout(() => {
            btnRef.current && btnRef.current.classList.remove('animate-vibrate');
          }, 1000);
        }
      };
      vibrar();
      const id = setInterval(vibrar, intervalo);
      return () => clearInterval(id);
    }, []);

  return (
    <>
      {/* Estilo da animação */}
      <style jsx>{`
        @keyframes vibrate {
          0% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
          100% { transform: translateX(0); }
        }
        .animate-vibrate {
          animation: vibrate 0.6s linear;
        }
      `}</style>
      <a
        ref={btnRef}
        href={`tel:${telefone}`}
        className={twMerge(
          "fixed right-6 top-1/3 translate-y-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg text-white font-bold text-lg cursor-pointer",
          "bg-green-500 hover:bg-green-700 transition border-2 drop-shadow-black"
        )}
        style={{ minWidth: 56 }}
        aria-label="Ligar agora"
      >
        <IoCall size={28} />
      </a>
    </>
  );
}
