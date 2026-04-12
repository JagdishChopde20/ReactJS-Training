import './App.css'
import Header from './components/header/Header'
import CourseItem from './components/course-item/CourseItem'

function App() {
  // js code
  
  return (
    <div>
      <Header />
      
      <ol id='id1'>
        <CourseItem courseName="HTML"/>
        <CourseItem courseName="CSS" />
        <CourseItem courseName="JavaScript" />
        <CourseItem courseName="React" />
        <CourseItem courseName="Angular" />
      </ol>
    </div>
  )
}

export default App
