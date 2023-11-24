import React, { useState } from 'react';

export default function QuestionBlock(props){
    let INF= 99999;
  
    return(
        <div className = "aspect-ratio: auto container box-border h-30 width-150 px-10 py-10 mx-auto my-10" >
            <form>
                <fieldset>
                <legend>{props.name}</legend>


                <input type="radio" name="choice" id="strongly disagree" value='-2' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }} ></input>
                <label htmlFor = "strongly disagree"> 매우부정 </label>

                <input type="radio" name="choice" id="disagree" value='-1' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }}></input>
                <label htmlFor="disagree"> 부정 </label>

                <input type="radio" name="choice" id="neutral" value='0' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }}></input>
                <label htmlFor="neutral"> 중립 </label>

                <input type="radio" name="choice" id="agree" value='1' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }}></input>
                <label htmlFor="agree"> 긍정 </label>

                <input type="radio" name="choice" id="strongly agree" value='2' onClick={(event)=>{
                    props.setAns(Number(props.ans) + Number(event.target.value))
                }}></input>
                <label htmlFor="strongly agree"> 매우긍정 </label>
                

            </fieldset>
            </form>
            
        </div>
        

        
    );
}

