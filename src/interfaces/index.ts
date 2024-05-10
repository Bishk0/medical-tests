export interface IData {
  id: string,
  question: string,
  answers: IAnswer[],
}

export interface IAnswer {
  id: string,
  isCorrectAnswer: boolean,
  answer: string,
}
