import React, { useState }from 'react';

import {FCQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let FCScore = 0;

export default function Test2() {
    const [ans, setAns] = useState(0);
    FCScore = ans;
    console.log(FCScore);
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={FCQuestion[0].question} setAns={setAns} ans={ans}>11</QuestionBlock>
            <QuestionBlock name={FCQuestion[1].question} setAns={setAns} ans={ans}>12</QuestionBlock>
            <QuestionBlock name={FCQuestion[2].question} setAns={setAns} ans={ans}>13</QuestionBlock>
            <QuestionBlock name={FCQuestion[3].question} setAns={setAns} ans={ans}>14</QuestionBlock>
            <QuestionBlock name={FCQuestion[4].question} setAns={setAns} ans={ans}>15</QuestionBlock>
            <QuestionBlock name={FCQuestion[5].question} setAns={setAns} ans={ans}>16</QuestionBlock>
            <QuestionBlock name={FCQuestion[6].question} setAns={setAns} ans={ans}>17</QuestionBlock>
            <QuestionBlock name={FCQuestion[7].question} setAns={setAns} ans={ans}>18</QuestionBlock>
            <QuestionBlock name={FCQuestion[8].question} setAns={setAns} ans={ans}>19</QuestionBlock>
            <QuestionBlock name={FCQuestion[9].question} setAns={setAns} ans={ans}>20</QuestionBlock>
            </div>
        </div>
    );
}

export { FCScore }