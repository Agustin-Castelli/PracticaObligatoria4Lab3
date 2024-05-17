import PropTypes from "prop-types";
import { useState } from "react";
import {Card, Button, Form} from "react-bootstrap";

const NewTask = ({ onTaskDataSaved }) => {

    const [enteredTask, setEnteredTask] = useState("");

    const changeTaskHandler = (event) => {
        setEnteredTask(event.target.value);
    }

    const submitTaskHandler = (event) => {
        event.preventDefault();

        const taskData = {
            content: enteredTask
        }

        onTaskDataSaved(taskData);
        setEnteredTask("");
    }

    return(
        <Card className="m-4" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={submitTaskHandler}>
                    <Form.Group className="mb-3" controlId="taskContent">
                        <Form.Label>Nueva tarea:</Form.Label>
                        <Form.Control onChange={changeTaskHandler} value={enteredTask} type="text" placeholder="Ingrese la nueva tarea aquí." />
                    </Form.Group>
                    <Button variant="primary" type="submit">Agregar tarea</Button>
                </Form>
            </Card.Body>
        </Card>
    )
};


NewTask.propTypes = {
    onTaskDataSaved: PropTypes.func
};

export default NewTask;