const Blog = () => {
  return (
    <>
      {/* HERO BLOG */}
      <section className="blog-hero">
        <div className="container">
          <h1>Blog de Limpieza Profesional</h1>
          <p>
            Consejos, buenas prácticas y novedades para mantener tus espacios
            impecables.
          </p>
        </div>
      </section>

      {/* LISTA DE POSTS */}
      <section className="blog-list">
        <div className="container blog-grid">

          {/* POST 1 */}
          <article className="blog-card">
            <img
              src="/assets/Blog/beneficios-de-limpieza-profesonal-de-oficinas.jpg"
              alt="Limpieza de oficinas"
            />
            <h3>Beneficios de una limpieza profesional en oficinas</h3>
            <p>
              Descubre cómo un ambiente limpio mejora la productividad y salud laboral.
            </p>
            <a href="#">Leer más</a>
          </article>

          {/* POST 2 */}
          <article className="blog-card">
            <img
              src="/assets/Blog/cleaning-company223-1536x1024.jpeg"
              alt="Limpieza profunda"
            />
            <h3>¿Cada cuánto hacer una limpieza profunda?</h3>
            <p>
              Te explicamos cuándo y por qué es necesaria una limpieza deep cleaning.
            </p>
            <a href="#">Leer más</a>
          </article>

          {/* POST 3 */}
          <article className="blog-card">
            <img
              src="/assets/Blog/LP-Portada-2-Errores-comunes-en-la-limpieza-y-como-evitarlos-1024x575.jpg"
              alt="Higiene en el hogar"
            />
            <h3>Errores comunes en la limpieza del hogar</h3>
            <p>
              Evita estos errores y mejora la higiene de tus espacios.
            </p>
            <a href="#">Leer más</a>
          </article>

        </div>
      </section>
    </>
  );
};

export default Blog;
