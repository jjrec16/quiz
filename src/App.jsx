import { useState } from 'react'
import './App.css'
import QuestionPanel from './components/QuestionPanel';
import questions from './components/Questions';


function App() {

  const [count, setCount] = useState(0)

  function addPoint() {
    setCount(count + 1);
  }

  return (
    <>
      <QuestionPanel question={questions[1].question} answers={questions[1].answers} correctIndex={questions[1].correctIndex} addPoint={addPoint}/>
    </>
  )
}

export default App
