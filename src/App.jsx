import './App.css'
import User from './components/user'

const userPromise = fetch('http://localhost:3000/users')
                    .then(res=>res.json())
                     


function App() {

  return (
    <>
      <h1>Simple crud Operation</h1>
      <User userPromise={userPromise}></User>
    </>
  )
}

export default App
