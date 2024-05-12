import { useState } from 'react';
import { IAnswer } from '../../interfaces';
import { AnswerListItem } from '../AnswerListItem';

type AnswerListType = { questionId: string; answerListData: IAnswer[] };

export const AnswerList = ({ questionId, answerListData }: AnswerListType) => {
  const [isAnswerSelected, setIsAnswerSelected] = useState<boolean>(false);

  return (
    <ol className='answer-list-container'>
      {answerListData.map((answer: IAnswer) => (
        <li key={answer.id}>
          <AnswerListItem
            questionId={questionId}
            answer={answer}
            setIsAnswerSelected={setIsAnswerSelected}
            isAnswerSelected={isAnswerSelected}
          />
        </li>
      ))}
    </ol>
  );
};
