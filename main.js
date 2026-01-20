// ===============================
// BOTÓN VER TODO / VER MENOS (SERVICIOS)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const btnServicios = document.getElementById("btnServicios");
  const serviciosExtra = document.getElementById("serviciosExtra");

  if (btnServicios && serviciosExtra) {
    btnServicios.addEventListener("click", () => {
      const visible = serviciosExtra.style.display === "grid";

      if (visible) {
        serviciosExtra.style.display = "none";
        btnServicios.textContent = "Ver todo";
      } else {
        serviciosExtra.style.display = "grid";
        btnServicios.textContent = "Ver menos";
      }
    });
  }
});

// ===============================
// EMAILJS
// ===============================
(function () {
  emailjs.init("HQey1wswri0aASYg1"); // 👈 reemplaza
})();

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

      emailjs.sendForm(
    "service_87jkpjr",
    "template_f00hbms", // 👈 correo interno
    this
  );

    emailjs.sendForm(
      "service_87jkpjr",   // 👈 reemplaza
      "template_24ms44k",  // 👈 reemplaza
      this
    )
    .then(() => {
      alert("✅ Mensaje enviado correctamente");
      form.reset();
    })
    .catch(error => {
      alert("❌ Error al enviar el mensaje");
      console.error(error);
    });
  });
}