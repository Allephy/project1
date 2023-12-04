import React, { useState }from 'react';

import {CKQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let CKScore = 0;

export default function Test2() {
    const [ans, setAns] = useState(0);
    CKScore = ans;
    console.log(CKScore);
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={CKQuestion[0].question} setAns={setAns} ans={ans}>11</QuestionBlock>
            <QuestionBlock name={CKQuestion[1].question} setAns={setAns} ans={ans}>12</QuestionBlock>
            <QuestionBlock name={CKQuestion[2].question} setAns={setAns} ans={ans}>13</QuestionBlock>
            <QuestionBlock name={CKQuestion[3].question} setAns={setAns} ans={ans}>14</QuestionBlock>
            <QuestionBlock name={CKQuestion[4].question} setAns={setAns} ans={ans}>15</QuestionBlock>
            <QuestionBlock name={CKQuestion[5].question} setAns={setAns} ans={ans}>16</QuestionBlock>
            <QuestionBlock name={CKQuestion[6].question} setAns={setAns} ans={ans}>17</QuestionBlock>
            <QuestionBlock name={CKQuestion[7].question} setAns={setAns} ans={ans}>18</QuestionBlock>
            <QuestionBlock name={CKQuestion[8].question} setAns={setAns} ans={ans}>19</QuestionBlock>
            <QuestionBlock name={CKQuestion[9].question} setAns={setAns} ans={ans}>20</QuestionBlock>
            </div>
        </div>
    );
}

export { CKScore }