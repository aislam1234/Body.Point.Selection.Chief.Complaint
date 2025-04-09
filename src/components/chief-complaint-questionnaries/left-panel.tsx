import React from "react";
import TabSection from "./tab-section";
import QuestionBox from "./question-box";
import { QuestionAnswer } from "./body-point-answer-mapper";

export interface IQuestion {
  id: string;
  question: string;
  options: string[];
}

export interface IBodyPoint {
  id: string;
  key: string;
  label: string;
  regions: number[];
  pathData: string;
  questions: IQuestion[];
}

interface Props {
  selected: string;
  options: string[];
  bodyPoints: IBodyPoint[];
  currentBodyPointIndex: number;
  answer: QuestionAnswer[];
  setAnswer: (value: QuestionAnswer[]) => void;
  setSelected: (value: string) => void;
  navigateToNextBodyPoint: () => void;
}

const LeftPanel = ({ 
  selected, 
  options, 
  bodyPoints, 
  currentBodyPointIndex,
  answer,
  setAnswer,
  setSelected, 
  navigateToNextBodyPoint
}: Props) => {
  return (
    <div style={{ width: "65%", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* <TabSection bodyPoints={bodyPoints}/> */}
      <QuestionBox
        selected={selected}
        options={options}
        currentBodyPoint={bodyPoints[currentBodyPointIndex]}
        isCurrentBodyPointIsTheLast={currentBodyPointIndex === bodyPoints?.length - 1}
        nextBodyPointLabel={bodyPoints[currentBodyPointIndex + 1]?.label || ""}
        answer={answer}
        setAnswer={setAnswer}
        setSelected={setSelected}
        navigateToNextBodyPoint={navigateToNextBodyPoint}
      />
    </div>
  )
};

export default LeftPanel;
