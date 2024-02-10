import Tip from "./Tip";

import ListIcon from "../../images/list-ol-solid.svg";
import LightbulbIcon from "../../images/lightbulb-regular.svg";
import UngroupIcon from "../../images/object-ungroup-regular.svg";
import ClockIcon from "../../images/clock-regular.svg";
import RepeatIcon from "../../images/repeat-solid.svg";
import "./Tips.scss";

function TipsList() {
  return (
    <section className="tips">
      Consejos para completar tus tareas
      <ul className="tips-list">
        <li className="tips-item">
          <Tip
            icon={ListIcon}
            altText="Icono de tip con forma de listado"
          >
            Pon en los primeros puestos de la lista dos objetivos importantes
            que necesites cumplir hoy. Así te aseguras de que no vas a perder el
            tiempo en tareas intrascendentes o falsamente productivas.
          </Tip>
        </li>
        <li className="tips-item">
          <Tip
            icon={LightbulbIcon}
            altText="Icono de tip con forma de bombilla"
          >
            Empieza con cosas fáciles. Antes de esos objetivos importantes,
            incluye algunas tareas sencillas para empezar tu jornada diaria.
          </Tip>
        </li>
        <li className="tips-item">
          <Tip
            icon={UngroupIcon}
            altText="Icono de tip con forma de caja separándose"
          >
            Divide las tareas. Un clásico de los métodos de organización es
            dividir los proyectos más complejos en pequeñas tareas con hitos y
            metas a corto plazo.
          </Tip>
        </li>
        <li className="tips-item">
          <Tip
            icon={ClockIcon}
            altText="Icono de tip con forma de reloj"
          >
            Organiza la planificación. Una de las cosas más complicadas es
            precisamente preparar la lista todos los días. Así que a primera
            hora dal día puedes dedicar un tiempo para organizar tus tareas.
          </Tip>
        </li>
        <li className="tips-item">
          <Tip
            icon={RepeatIcon}
            altText="Icono de tip con forma de flechas repitiendo"
          >
            Prepara una lista nueva todos los días. No dejes que las mismas
            tareas se atasquen de un día para otro.
          </Tip>
        </li>
      </ul>
    </section>
  );
}

export default TipsList;
