import React, { useState } from 'react';

export default function QuestionBlock(props){
  
    return(
        <div>
            <form>
                <fieldset>
                <legend>{props.name}</legend>

                <input type="radio" name="choice" id="strongly disagree" value='-2' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }}></input>
                <label htmlFor="strongly disagree">절대부정</label>

                <input type="radio" name="choice" id="disagree" value='-1' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }}></input>
                <label htmlFor="disagree">부정</label>

                <input type="radio" name="choice" id="neutral" value='0' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }}></input>
                <label htmlFor="neutral">중립</label>

                <input type="radio" name="choice" id="agree" value='1' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }}></input>
                <label htmlFor="agree">긍정</label>

                <input type="radio" name="choice" id="strongly agree" value='2' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }}></input>
                <label htmlFor="strongly agree">절대긍정</label>

            </fieldset>
            </form>
            
        </div>
        

        
    );
}

