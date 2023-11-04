import React from 'react'

const QuizResult = (props) => {
  return (
    <React.Fragment>
       Your Score :{props.score} <br/>
      Your Total Score:{props.totalScore}
    </React.Fragment>
  )
}

export default QuizResult