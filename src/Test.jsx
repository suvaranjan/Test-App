import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useRead,
  useTimerStore,
  useResultStore,
  useTheme,
  useSetting,
} from "./store/zustand";
import { cspArray } from "./CSP";
import { iotArray } from "./IOT";
import {
  cspWeek1Ass,
  cspWeek2Ass,
  cspWeek3Ass,
  cspWeek4Ass,
  cspWeek5Ass,
  cspWeek6Ass,
  cspWeek7Ass,
  cspWeek8Ass,
  cspWeek9Ass,
  cspWeek10Ass,
} from "./CSP/CSPComplete";
import {
  iotWeek1Ass,
  iotWeek2Ass,
  iotWeek3Ass,
  iotWeek4Ass,
  iotWeek5Ass,
  iotWeek6Ass,
  iotWeek7Ass,
  iotWeek8Ass,
  iotWeek9Ass,
  iotWeek10Ass,
} from "./IOT/IOTComplete";
import Loading from "./Loading";

function Test() {
  const { isDarkMode } = useTheme();
  const { subject, week } = useRead();
  const { timer } = useTimerStore();
  const { correctMarkValue, percentage } = useSetting();
  const navigate = useNavigate();

  const [shuffledQuiz, setShuffledQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timer * 60);
  const [userAttempts, setUserAttempts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const {
    totalQuestions,
    setStatus,
    setTotalQuestions,
    setStoreAttempts,
    setCorrect,
    setMarkSecured,
    setTotalmark,
    setUserPercentage,
  } = useResultStore();

  const IOTweekArrays = {
    week1: iotWeek1Ass,
    week2: iotWeek2Ass,
    week3: iotWeek3Ass,
    week4: iotWeek4Ass,
    week5: iotWeek5Ass,
    week6: iotWeek6Ass,
    week7: iotWeek7Ass,
    week8: iotWeek8Ass,
    week9: iotWeek9Ass,
    week10: iotWeek10Ass,
    all: iotArray,
  };

  const CSPweekArrays = {
    week1: cspWeek1Ass,
    week2: cspWeek2Ass,
    week3: cspWeek3Ass,
    week4: cspWeek4Ass,
    week5: cspWeek5Ass,
    week6: cspWeek6Ass,
    week7: cspWeek7Ass,
    week8: cspWeek8Ass,
    week9: cspWeek9Ass,
    week10: cspWeek10Ass,
    all: cspArray,
  };

  const quizArray =
    subject === "IOT"
      ? IOTweekArrays[week] || IOTweekArrays.all
      : CSPweekArrays[week] || CSPweekArrays.all;

  useEffect(() => {
    // setTotalQuestions(quizArray.length);
    const shuffled = shuffleArray(quizArray.slice(0, totalQuestions));
    setShuffledQuiz(shuffled);
    setCurrentQuestion(0);
    setSelectedOptions(Array(shuffled.length).fill(""));
    setScore(0);
    setAttempts(0);
    setUserAttempts([]);
    setTimeLeft(timer * 60);
  }, [totalQuestions, timer, quizArray]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleTimeUp();
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft, timer, quizArray]);

  const handleTimeUp = () => {
    confirmSubmit();
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleOptionChange = (event) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = event.target.value;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    if (
      selectedOptions[currentQuestion] === shuffledQuiz[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    const newAttempts = selectedOptions.filter(
      (option) => option !== ""
    ).length;
    setAttempts(newAttempts);

    if (currentQuestion < shuffledQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmitQuiz = () => {
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false);
    localStorage.clear();
    const userAttemptsArray = shuffledQuiz
      .map((question, index) => {
        const userSelectOption = selectedOptions[index];
        const isCorrect = userSelectOption === question.answer;
        if (userSelectOption !== "") {
          return {
            question: question.question,
            options: question.options,
            userSelectOption: userSelectOption,
            answer: question.answer,
            isCorrect: isCorrect,
          };
        }
        return null;
      })
      .filter((attempt) => attempt !== null);

    const correctAnswers = userAttemptsArray.filter(
      (attempt) => attempt.isCorrect
    ).length;
    const totalQuestionsAttempted = userAttemptsArray.length;

    const resultObject = {
      attempts: totalQuestionsAttempted,
      correct: correctAnswers,
      totalQuestions: totalQuestions,
    };

    const userMarks = correctAnswers * correctMarkValue;
    const totalMarks = totalQuestions * 2;
    const passingScore = (totalMarks * percentage) / 100;
    const userStatus = userMarks >= passingScore;
    const testTotalMark = totalQuestions * correctMarkValue;
    const yourPercentage = (userMarks / testTotalMark) * 100;

    setStoreAttempts(totalQuestionsAttempted);
    setCorrect(correctAnswers);
    setTotalQuestions(totalQuestions);
    setMarkSecured(userMarks);
    setStatus(userStatus);
    setTotalmark(testTotalMark);
    setUserPercentage(yourPercentage.toFixed(1));
    navigate("/result", { state: { userAttemptsArray } });
  };

  const isLastQuestion = currentQuestion === shuffledQuiz.length - 1;

  if (shuffledQuiz.length === 0) {
    return <Loading />;
  }

  const modalJsx = (
    <>
      <div
        className="modal-wrapper"
        key="wrapper"
        style={isDarkMode ? { backgroundColor: "rgba(18, 18, 18, 0.9)" } : null}
      ></div>
      <div
        className="modal-container"
        key="container"
        style={
          isDarkMode
            ? {
                backgroundColor: "#151717",
                color: "#b2b2bf",
                border: "1px solid #4a4a4f",
              }
            : null
        }
      >
        <div className="modalPara">
          <p>Confirm Submission</p>
        </div>

        <div className="modalBtns">
          <button className="bg-none" onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button className="bg-green" onClick={() => confirmSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div
        className="container"
        style={
          isDarkMode
            ? {
                backgroundColor: "#151717",
                color: "#FAFAFA",
                border: "1px solid #4a4a4f",
              }
            : null
        }
      >
        <div className="main">
          <div className="first">
            <div className="box1 custom">
              <h1>
                {subject === "IOT"
                  ? "Internet of Things"
                  : "Cyber Security and Privacy"}
              </h1>
              <p>
                {week === "all" ? "All Weeks" : week.replace(/(\d+)/, " $1")}
              </p>
            </div>
            <div
              className="progress"
              style={isDarkMode ? { color: "#b2b2bf" } : null}
            >
              <div>Total: {totalQuestions}</div>
              <div>Attempts: {attempts}</div>
              <div>Timer : {formatTime(timeLeft)}</div>
            </div>
          </div>

          <div className="question-div">
            <h1 className="question-h1">
              {`${currentQuestion + 1}. `}
              {shuffledQuiz[currentQuestion].question}
            </h1>
          </div>

          <div className="options-div">
            {Object.entries(shuffledQuiz[currentQuestion].options).map(
              ([key, option]) => (
                <div key={key} className="option-div2">
                  <div className="option-input">
                    <input
                      type="radio"
                      id={`option${key}`}
                      name="options"
                      value={option}
                      checked={selectedOptions[currentQuestion] === option}
                      onChange={handleOptionChange}
                    />
                  </div>
                  <div className="option-label">
                    <label
                      htmlFor={`option${key}`}
                      style={isDarkMode ? { color: "#b2b2bf" } : null}
                    >
                      {option}
                    </label>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="submit-div">
            {currentQuestion > 0 && (
              <button
                className={isDarkMode ? "bg-none-dark" : "bg-none"}
                onClick={handlePrevQuestion}
              >
                Prev
              </button>
            )}
            <button onClick={handleSubmitQuiz}>Submit</button>
            {!isLastQuestion && (
              <button
                onClick={handleNextQuestion}
                className={isDarkMode ? "bg-none-dark" : "bg-none"}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      {showModal ? modalJsx : null}
    </>
  );
}

export default Test;
