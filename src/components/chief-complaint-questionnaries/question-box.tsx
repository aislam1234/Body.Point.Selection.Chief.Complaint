import React, { useEffect, useRef, useState } from "react";
import OptionButton from "./option-button";
import SaveContinueButton from "./save-continue-button";
import { IBodyPoint } from "./left-panel";
import { QuestionAnswer } from "./body-point-answer-mapper";

interface Props {
  selected: string;
  setSelected: (value: string) => void;
  options: string[];
  currentBodyPoint: IBodyPoint;
  isCurrentBodyPointIsTheLast?: boolean;
  nextBodyPointLabel?: string;
  answer: QuestionAnswer[];
  setAnswer: (value: QuestionAnswer[]) => void;
  navigateToNextBodyPoint: () => void;
}

const QuestionBox = ({
  currentBodyPoint,
  navigateToNextBodyPoint,
  isCurrentBodyPointIsTheLast = false,
  nextBodyPointLabel = "",
  answer,
  setAnswer,
}: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const currentQuestion = currentBodyPoint.questions[currentQuestionIndex];

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [currentBodyPoint]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentQuestionIndex]);

  const handleSelect = (id: string, selectedAnswer: string) => {
    const newAnswer: QuestionAnswer = {
      painLocationLabel: currentBodyPoint.label,
      questionId: id,
      question: currentQuestion.question,
      answer: selectedAnswer,
    };

    const updatedAnswers = [...answer];
    const existingIndex = updatedAnswers.findIndex(
      (a) => a.questionId === id && a.painLocationLabel === currentBodyPoint.label
    );

    if (existingIndex !== -1) {
      updatedAnswers[existingIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }

    setAnswer(updatedAnswers);

    if (currentQuestionIndex < currentBodyPoint.questions.length - 1) {
      setTimeout(() => setCurrentQuestionIndex((prev) => Math.max(prev + 1, currentQuestionIndex + 1)), 400);
    }
  };

  const handleEdit = (id: string) => {
    const index = currentBodyPoint.questions.findIndex((q) => q.id === `${id}`);
    
    if (index !== -1) {
      setCurrentQuestionIndex(index);
    }
  };

  const saveAndContinueHandler = () => {
    if (isCurrentBodyPointIsTheLast) {
      console.log("Saving data:", answer);
    } else {
      navigateToNextBodyPoint();
    }
  };

  return (
    <div className="question-box">
      <div className="header">
        <span className="title">Answering {currentBodyPoint.label}</span>
        {!isCurrentBodyPointIsTheLast && (
          <button className="skip-button" onClick={navigateToNextBodyPoint}>
            Skip to {nextBodyPointLabel}
          </button>
        )}
      </div>

      <hr className="divider" />

      <div className="chat-history">
        {currentBodyPoint.questions.map((q, index) => {
          const answered = answer.find(
            (a) => a.questionId === q.id && a.painLocationLabel === currentBodyPoint.label
          );

          // Show all answered questions and allow editing
          const shouldRender =
            index <= currentQuestionIndex || answered?.answer;

          if (!shouldRender) return null;

          return (
            <div key={q.id} className="chat-bubble-row">
              <div className="question-text">{q.question}</div>
              {answered?.answer ? (
                <div className="user-answer">
                  <span className="answer-bubble">{answered.answer}</span>
                  <button className="edit-button" onClick={() => handleEdit(q.id)}>
                    Edit
                  </button>
                </div>
              ) : (
                <div className="options-wrapper">
                  <div className="options-grid">
                    {q.options.map((opt) => (
                      <OptionButton
                        key={opt}
                        label={opt}
                        selected={false}
                        onClick={() => handleSelect(q.id, opt)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div ref={chatEndRef} />
      </div>

      <div className="footer">
        <SaveContinueButton
          isCurrentBodyPointIsTheLast={isCurrentBodyPointIsTheLast}
          saveAndContinueHandler={saveAndContinueHandler}
        />
      </div>

      <style jsx>{`
        .question-box {
          background: white;
          padding: 1rem 1rem 0 1rem;
          border-radius: 8px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          overflow: hidden;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .title {
          font-weight: 700;
          font-size: 20px;
        }

        .skip-button {
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          color: #1d3f77;
          text-decoration: none;
          font-size: 18px;
          cursor: pointer;
        }

        .divider {
          border: none;
          border-top: 2px solid #dcdcdc;
          margin-bottom: 1rem;
        }

        .chat-history {
          flex-grow: 1;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .chat-bubble-row {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .question-text {
          font-size: 20px;
          color: #333;
          text-align: left;
          margin-bottom: 1rem;
        }

        .user-answer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .answer-bubble {
          background-color: #1d3f77;
          color: white;
          border-radius: 20px;
          padding: 0.5rem 1rem;
          font-size: 16px;
          display: inline-block;
          max-width: 70%;
          text-align: left;
        }

        .edit-button {
          background: none;
          border: none;
          color: #1d3f77;
          margin-left: 10px;
          cursor: pointer;
          font-size: 14px;
          text-decoration: underline;
        }

        .options-wrapper {
          display: flex;
          justify-content: center;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(3, 220px);
          gap: 1rem;
        }

        .footer {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        @media (max-width: 1250px) {
          .options-grid {
            grid-template-columns: repeat(2, 220px);
          }
        }

        @media (max-width: 890px) {
          .options-grid {
            grid-template-columns: repeat(1, 220px);
          }
        }

        @media (max-width: 600px) {
          .question-text {
            font-size: 18px;
          }

          .answer-bubble {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuestionBox;
