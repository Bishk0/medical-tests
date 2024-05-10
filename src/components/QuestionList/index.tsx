import { IData } from '../../interfaces';
import { QuestionListItem } from '../QuestionListItem';

type ListType = { questionListData: IData[] };

export const QuestionList = ({ questionListData }: ListType) => {
  return questionListData.map((item, index) => (
    <QuestionListItem
      key={item.id}
      question={item.question}
      answers={item.answers}
      questionNumber={index + 1}
      questionId={item.id}
    />
  ));
};
