import './App.css'
import Header from './components/header/Header'
import CourseItem from './components/course-item/CourseItem'
import Card from './components/ui/card/Card'

function App() {
  // js code
  const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'AWS'];
  
  return (
    <div>
      <Header>Udemy</Header>
      
      <ol id='id1'>
        {
          courses.map((course) => <CourseItem key={course} courseName={course}/>)
        }
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
