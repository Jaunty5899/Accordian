import { useState } from "react";
import "./QnA.css";

export default function QnA({ Data }) {
  const [show, setShow] = useState(0);
  return (
    <>
      <div
        className="questionElement"
        onClick={() => (show ? setShow(0) : setShow(1))}
      >
        {Data.question}
      </div>
      <div className={`answerElement ${show ? "showAnswer" : null}`}>
        {Data.answer}
      </div>
    </>
  );
}
