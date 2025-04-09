import React from "react";
import OptionButton from "./option-button";
import SaveContinueButton from "./save-continue-button";
import { IBodyPoint } from "./left-panel";

interface Props {
  selected: string;
  setSelected: (value: string) => void;
  options: string[];
  currentBodyPoint: IBodyPoint;
  navigateToNextBodyPoint: () => void;
  isCurrentBodyPointIsTheLast?: boolean;
  nextBodyPointLabel?: string;
}

const QuestionBox = ({
  selected,
  setSelected,
  options,
  currentBodyPoint,
  navigateToNextBodyPoint,
  isCurrentBodyPointIsTheLast = false,
  nextBodyPointLabel = "",
}: Props) => {
  return (
    <div className="question-box">
      <div>
        <div className="header">
          <span className="title">Answering {currentBodyPoint?.label}</span>
          {!isCurrentBodyPointIsTheLast && (
            <button className="skip-button" onClick={navigateToNextBodyPoint}>
              Skip to {nextBodyPointLabel}
            </button>
          )}
        </div>

        <hr className="divider" />

        <div className="question-area">
          <h3 className="question">When did the pain start?</h3>

          <div className="options-wrapper">
            <div className="options-grid">
              {options.map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={selected === opt}
                  onClick={() => setSelected(opt)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <SaveContinueButton />
      </div>

      <style jsx>{`
        .question-box {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
          border-top: 2px solid #f5f5f5;
          margin-bottom: 1.5rem;
        }

        .question-area {
          background-color:rgb(255, 255, 255);
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
        }

        .question {
          margin-bottom: 1.5rem;
          font-size: 24px;
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
          .question-area {
            padding: 1rem;
          }

          .question {
            font-size: 20px;
          }

          .title {
            font-size: 18px;
          }

          .skip-button {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuestionBox;