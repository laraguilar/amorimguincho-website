'use client'
import { useState } from "react";

const imagens = [
  '/imagens/carrossel1.jpg',
  '/imagens/carrossel2.jpg',
  '/imagens/carrossel3.jpg'
];

export default function Carrossel() {
  const [atual, setAtual] = useState(0);

  function anterior() {
    setAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  }
  function proximo() {
    setAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto relative">
        <img src={imagens[atual]} alt={`Slide ${atual + 1}`} className="w-full h-64 object-cover rounded shadow" />
        <button onClick={anterior} className="absolute top-1/2 left-2 bg-white rounded-full p-2 shadow -translate-y-1/2">&lt;</button>
        <button onClick={proximo} className="absolute top-1/2 right-2 bg-white rounded-full p-2 shadow -translate-y-1/2">&gt;</button>
      </div>
    </section>
  );
}
