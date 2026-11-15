import barbearia from "../assets/barbearia.png";
import restaurante from "../assets/restaurante.png";

function Portfolio() {
  return (
    <section id="projetos" className="portfolio">
      <div className="container">
        <h2>Projetos</h2>

        <div className="portfolio-cards">

          <a
            href="https://barbearia-premium-eight-xi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="card projeto"
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer"
            }}
          >
            <img src={barbearia} alt="Barbearia Premium" />

            <h3>Barbearia Premium</h3>

            <p>
              Site institucional desenvolvido em React com design moderno,
              menu responsivo, integração com WhatsApp e foco na experiência
              do cliente.
            </p>

            <span>🌐 Ver Projeto ↗</span>
          </a>

          <a
            href="https://restaurante-palacio-gourmet.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="card projeto"
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer"
            }}
          >
            <img src={restaurante} alt="Palácio Gourmet" />

            <h3>Palácio Gourmet</h3>

            <p>
              Site para restaurante desenvolvido em React com layout elegante,
              cardápio, galeria, animações, menu responsivo e integração com
              WhatsApp.
            </p>

            <span>🌐 Ver Projeto ↗</span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;