import PropTypes from 'prop-types';

import TaskItem from "./TaskItem";
import "./Tasks.scss";

function TasksList({ tasks, onClickCompleted }) {

  const htmlList = tasks.map( task => (
    <TaskItem
      key={task.id}
      {...task}
      onClickCompleted={onClickCompleted}
    />
  ));

  return (
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
        {htmlList}
      </ul>
    </section>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool
  })),
  onClickCompleted: PropTypes.func.isRequired
};

export default TasksList;
