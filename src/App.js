import react, { useState } from 'react'; 
import Body from './components/body';
import styles from "./styles/style.css"
import Result from './components/result';
import words_api from './components/words_api';

const App=()=>{
  const[done,set_done] = useState(false); 
  const [no_of_words,set_no_of_words] = useState(40)
 
  let arr = []
  for(let i=0;i<no_of_words;i++){
      const index = Math.floor(Math.random()*499); 
      arr.push(words_api[index])
  }
  const [test_words,set_test_words] = useState(arr); 
  const[current_word,set_current_word] = useState(0); 
  const [current_user_word,set_current_user_word] = useState("");
  const[time_taken,set_time_taken] = useState(0);
  const[start_timer,set_start_timer] = useState(false); 
 
  return(
    <>
      <h1 className="heading">Typing Test</h1>
      <div className="test-area">
        {!done && <Body set_done={set_done} no_of_words={no_of_words}  
        test_words={test_words} current_word={current_word}
        set_current_word={set_current_word} current_user_word={current_user_word}
        set_current_user_word={set_current_user_word} set_time_taken={set_time_taken} 
        time_taken={time_taken} start_timer={start_timer} set_start_timer={set_start_timer} /> }
      </div>
      <div className="result-area">
          {done && <Result set_done={set_done} set_test_words={set_test_words}
          no_of_words={no_of_words} set_current_user_word={set_current_user_word}
          set_current_word={set_current_word}  set_time_taken={set_time_taken} 
          time_taken={time_taken} set_start_timer={set_start_timer} />}
      </div>
      
    </>
  )
}

export default App 