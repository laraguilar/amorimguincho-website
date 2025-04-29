
export default function Banner() {
  return (
    <section
      className="relative h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/imagens/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Serviços de Guincho e<br />Auto Socorro 24hrs</h1>
        <p className="mb-6 text-lg">Serra e Vitória - ES</p>
        <div className="flex gap-4 justify-center">
          <a href="tel:27999992422" className="bg-green-600 px-5 py-3 rounded flex items-center gap-2 font-semibold hover:bg-green-700 transition">
            <img src="/imagens/phone.svg" alt="Telefone" className="w-5 h-5" />
            Ligue Agora
          </a>
          <a href="https://wa.me/5527999992422" target="_blank" rel="noopener noreferrer"
            className="bg-[#25D366] px-5 py-3 rounded flex items-center gap-2 font-semibold hover:bg-green-500 transition">
            <img src="/imagens/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
            Envie uma mensagem
          </a>
        </div>
      </div>
    </section>
  );
}
