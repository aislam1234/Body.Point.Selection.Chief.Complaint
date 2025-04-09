"use client";

import React, { useState } from "react";
import LayoutContainer from "./layout-container";
import LeftPanel from "./left-panel";
import RightPanel from "./right-panel";
import { BodyPointAnswerMapper } from "./body-point-answer-mapper";

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
      {
        "id": "1",
        "question": "When did the pain start?",
        "options": ["Today", "Yesterday", "Last Week", "Long Time Ago"]
      },
      {
        "id": "2",
        "question": "How intense is the pain?",
        "options": ["Mild", "Moderate", "Severe", "Unbearable"]
      },
      {
        "id": "3",
        "question": "Does it affect mobility?",
        "options": ["Yes", "No", "Sometimes", "Only during activity"]
      }
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
      {
        "id": "1",
        "question": "When did the pain start?",
        "options": ["Today", "Yesterday", "Last Week", "Long Time Ago"]
      },
      {
        "id": "2",
        "question": "How intense is the pain?",
        "options": ["Mild", "Moderate", "Severe", "Unbearable"]
      },
      {
        "id": "3",
        "question": "Does it affect mobility?",
        "options": ["Yes", "No", "Sometimes", "Only during activity"]
      }
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
      {
        "id": "1",
        "question": "When did the pain start?",
        "options": ["Today", "Yesterday", "Last Week", "Long Time Ago"]
      },
      {
        "id": "2",
        "question": "How intense is the pain?",
        "options": ["Mild", "Moderate", "Severe", "Unbearable"]
      },
      {
        "id": "3",
        "question": "Does it affect mobility?",
        "options": ["Yes", "No", "Sometimes", "Only during activity"]
      }
    ]
  }
];

const ChiefComplaintQuestionnaire: React.FC = () => {
  const [selected, setSelected] = useState<string>("Less than 3 years");

  const options = ["Less than 3 years", "3 Months", "6 Months", "1 Year"];

  const [currentBodyPointIndex, setCurrentBodyPointIndex] = useState(0);
  const [bodyPoints, setBodyPoints]
    = useState(selectedBodyPoints);

  const [answer, setAnswer] = useState(BodyPointAnswerMapper.generateInitialAnswers(selectedBodyPoints));

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
        navigateToNextBodyPoint={navigateToNextBodyPoint}
      />
      <RightPanel />
    </LayoutContainer>
  );
};

export default ChiefComplaintQuestionnaire;
