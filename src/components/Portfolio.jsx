import barbearia from "../assets/barbearia.png";
import restaurante from "../assets/restaurante.png";
import clinica from "../assets/clinica.png";

function Portfolio() {
  return (
    <section id="projetos" className="portfolio">
      <div className="container">

        <h2>Portfólio</h2>

        <div className="portfolio-cards">

          <div className="card projeto">
            <img src={barbearia} alt="Projeto de barbearia" />

            <h3>Barbearia Moderna</h3>

            <p>
              Site para barbearias apresentarem serviços,
              horários e formas de contato.
            </p>
          </div>


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