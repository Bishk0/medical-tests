import { QuestionList } from './components';
import { biochemistryTestsData } from './data/biochemistryTestsData';
import { shuffle } from './utils';

function App() {
  const shuffleData = shuffle(biochemistryTestsData);
  
  return (
    <div className='container'>
      <QuestionList questionListData={shuffleData} />
    </div>
  );
}

export default App;
