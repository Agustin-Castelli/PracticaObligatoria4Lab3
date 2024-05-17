import TaskItem from "../TaskItem/TaskItem";
import PropTypes from "prop-types";

const TaskList = ({ tasks, deleteTask }) => {

    const TasksMapped = tasks.map((task) => (
        <>
            <TaskItem 
                id={task.id} 
                content={task.content}
                onDelete={deleteTask}
            />
        </>
    ));

    return TasksMapped;
};

TaskList.propTypes = {
    tasks: PropTypes.array
};

export default TaskList;