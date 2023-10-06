import React from 'react';

export default function QuestionBlock(props){
    console.log('^^', props.name)
    //const a = null;
    return(
        <div>
            <form>
                <fieldset>
                <legend>{props.name}</legend>

                <input type="radio" name="choice" id="strongly disagree"></input>
                <label for="strongly disagree">절대부정</label>

                <input type="radio" name="choice" id="disagree"></input>
                <label for="disagree">부정</label>

                <input type="radio" name="choice" id="neutral"></input>
                <label for="neutral">중립</label>

                <input type="radio" name="choice" id="agree"></input>
                <label for="agree">긍정</label>

                <input type="radio" name="choice" id="strongly agree"></input>
                <label for="strongly agree">절대긍정</label>

            </fieldset>
            </form>
            
        </div>
        

        
    )
}