import "./QnA.css";

export default function QnA({ Data, onSelect, isSelected }) {
  return (
    <>
      <div className="questionElement" onClick={onSelect}>
        {Data.question}
      </div>
      <div className={`answerElement ${isSelected && "showAnswer"}`}>
        {Data.answer}
      </div>
    </>
  );
}
