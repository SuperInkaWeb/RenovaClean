const Hero = () => {
  return (
    <section id="nosotros" className="hero">

      <div className="hero-content">
        <h1>
          Tu espacio impecable,<br />siempre
        </h1>

        <p>
          Ofrecemos soluciones de limpieza profesional y mantenimiento
          para hogares, oficinas, empresas y edificios.
          Estamos en la zona centro de Perú.
        </p>

        <a href="#contacto" className="btn-hero">
          CONTÁCTANOS
        </a>
      </div>

      {/* Curva inferior */}
      <div className="hero-wave"></div>

    </section>
  );
};

export default Hero;
