import React from 'react';


export default function QuestionBlock(props){
    console.log('^^', props.name);
    //const a = null;
   
    console.log('dmgkgk', document.querySelector("#form #value"));

    return(
        <div>
            <form id="form">
            <fieldset>
                <legend>{props.name}</legend>
                <input type="radio" name="choice" id="strongly disagree" value="-2"></input>
                <label htmlFor="strongly disagree">절대부정</label>
                <input type="radio" name="choice" id="disagree" value="-1"></input>
                <label htmlFor="disagree">부정</label>
                <input type="radio" name="choice" id="neutral" value="0"></input>
                <label htmlFor="neutral">중립</label>
                <input type="radio" name="choice" id="agree" value="1"></input>
                <label htmlFor="agree">긍정</label>
                <input type="radio" name="choice" id="strongly agree" value="2"></input>
                <label htmlFor="strongly agree">절대긍정</label>
            </fieldset>
            </form>
            
        </div>
        

        
    )
}