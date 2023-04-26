import "../assest/Quiz.css";
import { hindidata,quizData } from "../../Data/QuizData";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AnswerShow } from "../slice/AnswerSlice";
import { finalanswershow } from "../slice/FinalAnswerSlice";

const Quiz = () => {
  const [clickOption, setClickOption] = useState(0);
  const dispatch = useDispatch();
  const languageselect = useSelector((state) => state.language.value);
  const language = languageselect ? quizData : hindidata;
  let { quizID } = useParams();
  let navigate = useNavigate();
  // const finalanswer = useSelector((state) => {
  //   return state.finalanswer.finalanswer;
  // });
  // let yourans = Object.values(finalanswer);
  // console.log(yourans);

  // useEffect(() => {
  //   console.log(score);
  //   dispatch(UpdateScore(score));
  // }, [score]);

  const nextQuestion = () => {
    if (quizID < language.length) {
      navigate(`/quiz/${Number(quizID) + 1}`);
    }
    // setClickOption(0);
    dispatch(finalanswershow({ i: quizID, value: clickOption }));
  };

  const previousQuestion = (i) => {
    if (quizID > language.length - 4) {
      navigate(`/quiz/${Number(quizID) - 1}`);
    }
  };
  function firstQuestion() {
    navigate('/quiz/1');
  }
  function secondQuestion() {
    navigate('/quiz/2');
  }
  function thirdQuestion() {
    navigate('/quiz/3');
  }
  function forthQuestion() {
    navigate("/quiz/4");
  }
  function fifthQuestion() {
    navigate("/quiz/5");
  }

  //console.log(clickOption,{i:quizID,value:clickOption})
  return (
    <div className="maincontainer">
      <div>
        <p className="heading">Quiz APP</p>
        <div className="container">
          <div className="question">
            <span className="questionnumber">{quizID}.</span>
            <span>{language[quizID - 1].question}</span>
          </div>
          <div className="option">
            {language[quizID - 1].options.map((option, i) => {
              return (
                <button
                  key={i}
                  className={`optionbtn ${
                    clickOption === option ? "checked" : null
                  }`}
                  onClick={() => {
                    setClickOption(option);
                    console.log(clickOption);
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {Number(quizID) !== language.length && (
            <input
              type="button"
              value="Next"
              className="button"
              onClick={nextQuestion}
            />
          )}
          {Number(quizID) === language.length && (
            <input
              type="button"
              value="Submit"
              className="button"
              onClick={() => {
                dispatch(AnswerShow(language));
                navigate("/result");
                dispatch(finalanswershow({ i: quizID, value: clickOption }))
              }}
            />
          )}

          {Number(quizID) !== language.length - 4 && (
            <input
              type="button"
              value="Previous"
              className="button"
              onClick={previousQuestion}
            />
          )}
          <div className="direct">
            <button onClick={firstQuestion}>1</button>
            <button onClick={secondQuestion}>2</button>
            <button onClick={thirdQuestion}>3</button>
            <button onClick={forthQuestion}>4</button>
            <button onClick={fifthQuestion}>5</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
