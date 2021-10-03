import React, { useState } from "react";
import words_api from "./words_api";


function restest_prep(set_done,set_test_words,no_of_words,set_current_word,
    set_current_user_word ,set_time_taken,set_start_timer){
    set_done(false);
    let arr = []
    for(let i=0;i<no_of_words;i++){
        const index = Math.floor(Math.random()*499); 
        arr.push(words_api[index])
    }
    set_test_words(arr);   
    set_current_word(0); 
    set_current_user_word(""); 
    set_time_taken(0); 
    set_start_timer(false); 

}

const Result=({set_done,set_test_words,no_of_words,set_current_word,
    set_current_user_word,time_taken,set_time_taken,set_start_timer})=>{
    const [result_wpm,set_result_wpm] = useState(Math.floor((no_of_words*60)/time_taken)); 

    return(
        <div className="result-div-outer">
            <div className="result-div">
                <span className="result-heading">RESULT:</span>
                <span className="result-description">Your typing speed is : <span className="wpm-speed"> {result_wpm}  </span> words per minute</span>
                <button onClick={()=>{
                    restest_prep(set_done,set_test_words,no_of_words,set_current_word,
                        set_current_user_word ,set_time_taken,set_start_timer)
                }} id="re-test-btn">Retest</button>
            </div>
        </div>
    )
}

export default Result