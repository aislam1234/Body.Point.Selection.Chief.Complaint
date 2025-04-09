"use client";

import React, { useState } from "react";
import LayoutContainer from "./layout-container";
import LeftPanel from "./left-panel";
import RightPanel from "./right-panel";
import { BodyPointAnswerMapper, QuestionAnswer } from "./body-point-answer-mapper";

const selectedBodyPoints = [
  {
    "id": "front left ankle",
    "key": "front_left_ankle",
    "label": "Front Left Ankle",
    "regions": [
      4
    ],
    "pathData": "M86.8079 399.336C89.8601 399.336 92.3345 396.862 92.3345 393.81C92.3345 390.758 89.8601 388.283 86.8079 388.283C83.7556 388.283 81.2812 390.758 81.2812 393.81C81.2812 396.862 83.7556 399.336 86.8079 399.336Z",
    "questions": [
      { "id": "1", "question": "How does the pain feel?", "options": ["Sharp", "Dull", "Burning"] },
      { "id": "2", "question": "How have these symptoms impacted your daily activities?", "options": ["Mild", "Moderate", "Severe"] },
      { "id": "3", "question": "On a scale of 0-10, what is the pain level?", "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      { "id": "4", "question": "Does anything trigger or relieve the pain?", "options": ["Medicine", "Therapy", "None"] }
    ]    
  },
  {
    "id": "front left interphalangeal",
    "key": "front_left_interphalangeal",
    "label": "Front Left Interphalangeal",
    "regions": [
      4
    ],
    "pathData": "M88.8079 426.336C91.8601 426.336 94.3345 423.862 94.3345 420.81C94.3345 417.758 91.8601 415.283 88.8079 415.283C85.7556 415.283 83.2812 417.758 83.2812 420.81C83.2812 423.862 85.7556 426.336 88.8079 426.336Z",
    "questions": [
      { "id": "5", "question": "How does the pain feel?", "options": ["Sharp", "Dull", "Burning"] },
      { "id": "6", "question": "How have these symptoms impacted your daily activities?", "options": ["Mild", "Moderate", "Severe"] },
      { "id": "7", "question": "On a scale of 0-10, what is the pain level?", "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      { "id": "8", "question": "Does anything trigger or relieve the pain?", "options": ["Medicine", "Therapy", "None"] }
    ]  
    
  },
  {
    "id": "front right interphalangeal",
    "key": "front_right_interphalangeal",
    "label": "Front Right Interphalangeal",
    "regions": [
      4
    ],
    "pathData": "M49.8079 426.336C52.8601 426.336 55.3345 423.862 55.3345 420.81C55.3345 417.758 52.8601 415.283 49.8079 415.283C46.7556 415.283 44.2812 417.758 44.2812 420.81C44.2812 423.862 46.7556 426.336 49.8079 426.336Z",
    "questions": [
      { "id": "9", "question": "How does the pain feel?", "options": ["Sharp", "Dull", "Burning"] },
      { "id": "10", "question": "How have these symptoms impacted your daily activities?", "options": ["Mild", "Moderate", "Severe"] },
      { "id": "11", "question": "On a scale of 0-10, what is the pain level?", "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
      { "id": "12", "question": "Does anything trigger or relieve the pain?", "options": ["Medicine", "Therapy", "None"] }
    ] 
  }
];

const ChiefComplaintQuestionnaire: React.FC = () => {
  const [selected, setSelected] = useState<string>("Less than 3 years");

  const options = ["Less than 3 years", "3 Months", "6 Months", "1 Year"];

  const [currentBodyPointIndex, setCurrentBodyPointIndex] = useState(0);
  const [bodyPoints, setBodyPoints]
    = useState(selectedBodyPoints);

  const [answer, setAnswer] = useState<QuestionAnswer[]>(BodyPointAnswerMapper.generateInitialAnswers(selectedBodyPoints));

  const navigateToNextBodyPoint = () => {
    if (currentBodyPointIndex < bodyPoints.length - 1) {
      setCurrentBodyPointIndex(currentBodyPointIndex + 1);
    }
  };

  console.log(answer);

  return (
    <LayoutContainer>
      <LeftPanel
        selected={selected}
        setSelected={setSelected}
        options={options}
        currentBodyPointIndex={currentBodyPointIndex}
        bodyPoints={bodyPoints}
        answer={answer}
        navigateToNextBodyPoint={navigateToNextBodyPoint}
        setAnswer={setAnswer}
      />
      <RightPanel />
    </LayoutContainer>
  );
};

export default ChiefComplaintQuestionnaire;
