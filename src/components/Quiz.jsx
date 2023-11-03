import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import QuizeData from "../Data/QuizData";

const Quiz = () => {
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const changeQuestion=()=>{

        if(currentQuestion<QuizeData.length-1)
        { setCurrentQuestion(currentQuestion+1);}

        else{

            alert("Quiz Completed");
            setCurrentQuestion(0);
        }    
    }

    let handleClick=()=>{

      console.log("type here");
    }

  return (
    <React.Fragment>
      <div className="grid">
        <div className="col-6">
          <h2 className="text-center">Quiz App</h2>

          <Card className="m-3 shadow-4 ">
            <Card
              className=" shadow-8 m-3 mb-2 text-center "
              style={{ height: "100px" }}
            >
              <p className="font-bold">{currentQuestion+1 }.  {QuizeData[currentQuestion].question}</p>
            </Card>
            {QuizeData[currentQuestion].options.map((option, index) => {
              return (
                <Card
                  className="mb-2 m-3 text-center shadow-4"
                  style={{ height: "60px" }} onClick={handleClick}
                >
                  {option}
                </Card>
              );
            })}

            <div className="text-center mb-4">
              <Button label="Next" className="mb-4" onClick={changeQuestion} severity="success" />
            </div>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Quiz;
