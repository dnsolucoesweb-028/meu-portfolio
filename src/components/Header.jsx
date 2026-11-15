function Header() {
  return (
    <header className="header">

      <div className="container header-container">

        <h2 className="logo">
          DN <span>| Soluções Web</span>
        </h2>

        <nav>
          <ul className="menu">

            <li>
              <a href="#inicio">Início</a>
            </li>

            <li>
              <a href="#sobre">Sobre</a>
            </li>

            <li>
              <a href="#servicos">Serviços</a>
            </li>

            <li>
              <a href="#projetos">Projetos</a>
            </li>

            <li>
              <a href="#contato">Contato</a>
            </li>

          </ul>
        </nav>

        <a
          className="header-button"
          href="https://wa.me/5584996424820?text=Olá! Gostaria de saber mais sobre a criação de um site."
          target="_blank"
          rel="noreferrer"
        >
          Orçamento
        </a>

      </div>

    </header>
  );
}

export default Header;