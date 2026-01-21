import { useRef } from "react";
import useEmailJS from "../hooks/useEmailJS";

const Consultas = () => {
  const formRef = useRef();
  const { sendEmail } = useEmailJS();

  const enviarFormulario = (e) => {
    e.preventDefault();

    sendEmail(formRef)
      .then(() => {
        alert("✅ Mensaje enviado correctamente");
        formRef.current.reset();
      })
      .catch((error) => {
        alert("❌ Error al enviar el mensaje");
        console.error(error);
      });
  };

  return (
    <section className="consultas" id="contacto">
      <div className="consultas-wave-top"></div>

      <div className="container consultas-content">

        {/* COLUMNA IZQUIERDA */}
        <div className="consultas-info">
          <h2>Consultas</h2>

          <p className="consultas-subtitle">
            ¡No dudes en contactarnos! Estamos aquí para ayudarte
            a mantener tu espacio impecable.
          </p>

          <div className="consultas-datos">

            <div className="dato">
              <img src="/assets/img/icono telefono.png" alt="Teléfono" />
              <div>
                <strong>Escríbenos</strong>
                <p>+51 972 594 948</p>
              </div>
            </div>

            <div className="dato">
              <img src="/assets/img/icono mail.png" alt="Correo" />
              <div>
                <strong>Correo</strong>
                <p>info@renovaclean.com</p>
              </div>
            </div>

            <div className="dato">
              <img src="/assets/img/icono reloj blanco.png" alt="Horario" />
              <div>
                <strong>Horarios</strong>
                <p>Lunes a Viernes de 8:00 a 18:00</p>
              </div>
            </div>

            <div className="dato">
              <img src="/assets/img/icono ubicación.png" alt="Ubicación" />
              <div>
                <strong>Oficinas</strong>
                <p>
                  Ramón Zavala 790, Urb. Las Moreras,<br />
                  La Perla, Callao
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="consultas-form">
          <form ref={formRef} onSubmit={enviarFormulario}>
            <label>Nombre</label>
            <input type="text" name="name" required />

            <label>Correo electrónico</label>
            <input type="email" name="email" required />

            <label>Teléfono o WhatsApp</label>
            <input type="text" name="phone" />

            <label>Mensaje</label>
            <textarea name="message" rows="4" required></textarea>

            <button type="submit">ENVIAR</button>
          </form>
        </div>

      </div>

      <div className="consultas-wave-bottom"></div>
    </section>
  );
};

export default Consultas;
