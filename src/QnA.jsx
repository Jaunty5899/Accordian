import { useState } from "react";
import "./QnA.css";

export default function QnA() {
  const [show, setShow] = useState(0);
  return (
    <>
      <div
        className="questionElement"
        onClick={() => (show ? setShow(0) : setShow(1))}
      >
        What is roadmap.sh?
      </div>
      <div className={`answerElement ${show ? "showAnswer" : null}`}>
        roadmap.sh is a community effort to create learning paths, guides.
        project ideas and other similar content to help developers grow in their
        careers.
      </div>
    </>
  );
}
