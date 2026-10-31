
import barbearia from "../assets/barbearia.png";
import restaurante from "../assets/restaurante.png";
import clinica from "../assets/clinica.png";

function Portfolio() {
  return (
    <section id="projetos" className="portfolio">
      <div className="container">

        <h2>Portfólio</h2>

        <div className="portfolio-cards">

          <a
            href="https://barbearia-premium-eight-xi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="card projeto"
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer"
            }}
          >
            <img src={barbearia} alt="Projeto Barbearia Premium" />

            <h3>Barbearia Premium</h3>

            <p>
              Site moderno para barbearias, com apresentação
              de serviços, galeria e informações de contato.
            </p>

            <span>Visualizar projeto ↗</span>
          </a>

          <div className="card projeto">
            <img src={restaurante} alt="Projeto de restaurante" />

            <h3>Restaurante</h3>

            <p>
              Página para divulgar cardápio,
              localização e informações do negócio.
            </p>
          </div>

          <div className="card projeto">
            <img src={clinica} alt="Projeto de clínica" />

            <h3>Clínica</h3>

            <p>
              Site profissional para apresentar serviços
              e facilitar o contato dos pacientes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Portfolio;
