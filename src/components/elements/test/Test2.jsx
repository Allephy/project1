import React, { useState }from 'react';

import {CKQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let CKScore = 0;

export default function Test2() {
    const [ans1, setAns1] = useState(0)
    const [ans2, setAns2] = useState(0)
    const [ans3, setAns3] = useState(0)
    const [ans4, setAns4] = useState(0)
    const [ans5, setAns5] = useState(0)
    const [ans6, setAns6] = useState(0)
    const [ans7, setAns7] = useState(0)
    const [ans8, setAns8] = useState(0)
    const [ans9, setAns9] = useState(0)
    const [ans10, setAns10] = useState(0)

    CKScore = ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8 + ans9 + ans10;
    console.log(CKScore);
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={CKQuestion[0].question} setAns={setAns1} ans={ans1}>11</QuestionBlock>
            <QuestionBlock name={CKQuestion[1].question} setAns={setAns2} ans={ans2}>12</QuestionBlock>
            <QuestionBlock name={CKQuestion[2].question} setAns={setAns3} ans={ans3}>13</QuestionBlock>
            <QuestionBlock name={CKQuestion[3].question} setAns={setAns4} ans={ans4}>14</QuestionBlock>
            <QuestionBlock name={CKQuestion[4].question} setAns={setAns5} ans={ans5}>15</QuestionBlock>
            <QuestionBlock name={CKQuestion[5].question} setAns={setAns6} ans={ans6}>16</QuestionBlock>
            <QuestionBlock name={CKQuestion[6].question} setAns={setAns7} ans={ans7}>17</QuestionBlock>
            <QuestionBlock name={CKQuestion[7].question} setAns={setAns8} ans={ans8}>18</QuestionBlock>
            <QuestionBlock name={CKQuestion[8].question} setAns={setAns9} ans={ans9}>19</QuestionBlock>
            <QuestionBlock name={CKQuestion[9].question} setAns={setAns10} ans={ans10}>20</QuestionBlock>
            </div>
        </div>
    );
}

export { CKScore }