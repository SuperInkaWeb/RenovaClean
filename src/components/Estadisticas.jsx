const Estadisticas = () => {
  return (
    <section id="clientes" className="estadisticas">
      <div className="container estadisticas-content">

        {/* TARJETA 1 */}
        <div className="estadistica-card">
          <div className="estadistica-img">
            <img
              src="/assets/img/porcentaje 1.png"
              alt="Estadística salud"
            />
          </div>

          <div className="estadistica-text">
            <h4>
              ¿Sabías que un lugar limpio reduce 8 veces (62%) las
              probabilidades de contraer enfermedades como la gripe?
            </h4>

            <p>
              Entendemos que la limpieza es un factor clave para la salud<br />
              y la calidad de la vida. Por eso trabajamos con protocolos<br />
              de limpieza profesional, productos adecuados y personal<br />
              capacitado, asegurando espacios más seguros, higiénicos<br />
              y saludables. Cada servicio que realizamos está pensado<br />
              para proteger a quienes viven y trabajan en esos<br />
              ambientes, reforzando nuestro compromiso con la prevención,<br />
              el cuidado y la tranquilidad de nuestros clientes.
            </p>
          </div>
        </div>

        {/* TARJETA 2 */}
        <div className="estadistica-card reverse">
          <div className="estadistica-text">
            <h4>
              ¿Sabías que un espacio de trabajo limpio reduce<br />
              casi a la mitad (46%) el ausentismo laboral?
            </h4>

            <p>
              Al disminuir la propagación de virus, bacterias y agentes<br />
              contaminantes que afectan la salud de los colaboradores.<br />
              La limpieza profesional no solo mejora la imagen de la empresa,<br />
              sino que también impacta directamente en el bienestar,<br />
              la motivación y el rendimiento del equipo.<br />
              Nuestro compromiso es ayudar a las empresas a crear<br />
              entornos más seguros, saludables y eficientes,<br />
              donde las personas puedan desempeñarse con mayor tranquilidad.
            </p>
          </div>

          <div className="estadistica-img">
            <img
              src="/assets/img/porcentaje 2.png"
              alt="Estadística oficina"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Estadisticas;
