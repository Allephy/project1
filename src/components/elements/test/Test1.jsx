import React from 'react';

import {DPQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';


export default function Test1() {
    console.log('dfdfdf', DPQuestion[0])
    return(
        <div>
            <h1>This is test 1</h1>
            <div>
            <QuestionBlock name={DPQuestion[0].question}>1</QuestionBlock>
            <QuestionBlock name={DPQuestion[1].question}>2</QuestionBlock>
            <QuestionBlock name={DPQuestion[2].question}>3</QuestionBlock>
            <QuestionBlock name={DPQuestion[3].question}>4</QuestionBlock>
            <QuestionBlock name={DPQuestion[4].question}>5</QuestionBlock>
            <QuestionBlock name={DPQuestion[5].question}>6</QuestionBlock>
            <QuestionBlock name={DPQuestion[6].question}>7</QuestionBlock>
            <QuestionBlock name={DPQuestion[7].question}>8</QuestionBlock>
            <QuestionBlock name={DPQuestion[8].question}>9</QuestionBlock>
            <QuestionBlock name={DPQuestion[9].question}>10</QuestionBlock>
            </div>
        </div>
        
        








    );
}