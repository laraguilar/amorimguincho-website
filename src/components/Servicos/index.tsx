const cards = [
    {
      imagem: '/imagens/carro.jpg',
      texto: 'Veículos Leves e utilitários'
    },
    {
      imagem: '/imagens/empilhadeira.jpg',
      texto: 'Maquinário'
    },
    {
      imagem: '/imagens/barco.jpg',
      texto: 'Pequenas embarcações'
    },
    {
      imagem: '/imagens/bateria.jpg',
      texto: 'Recarga de bateria, pane seca, entre outros.'
    }
  ];

  export default function Servicos() {
    return (
      <section id="servicos" className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Nossos Serviços</h2>
          <div className="mb-8 text-center">
            <p className="font-semibold">Atendimento 24 horas:</p>
            <ul className="list-disc list-inside">
              <li>Orçamento gratuito</li>
              <li>Aceitamos Pix, PicPay</li>
              <li>Cartões de Débito e Crédito</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white rounded shadow p-4 flex flex-col items-center">
                <img src={card.imagem} alt={card.texto} className="w-20 h-20 object-contain mb-4" />
                <p className="text-center">{card.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
