import { IData } from '../../interfaces';
import { QuestionListItem } from '../QuestionListItem';

type ListType = { questionListData: IData[] };

export const QuestionList = ({ questionListData }: ListType) => {
  return (
    <ol className='question-list-container'>
      {questionListData.map((item) => (
        <li key={item.id}>
          <QuestionListItem
            question={item.question}
            answers={item.answers}
            questionId={item.id}
          />
        </li>
      ))}
    </ol>
  );
};
