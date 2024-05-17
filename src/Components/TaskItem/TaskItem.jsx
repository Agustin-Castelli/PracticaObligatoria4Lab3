import PropTypes from "prop-types";
import {Card, Button, CardBody, CardText} from "react-bootstrap";
import { useState } from "react";


const TaskItem = ({ id, content, onDelete }) => {

    const [markTask, setMarkTask] = useState("");

    const clickHandler = () => {
        setMarkTask(!markTask);
    }

    const deleteHander = () => {
        onDelete(id);
    }

    return(
        <>
            <Card className="mx-3" style={{display: 'flex', justifyContent: 'center'}}>
                <CardBody>
                    <CardText style={{textDecoration: markTask? 'line-through' : 'none'}}>{content}</CardText>
                    <Button className="mx-2" onClick={clickHandler}>{markTask? "Desmarcar" : 'Marcar como hecho'}</Button>
                    <Button className="mx-2" variant="danger" onClick={deleteHander}>Borrar tarea</Button>
                </CardBody>
            </Card>
        </>
    )
};

TaskItem.propTypes = {
    id: PropTypes.number,
    content: PropTypes.array,
    onDelete: PropTypes.func
}

export default TaskItem;