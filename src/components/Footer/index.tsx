import { IoCall, IoMail } from "react-icons/io5";

export default function Footer({telefone, email}: { telefone: string, email: string }) {
  const formatTelefone = (telefone: string) => {
    const ddd = telefone.slice(0, 2);
    const numero = telefone.slice(2);
    return `(${ddd}) ${numero.slice(0, 5)}-${numero.slice(5)}`;
  };
    return (
      <footer id="contato" className="bg-[#006D33] text-white py-8 mt-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
          <div className="w-full">
          <div className="text-lg font-semibold">Contato</div>
          <div className="flex items-center gap-2">
            <IoCall />
            <a
              href={`tel:${telefone}`}
              target="_blank">
                {formatTelefone(telefone)}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <IoMail />
          <a href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
        <div className="h-0.5 mx-4 bg-white/30 w-full rounded-full"></div>
          <div className="flex w-full flex-row justify-between text-sm opacity-80">
            <span>Copyright &copy; 2025</span>
            <span>Desenvolvido por Lara Aguilar</span>
          </div>
        </div>
      </footer>
    );
  }
