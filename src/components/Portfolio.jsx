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
          >

            <img 
              src={barbearia} 
              alt="Projeto Barbearia Premium" 
            />

            <h3>Barbearia Premium</h3>

            <p>
              Site institucional desenvolvido em React,
              com design sofisticado, navegação responsiva
              e integração com WhatsApp para facilitar o contato.
            </p>

            <span>
              🌐 Ver projeto ↗
            </span>

          </a>



          <a
            href="https://restaurante-palacio-gourmet.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="card projeto"
          >

            <img 
              src={restaurante} 
              alt="Projeto Palácio Gourmet" 
            />

            <h3>Palácio Gourmet</h3>

            <p>
              Site gastronômico desenvolvido em React,
              com layout elegante, apresentação do cardápio,
              galeria de imagens e experiência responsiva.
            </p>

            <span>
              🌐 Ver projeto ↗
            </span>

          </a>


        </div>

      </div>

    </section>
  );
}

export default Portfolio;