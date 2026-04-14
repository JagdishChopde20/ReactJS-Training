import './App.css'
import Header from './components/header/Header'
import CourseItem from './components/course-item/CourseItem'
import Card from './components/ui/card/Card'

function App() {
  // js code
  
  return (
    <div>
      <Header>Udemy</Header>
      
      <ol id='id1'>
        <CourseItem courseName="HTML"/>
        <CourseItem courseName="CSS" />
        <CourseItem courseName="JavaScript" />
        <CourseItem courseName="React" />
        <CourseItem courseName="Angular" />
      </ol>

      <hr />
      <Card>
        <h1>Hello, Guest!</h1>
        <button>Login</button>
        <br /><br />
      </Card>
    </div>
  )
}

export default App
