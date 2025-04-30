import Banner from "@/components/Banner";
import Carrossel from "@/components/Carrossel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BotaoTelefoneFixo from "@/components/PhoneButton";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";

export default function Home() {
  const telefone = "27999996330";
  const email = "contato@amorimguincho.com"
  return (
    <>
      <BotaoTelefoneFixo telefone={telefone} intervalo={4000} />
      <Navbar />
      <Banner telefone={telefone}/>
      <Servicos />
      <Sobre />
      <Carrossel />
      <Footer telefone={telefone} email={email} />
    </>
  );
}
