import { useSelector } from "react-redux";
import "../assest/ResultCard.css";
import { hindidata, quizData } from "../../Data/QuizData";
import { useState, useEffect } from "react";

const ResultCard = () => {
  const [visible, setVisible] = useState(false);
  const languageselect = useSelector((state) => state.language.value);
  const language = languageselect ? quizData : hindidata;
  // const score = useSelector((state)=>(state.score.score))
  const answer = useSelector((state) => {
    return state.answer.answer;
  });

  let name = useSelector((state) => {
    return state.information.nameValue;
  });
  let surname = useSelector((state) => {
    return state.information.surnameValue;
  });
  const finalanswer = useSelector((state) => {
    return state.finalanswer.finalanswer;
  });
  console.log(finalanswer);
  let yourans = Object.values(finalanswer);
  // console.log(yourans);

  const sc = answer.reduce((acc, que, i) => {
    if (finalanswer[i + 1] === que.answer) acc += 1;
    return acc;
  }, 0);
  // console.log({ sc });
  // console.log(items);
  // console.log(answer);

  const right = yourans.filter((right, num) => right !== language[num].answer);
  console.log(right);

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();

      window.location.href = "/";
    };

    window.history.pushState(null,window.location.href);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  return (
    <div>
      <div className="score-container">
        <p id="paragraph">
          Congratulation! {surname} {name} you are successfully completed your
          exam.
        </p>
        <p id="score">
          Your Score is:
          <span id="scorenumber">
            {sc}/{language.length}
          </span>
        </p>
      </div>
      <button
        id="view"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        View Answer
      </button>
      {visible && (
        <div className="maincontent">
          {language.map((item, i) => {
            return (
              <div key={i}>
                <section className="mainsection">
                  <div>
                    <span>{i + 1}.</span>
                    <span id="question">{item.question}</span>
                  </div>
                  <div className="showoption">
                    {item.options.map((option, index) => {
                      return (
                        <button
                          key={index}
                          className={`btn ${
                            language[i].answer === option
                              ? "green"
                              : yourans[i] === option
                              ? "red"
                              : ""
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {/* <div>
                    { <p id="correct">CORRECT ANSWER: {item.answer}</p> }
                    <p id="ownans">YOUR ANSWER: {yourans[i]}</p>
                  </div> */}
                </section>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default ResultCard;
