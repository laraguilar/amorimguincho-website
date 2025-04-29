import Banner from "@/components/Banner";
import Carrossel from "@/components/Carrossel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Servicos />
      <Sobre />
      <Carrossel />
      <Footer />
    </>
  );
}
