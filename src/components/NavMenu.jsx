function NavMenu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <a href="#" className="menu__link active">
            Inicio
          </a>
        </li>
        <li className="menu__item">
          <a href="javascript:alert('Ay! No funciona... todavía');" className="menu__link">
            Nueva Tarea
          </a>
        </li>
        <li className="menu__item">
          <a href="javascript:alert('Ay! No funciona... todavía');" className="menu__link">
            Consejos
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
