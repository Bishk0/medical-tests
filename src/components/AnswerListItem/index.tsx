import { useState } from 'react';
import { IAnswer } from '../../interfaces';

type AnswerListItemType = {
  questionId: string;
  answer: IAnswer;
  setIsAnswerSelected: (answer: boolean) => void;
  isAnswerSelected: boolean;
};

export const AnswerListItem = ({
  questionId,
  answer,
  setIsAnswerSelected,
  isAnswerSelected,
}: AnswerListItemType) => {
  const [isCurrentSelected, setIsCurrentSelected] = useState<boolean>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAnswerSelected(true);
    setIsCurrentSelected(e.target.checked);
  };

  const highlightAnswer = (): string => {
    if (isAnswerSelected) {
      if (answer.isCorrectAnswer) {
        return 'rgb(102, 204, 102)';
      } else if (isCurrentSelected) {
        return 'rgb(255, 102, 102)';
      }
    }

    return 'transparent';
  };

  return (
    <label style={{ backgroundColor: highlightAnswer(), borderRadius: '4px' }}>
      <input
        type='radio'
        name={questionId}
        onChange={onChange}
        disabled={isAnswerSelected}
        hidden
      />
      <span>{answer.answer}</span>
    </label>
  );
};
