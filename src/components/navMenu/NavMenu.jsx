import Consejos from "./Consejos";
import Inicio from "./Inicio";
import NuevaTarea from "./NuevaTarea";


function NavMenu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <Inicio></Inicio>
        </li>
        <li className="menu__item">
          <NuevaTarea></NuevaTarea>
        </li>
        <li className="menu__item">
          <Consejos></Consejos>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
