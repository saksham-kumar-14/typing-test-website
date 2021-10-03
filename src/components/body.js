import React, {useEffect, useState} from 'react'; 

function is_valid(test_words, current_word, current_user_word,set_current_word,
    no_of_words,set_current_user_word,e,set_done,set_start_timer){
    if(test_words[current_word] === current_user_word){
        set_current_user_word(""); 
        e.target.value = ""; 
        set_current_word(current_word+1); 
    }
    if(current_word === no_of_words){
        set_done(true); 
        set_start_timer(false); 
    }
}

const Body=({set_done, test_words,no_of_words,
    current_word,set_current_word,current_user_word,set_current_user_word,
    set_time_taken,time_taken,start_timer,set_start_timer})=>{

       useEffect(()=>{
           if(!start_timer){
               if(current_user_word !== ""){
                   set_start_timer(true);
               }
           }

           else{
            setTimeout(()=>{
                set_time_taken(time_taken+1); 
            },1000) 
           }
           
       })
        
    return(
    <>

        <div className="test-words">
            {test_words.map((e,index)=>{
                let word_class = "upcomming-word"
                if(index === current_word){
                    word_class = "current-word"
                }else if(index < current_word){
                    word_class = "prev-word"
                }
                return(
                    <span className={word_class}>  {e}  </span>
                )
            })}
        </div>

        <br/>
        <input onChange={(e)=>{
            set_current_user_word(e.target.value); 
            is_valid(test_words, current_word, current_user_word,
                set_current_word,no_of_words,set_current_user_word,
                e,set_done,set_start_timer)
        }} id="user-word-input"></input>

    </>
    )
}

export default Body 