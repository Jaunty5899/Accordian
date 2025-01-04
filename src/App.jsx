import { useState } from "react";
import "./App.css";
import QnA from "./QnA";

const data = [
  {
    question: "What is the capital of France?",
    answer:
      "The capital of France is Paris, a vibrant and historic city located on the banks of the Seine River. Paris is renowned for its iconic landmarks such as the Eiffel Tower, the Louvre Museum, Notre-Dame Cathedral, and the Arc de Triomphe. It is a global center of art, fashion, gastronomy, and culture, attracting millions of visitors from around the world each year.",
  },
  {
    question: "How many days are there in a week?",
    answer:
      "There are 7 days in a week. The days of the week are Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday. This weekly cycle has been used for centuries, with the days named after various celestial bodies and deities in different cultures. The 7-day week is a widely recognized and used system for organizing time and scheduling activities in modern society.",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer:
      "The largest planet in our solar system is Jupiter, a massive gas giant that is over 11 times the diameter of Earth. Jupiter is primarily composed of hydrogen and helium, with a swirling storm known as the Great Red Spot raging in its atmosphere. It has 79 confirmed moons, including the four largest, known as the Galilean moons. Jupiter's immense size and powerful gravitational field play a significant role in shaping the dynamics of the entire solar system.",
  },
];

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState();

  function setter(selectedButton) {
    setSelectedQuestion(selectedButton);
  }

  return (
    <div className="container">
      {data.map((e) => (
        <QnA
          Data={e}
          isSelected={selectedQuestion == e.question}
          onSelect={() => setter(e.question)}
        />
      ))}
    </div>
  );
}

export default App;
