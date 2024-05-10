import { v4 as uuidv4 } from 'uuid';
import { IAnswer, IData } from '../interfaces';

export function formatTextToQuestions(inputString: string): IData[] {
  const regex = /(\d+\.\d*)\s?(.*?)(?=\d+\.|$)/gs;
  const matchesData: string[] | null = inputString.match(regex);

  return (
    matchesData?.map((text: string) => {
      const lines: string[] = text
        .split('\n')
        .filter((line: string) => line.trim() !== '');
      const answers: IAnswer[] = [];
      const partOfQuestion: string[] = [];

      for (const line of lines) {
        if (/^[A-E]\./.test(line)) {
          const isCorrectAnswer = line.includes('A.');
          const answer = line
            .replace(/^[A-E]\.\s*/, '')
            .replace(/\*/, '')
            .trim();
          answers.push({ isCorrectAnswer, answer, id: uuidv4() });
        } else {
          if (/\d+\./.test(line)) {
            partOfQuestion.push(line.replace(/\d+\./, '').trim());
          } else {
            partOfQuestion.push(line);
          }
        }
      }

      return { question: partOfQuestion.join(' '), answers, id: uuidv4() };
    }) || []
  );
}

export const shuffle = (array: IData[]): IData[] => {
  return array
    .sort(() => Math.random() - 0.5)
    .map((item) => ({
      ...item,
      answers: item.answers.sort(() => Math.random() - 0.5),
    }));
};
