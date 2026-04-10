import './App.css'
import Header from './components/header/Header'

function App() {
  // js code
  const username = 'Jagdish';

  const isUserLoggedIn = true;

  function getUsername() {
    if (isUserLoggedIn) {
      return 'Sandeep';
    } 
    else {
      return 'Guest';
    }
  }

  return (
    <div>
      <Header />
      <h1>Hello,  { username } </h1>
      <h1> { 2 + 5 } </h1>
      <h1> Hello, { getUsername() } </h1>
      <h1> Hello, { isUserLoggedIn ? 'Jagdish' : 'Guest' } </h1>

      { !isUserLoggedIn && <button>Login</button> }
      { isUserLoggedIn && <button>Logout</button> }
      
      {/* { 
        if (isUserLoggedIn) {
      return 'Sandeep';
    } 
    else {
      return 'Guest';
    }
       } */}

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id culpa ipsum iusto doloribus, totam explicabo ex facilis cumque fugiat, distinctio eveniet illum. Iure minima provident dicta tenetur molestias! Corporis, debitis.</p>
    </div>
  )
}

export default App
