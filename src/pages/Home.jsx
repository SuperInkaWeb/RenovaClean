import Hero from "../components/Hero";
import Compromiso from "../components/Compromiso";
import Mision from "../components/Mision";
import Valores from "../components/Valores";
import Estadisticas from "../components/Estadisticas";
import Servicios from "../components/Servicios";
import Consultas from "../components/Consultas";
import useScrollToHash from "../hooks/useScrollToHash";
const Home = () => {
  useScrollToHash();
  return (
    <>
      <Hero />
      <Compromiso />
      <Mision />
      <Valores />
      <Estadisticas />
      <Servicios />
      <Consultas />
    </>
  );
};

export default Home;
