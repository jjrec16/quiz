import AnswerButton from "./AnswerButton";

function QuestionPanel({ question, answers, correctIndex, addPoint, onNextQuestion }) {

    function checkAnswer(index){
      if(index == correctIndex){
        addPoint()
        alert("Dobrze!")
      }
      else{
        alert("Źle!")
      }
      onNextQuestion();
    }

    const answerButtons = [];
    for (let i = 0; i < answers.length; i++) {
        answerButtons.push(
            <AnswerButton
                key={i}
                text={answers[i]} 
                onClick={() => checkAnswer(i)}
            />
        );
    }

    return (
      <div className="niezaznaczalny">
        <h1>{question}</h1>
        {answerButtons}
        
      </div>
    );
}

export default QuestionPanel;