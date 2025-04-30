import { Barco, Bateria, Carro, Empilhadeira } from '@/icons'
import Image from 'next/image'

const cards = [
  {
    imagem: Carro.src,
    texto: 'Veículos Leves e utilitários'
  },
  {
    imagem: Empilhadeira.src,
    texto: 'Maquinário'
  },
  {
    imagem: Barco.src,
    texto: 'Pequenas embarcações'
  },
  {
    imagem: Bateria.src,
    texto: 'Recarga de bateria, pane seca, entre outros.'
  }
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Nossos Serviços</h2>
        <div className="mb-8 text-center">
          <p className="font-bold text-[#11B25D]">Atendimento 24 horas</p>
          <ul className="list-disc list-inside">
            <li>Orçamento gratuito</li>
            <li>Aceitamos Pix, PicPay</li>
            <li>Cartões de Débito e Crédito</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded shadow p-4 flex flex-col gap-2 justify-between items-center">
              <div className="flex items-center justify-center w-full h-28 mb-2">
                <Image
                  src={card.imagem}
                  alt={card.texto}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="text-center">{card.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
