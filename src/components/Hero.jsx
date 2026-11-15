function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-texto">

        <span className="hero-destaque">
          DN | SOLUÇÕES WEB
        </span>

        <h1>
            Sites profissionais que ajudam empresas a crescer
        </h1>

        <p>
          Desenvolvemos sites modernos, rápidos e responsivos para pequenos
          negócios fortalecerem sua presença digital e transmitirem mais
          confiança aos seus clientes.
        </p>

        <div className="botoes">

          <a
            href="https://wa.me/5584996424820?text=Olá! Gostaria de saber mais sobre a criação de um site."
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
          </a>

          <a href="#projetos">
            Ver projetos
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;