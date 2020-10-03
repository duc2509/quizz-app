import React,{useState} from 'react'
import './QuizMain.css';
import Question from './Question'
import Answer from './Answer'
import Countdown from 'react-countdown';

function QuizMain() {
    const data = {
        questions:{
            1: 'What US city is known as the "birthplace of jazz"?',
            2: 'What is the capital of Greece?',
            3: 'What planet gave birth to Superman?',
            4:'What is the most common colour of toilet paper in France?',
            5:'If you dug a hole through the centre of the earth starting from Wellington in New Zealand, which European country would you end up in?',
            6:'Henry VIII introduced which tax in England in 1535?',
            7:'What is the correct term for a question mark immediately followed by an exclamation mark?',
            8:'The average person does what thirteen times a day?',
            9:'Coprastastaphobia is the fear of what?',
            10:'What were the first ice hockey pucks made out of?'
        },
        answers: {
            1: {
                1: 'Chicago',
                2: 'New Orleans',
                3: 'New York'
            },
            2: {
                1: 'Athens',
                2: 'Patras',
                3: 'Kalamata'
            },
            3: {
                1: 'Krypton',
                2: 'Mars',
                3: 'Saturn'
            },
            4: {
                1: 'White',
                2: 'Pink',
                3: 'Blue'
            },
            5: {
                1: 'Spain',
                2: 'US',
                3: 'UK'
            },
            6: {
                1: 'A beard tax',
                2: 'A shirt tax',
                3: 'A hat tax'
            },
            7: {
                1: 'Semi-colum',
                2: 'Interrobang',
                3: 'Colum'
            },
            8: {
                1: 'Laughs',
                2: 'Eats',
                3: 'Cries'
            },
            9: {
                1: 'Constipation',
                2: 'High',
                3: 'Water'
            },
            10: {
                1: 'Knife',
                2: 'Gun',
                3: 'Frozen cow dung'
            },

        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '1',
            4: '2',
            5: '1',
            6: '1',
            7: '2',
            8: '1',
            9: '1',
            10:'3'
        },
    }
    const [correctAnswer,setCorrectAnswer] = useState(0);
    const [clickedAnswer,setClickedAnswer] = useState(0);
    const [step,setStep] = useState(1);
    const [score,setScore] = useState(0);
    const [start,setStart] = useState(false);

    const checkAnswer = answer => {
        if(answer===data.correctAnswers[step]){
            setScore(score+1);
            setCorrectAnswer(data.correctAnswers[step]);
            setClickedAnswer(answer);
        }else{
            setCorrectAnswer(0);
            setClickedAnswer(answer);
        }
    }
    const nextStep = () =>{
        setStep(step + 1);
        setCorrectAnswer(0);
        setClickedAnswer(0);
    }
    function refreshPage() {
        window.location.reload(false);
      }
    const startApp = ()=>{
        setStart(true);
    }
    const timeout=() =>{
        setStep(Object.keys(data.questions).length+1)
    }

    return (
        <div className="Content">
            
            {
            start === false ?(
                <div className="startPage">
                    <h1>Are you ready?</h1>
                    <button onClick={startApp}>Start</button>
                </div>
            ):

            step <= Object.keys(data.questions).length && start === true ?
            (<div>
            <Countdown date={Date.now() + 120000} onComplete={timeout}/>
            <Question
                question={data.questions[step]}
            />
            <Answer
                answer={data.answers[step]}
                checkAnswer={checkAnswer}
                correctAnswer={correctAnswer}
                clickedAnswer={clickedAnswer}
            />
            <button 
                className="NextStep"
                disabled={
                    clickedAnswer && Object.keys(data.questions).length >= step
                    ? false : true
                }
                onClick={nextStep}
            >
                Next
                </button>

            </div>):
            (
                <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(data.questions).length}</p>
                            <p>Thank you!</p>
                            <button onClick={refreshPage}>Play again!</button>
                        </div>
            )
                
            
            }
        </div>
    )
}

export default QuizMain
                            
    
