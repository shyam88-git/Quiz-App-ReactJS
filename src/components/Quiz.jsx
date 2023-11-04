import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import QuizeData from "../Data/QuizData";
import QuizResult from "../components/QuizResult";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();

    if (currentQuestion < QuizeData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);

      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    console.log("clickOption:", clickOption);
    console.log("Correct Answer:", QuizeData[currentQuestion].answer);
  
    if (clickOption === QuizeData[currentQuestion].answer) {
      console.log("Updating score...");
      setScore(score + 1);
    }
  };
  

  return (
    <React.Fragment>
      <div className="grid">
        <div className="col-6">
          <pre>{score}</pre>
          <h2 className="text-center">Quiz App</h2>

          <Card className="m-3 shadow-4 ">
            {showResult ? (
              <QuizResult score={score} totalScore={QuizeData.length} />
            ) : (
              <React.Fragment>
                <Card
                  className=" shadow-8 m-3 mb-2 text-center "
                  style={{ height: "100px" }}
                >
                  <p className="font-bold">
                    {currentQuestion + 1}. {QuizeData[currentQuestion].question}
                  </p>
                </Card>
                {QuizeData[currentQuestion].options.map((option, index) => {
                  return (
                    <Card
                      key={index}
                      className={`mb-2 m-3 text-center shadow-4 option-card ${
                        clickOption === index + 1 ? "clicked-option" : ""
                      } `}
                      style={{ height: "60px" }}
                      onClick={() => setClickedOption(index + 1)}
                    >
                      {option}
                    </Card>
                  );
                })}

                <div className="text-center mb-4">
                  <Button
                    label="Next"
                    className="mb-4"
                    onClick={changeQuestion}
                    severity="success"
                  />
                </div>
              </React.Fragment>
            )}
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Quiz;
