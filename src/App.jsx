import { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList';
import MyButton from './components/MyButton';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
      <h3>Oddzielne liczniki: </h3>
      <MyButton />
      <MyButton />

      <h3>Lista: </h3>
      <ShoppingList />

      <h3>Wspólne liczniki: </h3>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
