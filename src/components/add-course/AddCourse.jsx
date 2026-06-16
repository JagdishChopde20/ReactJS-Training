import { useState } from "react";
import Card from "../ui/card/Card";

const AddCourse = (props) => {
    const [newCourseName, setNewCourseName] = useState('');

    const courseNameChangedHandler = (event) => {
        setNewCourseName(event.target.value);
    }

    const addCourseHandler = () => {
        console.log(newCourseName);
        props.onAddNewCourse(newCourseName);
        setNewCourseName('');
    }

    return <Card>
        <label htmlFor="newCourseName">Course Name: </label>
        <input id="newCourseName" type="text" value={newCourseName} onChange={courseNameChangedHandler} />
        &nbsp;
        <button onClick={addCourseHandler}>Add Course</button>
    </Card>
}

export default AddCourse;