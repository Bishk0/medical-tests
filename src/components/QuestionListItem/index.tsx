import { IAnswer } from '../../interfaces';
import { AnswerList } from '../AnswerList';

type QuestionListItemType = {
  questionId: string;
  question: string;
  answers: IAnswer[];
};

export const QuestionListItem = ({
  questionId,
  question,
  answers,
}: QuestionListItemType) => {
  return (
    <>
      <h4>{question}</h4>
      <AnswerList questionId={questionId} answerListData={answers} />
      <div className='horizontal-line' />
    </>
  );
};
