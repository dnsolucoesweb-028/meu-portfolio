function Header() {
  return (
    <header className="header">
      <div className="container">
        <h2 className="logo">DN | Soluções Web</h2>

        <nav>
          <ul className="menu">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;