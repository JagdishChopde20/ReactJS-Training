import { useState } from "react";

import "./App.css";
import Header from "./components/header/Header";
import CourseItem from "./components/course-item/CourseItem";
import Card from "./components/ui/card/Card";
import AddCourse from "./components/add-course/AddCourse";

const INITIAL_COURSES = ["HTML", "CSS", "JavaScript", "React", "Python", "AWS"];

function App() {
  // js code
  const [courses, setCourses] = useState(INITIAL_COURSES);

  const addNewCourseHandler = (newCourse) => {
    setCourses(prevCourses => {
      return [...prevCourses, newCourse];
    });
  }

  return (
    <div>
      <Header>Udemy</Header>

      {/* <button onClick={() => addNewCourseHandler('Agentic AI')}>Add Course</button> */}
      <AddCourse onAddNewCourse={addNewCourseHandler} />

      <ol id="id1">
        {courses.map((course) => (
          <CourseItem key={course} courseName={course} />
        ))}
      </ol>
    </div>
  );
}

export default App;
