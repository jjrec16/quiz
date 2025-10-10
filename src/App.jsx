import { useState } from 'react'
import './App.css'
import QuestionPanel from './components/QuestionPanel';


function App() {

  const [count, setCount] = useState(0)

  function addPoint() {
    setCount(count + 1);
  }

  return (
    <>
      <QuestionPanel question={"Ile to 2+2?"} answers={[1, 2, 3, 4]} correctIndex={3} addPoint={addPoint}/>
    </>
  )
}

export default App
