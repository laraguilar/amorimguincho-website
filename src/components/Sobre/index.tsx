export default function Sobre() {
    return (
      <section id="sobre" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <img src="/imagens/sobre.jpg" alt="Sobre nós" className="w-64 h-64 object-cover rounded shadow" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre nós</h2>
            <p>
              A empresa Amorim Transportes nasceu em 2004, com os irmãos Gedair e Marcos Amorim, primeiramente oferecendo serviços de táxi executivo.
              Ao longo dos anos, expandimos nossas atividades e hoje ofertamos serviços de transporte executivo, guincho e entrega e envio de pequenas encomendas.
              Nos dedicamos em oferecer qualidade e segurança, visando a satisfação e fidelização dos nossos clientes.
            </p>
          </div>
        </div>
      </section>
    );
  }
