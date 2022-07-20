import { useEffect, useState } from "react";
import "./App.css";
import { Questions } from "./components/Questions";
import { Timer } from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeoOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who is the greatest athlete of all time?",
      answer: [
        {
          text: "Michael Jordan",
          correct: true,
        },
        {
          text: "Cristiano Ronaldo",
          correct: false,
        },
        {
          text: "Roger Federer",
          correct: false,
        },
        {
          text: "Sachin Tendulkar",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyrmaid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1000" },
    { id: 6, amount: "$ 2000" },
    { id: 7, amount: "$ 4000" },
    { id: 8, amount: "$ 8000" },
    { id: 9, amount: "$ 16000" },
    { id: 10, amount: "$ 32000" },
    { id: 11, amount: "$ 64000" },
    { id: 12, amount: "$ 12500" },
    { id: 13, amount: "$ 25000" },
    { id: 14, amount: "$ 50000" },
    { id: 15, amount: "$ 1000000" },
  ].reverse();
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyrmaid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyrmaid, questionNumber]);
  return (
    <div className="App">
      <div className="main">
        {timeoOut ? (
          <h1 className="endText">You have earned : {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  setTimeOut={setTimeOut}
                  questionNumber={questionNumber}
                />
              </div>
            </div>
            <div className="bottom">
              <Questions
                data={data}
                setTimeOut={setTimeOut}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyrmaid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="itemNumber">{m.id}</span>
              <span className="itemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
