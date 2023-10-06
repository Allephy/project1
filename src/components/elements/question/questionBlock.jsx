import React from 'react';

export default function QuestionBlock(props){
    console.log('^^', props.name)
    //const a = null;
    return(
        <div>
            <form>
                <fieldset>
                <legend>{props.name}</legend>

                <input type="radio" name="choice" id="strongly disagree" ></input>
                <label htmlFor="strongly disagree">절대부정</label>

                <input type="radio" name="choice" id="disagree"></input>
                <label htmlFor="disagree">부정</label>

                <input type="radio" name="choice" id="neutral"></input>
                <label htmlFor="neutral">중립</label>

                <input type="radio" name="choice" id="agree"></input>
                <label htmlFor="agree">긍정</label>

                <input type="radio" name="choice" id="strongly agree"></input>
                <label htmlFor="strongly agree">절대긍정</label>

            </fieldset>
            </form>
            
        </div>
        

        
    )
}