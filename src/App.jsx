import { useState } from 'react'
import './App.css'
import QuestionPanel from './components/QuestionPanel';
import questions from './components/Questions';
import InfoPanel from './components/InfoPanel';
import EndScreen from './components/EndScreen';


function App() {

  const [points, setPoints] = useState(0)
  const [qIndex, setQuestionIndex] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);


  function addPoint() {
    setPoints(points + 1);
  }

  function nextQuestion() {
    console.log(qIndex, questions.length)
    if(qIndex + 1 === questions.length){
      setGameEnded(true);
      return;
    }
    setQuestionIndex((index) => (index + 1));
    // setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length); // w kolko
  }

  return (
    <>
      {gameEnded ? (
        <EndScreen points={points} />
        ) : (
          <>
            <QuestionPanel 
              question={questions[qIndex].question} 
              answers={questions[qIndex].answers} 
              correctIndex={questions[qIndex].correctIndex} 
              addPoint={addPoint}
              onNextQuestion={nextQuestion}
            />
            <InfoPanel points={points} />
          </>
        )}
    </>
  )
}

export default App
