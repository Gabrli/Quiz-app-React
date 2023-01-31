import React, { useState } from "react";


function MainGameClass(){ //Main Component this app 

    // All state in this application

    const [question, setQuestion] = useState('ile to 2 + 2')

    const [score, setScore] = useState(1)
    const [click, setClick] = useState(1)
    
    const [answer, setAnswer] = useState([

     {id: '1223', title: '5', Active: false,   isTrue: false},
     {id: '2323', title: '4', Active: false,  isTrue: true},

    
    ])

    const [modalScore, setModalScore] = useState([
        {id: '9999', isSchow: false, title: 'Twój wynik to:  '}
    ])

    const [resetBtn, setResetBtn] = useState([
        {id: '7777', title: 'Try agin', isSchow: false}
    ])

  
 
   

    const Check = (isTrue, id) =>{ //Function which is responsible for check variabule of answer object 
       

        let Score = score
      
        
     if(isTrue === true && id === '2323'){

        Score += 1;

        
     } else if(isTrue === true && id === '1223'){

        Score += 1;
  

     } 

    
     setScore(Score)
   
 

    }

    const NextFunction = (id) =>{ //Function which is responsible for change answer and question state
        const AnswerElements = answer
    const ScoreModal = modalScore
    const BtnReset = resetBtn
    let Question = question
    let Click = click
      

        Click +=1

        if(Click === 2){
            Question = 'Stolicą Polski jest ?'  //Check variabule ( Click )

            AnswerElements[0].title = 'Warszawa'
            AnswerElements[0].isTrue = true

            AnswerElements[1].title = 'Kraków'
            AnswerElements[1].isTrue = false
        } else if(Click === 3){
            Question = 'Ile to 7 x 7 ?'

            AnswerElements[0].title = '49'
            AnswerElements[0].isTrue = true

            AnswerElements[1].title = '39'
            AnswerElements[1].isTrue = false

        } else if(Click === 3){
            Question = 'Ile mieszka ludzi w Polsce ?'

            AnswerElements[0].title = '17 mln'
            AnswerElements[0].isTrue = false

            AnswerElements[1].title = '38 mln'
            AnswerElements[1].isTrue = true
        } else if(Click === 4){
            Question = 'jaką powierzchnie ma azja ?'

            AnswerElements[0].title = '44 500 000 km/2'
            AnswerElements[0].isTrue = true

            AnswerElements[1].title = '22 490 000 km/2'
            AnswerElements[1].isTrue = false

        } else if(Click === 5){
          
            ScoreModal[0].isSchow = true
            BtnReset[0].isSchow = true

          
        }

        

        setResetBtn(BtnReset)
        setModalScore(ScoreModal)
        setAnswer(AnswerElements) //Reset State
        setQuestion(Question)
        setClick(Click)

    }

    const ResetAll = () => { //Reset apllication 
      window.location.reload()
    }

    


    const AnswerElements = answer.map(e => {
        return <button onClick={() => Check(e.isTrue, e.id)} className={'answer'}  key={e.id}>{e.title}</button> //function which is responsible for  writing answer
    })

    const ModalElements = modalScore.map(e => {
        return <p className={`modal ${e.isSchow ? 'modalActive' : ''}`}>{e.title + score }</p> //Function which is responsible for schow Resolved score
    })

    const ResetElement = resetBtn.map(e => {
        return <button onClick={ResetAll} className={`btnReset ${e.isSchow ? 'btnActive' : ''}`}>{e.title}</button>
    })

    return(
        <div>
            <h1 className="title">QUIZZIES</h1>

            <div className="box-quiz">

                <div className="quiz-text-box"><p className="question-text">QUESTION:  {question}</p></div>
                {ModalElements}

                <div className="answer-box">

                    <button onClick={NextFunction} className="btn-next">Next</button>

                    {AnswerElements}
                    

                   
                </div>
            </div>
            {ResetElement}
        </div>
    )
}




export default MainGameClass
