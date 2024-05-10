import { IAnswer } from '../../interfaces';
import { AnswerList } from '../AnswerList';

type QuestionListItemType = {
  questionId: string;
  question: string;
  questionNumber: number;
  answers: IAnswer[];
};

export const QuestionListItem = ({
  questionId,
  question,
  answers,
  questionNumber,
}: QuestionListItemType) => {
  return (
    <>
      <div>
        <h4>
          {questionNumber}. {question}
        </h4>
      </div>
      <AnswerList questionId={questionId} answerListData={answers} />
      <div className='horizontal-line' />
    </>
  );
};
