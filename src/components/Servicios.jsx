import { useState } from "react";

const Servicios = () => {
  const [mostrarExtra, setMostrarExtra] = useState(false);

  return (
    <section id="servicios" className="servicios">
      <div className="container">

        <h2 className="servicios-title">Nuestros servicios</h2>

        {/* GRID PRINCIPAL */}
        <div className="servicios-grid">

          <div className="servicio-card">
            <h3>Limpieza residencial general</h3>
            <p>
              Limpieza de salas, dormitorios, cocinas, baños.
              Limpieza de superficies, repuestos, pisos,
              vidrios interiores.
            </p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza profunda (deep cleaning)</h3>
            <p>
              Limpieza de fondo de espacios difíciles
              (detrás de muebles, esquinas, zócalos).
              Desinfección intensiva y pulido de
              superficies delicadas.
            </p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza de mudanza</h3>
            <p>
              Limpieza cuando se muda o desde un
              departamento o casa. Incluye limpieza
              de alfombras, paredes, ventanas y pisos.
            </p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza de muebles, tapicería y colchones</h3>
            <p>
              Lavado y desinfección de sofás, sillones,
              sillas y colchones. Eliminación de manchas,
              ácaros y malos olores.
            </p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza de oficinas y ambientes corporativos</h3>
            <p>
              Limpieza de escritorios, salas de reuniones,
              oficinas y cocinetas. Mantenimiento regular
              y limpieza especializada (diarios, semanales).
            </p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza de cristales y ventanas</h3>
            <p>
              Limpieza de vidrios tanto interiores como
              exteriores (según altura y seguridad).
              Pulido de vidrios y ventanas para dar brillo.
            </p>
          </div>

        </div>

        {/* GRID EXTRA — IDÉNTICO */}
        <div
          className="servicios-grid servicios-extra"
          id="serviciosExtra"
          style={{ display: mostrarExtra ? "grid" : "none" }}
        >

          <div className="servicio-card">
            <h3>Tratamiento y mantenimiento de pisos</h3>
            <p>Barrido, mopa, encerado y pulido según tipo de piso.</p>
          </div>

          <div className="servicio-card">
            <h3>Desinfección y sanitización</h3>
            <p>Aplicación de productos desinfectantes de amplio espectro.</p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza post-construcción</h3>
            <p>Remoción de polvo, restos de pintura y adhesivos.</p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza para eventos</h3>
            <p>Limpieza antes, durante y después de eventos.</p>
          </div>

          <div className="servicio-card">
            <h3>Mantenimiento de áreas comunes</h3>
            <p>Pasillos, escaleras, recepciones y fachadas internas.</p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza ecológica</h3>
            <p>Uso de productos biodegradables y sostenibles.</p>
          </div>

          <div className="servicio-card">
            <h3>Lavado de alfombras y cortinas</h3>
            <p>Aspirado, lavado profundo y secado.</p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza en altura / fachadas</h3>
            <p>Limpieza de fachadas y cristales altos.</p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza exprés</h3>
            <p>Servicio rápido para espacios pequeños.</p>
          </div>

          <div className="servicio-card">
            <h3>Mantenimiento de garajes</h3>
            <p>Limpieza de estacionamientos y áreas de parqueo.</p>
          </div>

          <div className="servicio-card">
            <h3>Limpieza de cocinas industriales</h3>
            <p>Campanas, hornos, superficies y control de grasa.</p>
          </div>

          <div className="servicio-card">
            <h3>Consultoría de higiene y control</h3>
            <p>Evaluación y asesoría en limpieza profesional.</p>
          </div>

        </div>

        {/* BOTÓN — MISMO ID Y CLASE */}
        <button
          id="btnServicios"
          className="btn-servicios"
          onClick={() => setMostrarExtra(!mostrarExtra)}
        >
          {mostrarExtra ? "Ver menos" : "Ver todo"}
        </button>

      </div>
    </section>
  );
};

export default Servicios;
