import { useState } from 'react'
import './App.css'
import QuestionPanel from './components/QuestionPanel';
import questions from './components/Questions';


function App() {

  const [count, setCount] = useState(0)
  const [qIndex, setQuestionIndex] = useState(0);


  function addPoint() {
    setCount(count + 1);
  }

  function nextQuestion() {
    setQuestionIndex((index) => (index + 1));
    // setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  }

  return (
    <>
      <QuestionPanel 
        question={questions[qIndex].question} 
        answers={questions[qIndex].answers} 
        correctIndex={questions[qIndex].correctIndex} 
        addPoint={addPoint}
        onNextQuestion={nextQuestion}
      />
    </>
  )
}

export default App
