const Valores = () => {
  return (
    <section className="valores">

      <div className="container valores-content">

        {/* Imagen */}
        <div className="valores-img">
          <img
            src="/assets/img/imagen 2.png"
            alt="Limpieza profesional"
          />
        </div>

        {/* Texto */}
        <div className="valores-text">
          <p>
            Buscamos ser la marca de limpieza más conocida, confiable y
            recomendada del Perú, expandiéndonos a través de franquicias
            y llevando nuestro servicio a la mayor cantidad de hogares
            y empresas posible.
          </p>
        </div>

      </div>

      {/* Título valores */}
      <div className="container valores-bottom">
        <h3>
          NUESTROS <span>VALORES</span>
        </h3>

        <p className="valores-list">
          Calidad &nbsp; | &nbsp; Confianza &nbsp; | &nbsp; Compromiso
          &nbsp; | &nbsp; Innovación &nbsp; | &nbsp; Seguridad
        </p>
      </div>

    </section>
  );
};

export default Valores;
