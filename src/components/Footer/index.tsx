export default function Footer() {
    return (
      <footer id="contato" className="bg-[#006D33] text-white py-8 mt-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
          <div className="w-full">
          <div className="text-lg font-semibold">Contato</div>
          <div>(27) 99999-2422</div>
          <div>contato@amorimguincho.com</div>
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
