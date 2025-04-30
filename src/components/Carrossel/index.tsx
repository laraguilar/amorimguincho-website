/* eslint-disable @next/next/no-img-element */
'use client'
import { Guinchos } from "@/icons";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const imagens = Guinchos.map((imagem) => imagem.src);

export default function Carrossel() {
  const [atual, setAtual] = useState(0);

  function anterior() {
    setAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  }
  function proximo() {
    setAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      proximo();
    }, 3000);

    return () => clearInterval(intervalo);
  }, [atual]);

  return (
    <section
    className=" bg-white pb-8"
    >
      <div className="max-w-3xl mx-auto relative">
        <img src={imagens[atual]} alt={`Slide ${atual + 1}`} className="w-full h-80 object-cover rounded shadow" />
        <button onClick={anterior} className="absolute top-1/2 left-2 bg-white rounded-full p-2 shadow -translate-y-1/2 hover:cursor-pointer"><IoIosArrowBack /></button>
        <button onClick={proximo} className="absolute top-1/2 right-2 bg-white rounded-full p-2 shadow -translate-y-1/2 hover:cursor-pointer"><IoIosArrowForward /></button>
      </div>
    </section>
  );
}
