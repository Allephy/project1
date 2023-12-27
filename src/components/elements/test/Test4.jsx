import React, { useState } from 'react';

import {FSQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let FSScoreList;

export default function Test5() {
    const [ans, setAns] = useState([{id: '0', value: '0'},{id: '1', value: '0'}, {id: '2', value: '0'}, {id: '3', value: '0'}, {id: '4', value: '0'}, {id: '5', value: '0'}, {id: '6', value: '0'}, {id: '7', value: '0'}])
   
    FSScoreList =  [...ans];
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={FSQuestion[0].question} setAns={setAns} ans={ans} id='0'>41</QuestionBlock>
            <QuestionBlock name={FSQuestion[1].question} setAns={setAns} ans={ans} id='1'>42</QuestionBlock>
            <QuestionBlock name={FSQuestion[2].question} setAns={setAns} ans={ans} id='2'>43</QuestionBlock>
            <QuestionBlock name={FSQuestion[3].question} setAns={setAns} ans={ans} id='3'>44</QuestionBlock>
            <QuestionBlock name={FSQuestion[4].question} setAns={setAns} ans={ans} id='4'>45</QuestionBlock>
            <QuestionBlock name={FSQuestion[5].question} setAns={setAns} ans={ans} id='5'>46</QuestionBlock>
            <QuestionBlock name={FSQuestion[6].question} setAns={setAns} ans={ans} id='6'>47</QuestionBlock>
            <QuestionBlock name={FSQuestion[7].question} setAns={setAns} ans={ans} id='7'>48</QuestionBlock>
            </div>
        </div>
    );
}

export { FSScoreList }