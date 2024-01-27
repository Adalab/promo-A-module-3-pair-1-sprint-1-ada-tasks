import "../scss/App.scss";

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="title">AdaTasks</h1>
      </header>
      <main className="main">
        <section className="container add ">
          <form className="task-form-add">
            <input
              type="text"
              className="task-input js-text-task-add"
              placeholder="Nueva tarea"
            />
            <button className="add-task-btn js-btn-add">Agregar</button>
          </form>
        </section>

        <section className="container">
          <form className="task-form">
            <input
              type="text"
              className="task-input js-text-task-filter"
              placeholder="Ejemplo: gim"
            />
            <button className="add-task-btn js-btn-filter">Buscar</button>
          </form>
          <ul className="task-list">
            <li className="tachado">
              <input id="1657692730126289" type="checkbox" checked="" />
              Recoger setas en el campo
            </li>
            <li className="tachado">
              <input id="16576927301283248" type="checkbox" checked="" />
              Comprar pilas
            </li>
            <li className="tachado">
              <input id="16576927301315832" type="checkbox" checked="" />
              Poner una lavadora de blancos
            </li>
            <li>
              <input id="16576927301332268" type="checkbox" />
              Aprender cómo se realizan las peticiones al servidor en JavaScript
            </li>
            <li>
              <input id="16576927301332392" type="checkbox" />
              Ir al gimnasio
            </li>
            <li>
              <input id="16576927301334592" type="checkbox" />
              Comprar bragas
            </li>
          </ul>
        </section>

        <section className="tips">
          Consejos para completar tus tareas
          <ul className="tips-list">
            <li className="tips-item">
              <img src="./images/list-ol-solid.svg" alt="" />
              <p>
                Pon en los primeros puestos de la lista dos objetivos
                importantes que necesites cumplir hoy. Así te aseguras de que no
                vas a perder el tiempo en tareas intrascendentes o falsamente
                productivas.
              </p>
            </li>
            <li className="tips-item">
              <img src="./images/lightbulb-regular.svg" alt="" />
              <p>
                Empieza con cosas fáciles. Antes de esos objetivos importantes,
                incluye algunas tareas sencillas para empezar tu jornada diaria.
              </p>
            </li>
            <li className="tips-item">
              <img src="./images/object-ungroup-regular.svg" alt="" />
              <p>
                Divide las tareas. Un clásico de los métodos de organización es
                dividir los proyectos más complejos en pequeñas tareas con hitos
                y metas a corto plazo.
              </p>
            </li>
            <li className="tips-item">
              <img src="./images/clock-regular.svg" alt="" />
              <p>
                Organiza la planificación. Una de las cosas más complicadas es
                precisamente preparar la lista todos los días. Así que a primera
                hora dal día puedes dedicar un tiempo para organizar tus tareas.
              </p>
            </li>
            <li className="tips-item">
              <img src="./images/repeat-solid.svg" alt="" />
              <p>
                Prepara una lista nueva todos los días. No dejes que las mismas
                tareas se atasquen de un día para otro.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
