import React,{useState} from 'react';
import FlashcardList from './FlashcardList';
import './app.css';


function App() {

    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)  


  return (
   <h1>
     <FlashcardList  flashcards={flashcards}/>
   </h1>
  );
}


const SAMPLE_FLASHCARDS = [
  {
      id:1,
      question:'What is 2+2?',
      answer :'4',
      options:[
          '2','3','4','5'
      ]   
  },
  {
      id:1,
      question:'Question 2?',
      answer :'Meme',
      options:[
          'Answer','Answer','Answer','Answer'
      ]   
  }
 
]



export default App;
