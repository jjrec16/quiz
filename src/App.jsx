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
      <MyButton />
      <ShoppingList />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
