import React, { useState } from 'react';

import {FSQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let FSScoreList;

export default function Test5() {
    const [ans, setAns] = useState([{id: '1', value: '0'}, {id: '2', value: '0'}, {id: '3', value: '0'}, {id: '4', value: '0'}, {id: '5', value: '0'}, {id: '6', value: '0'}, {id: '7', value: '0'},{id: '8', value: '0'}, {id: '9', value: '0'}])
   
    FSScoreList =  [...ans];
    console.log('FSScoreList', FSScoreList)
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={FSQuestion[0].question} setAns={setAns} ans={ans} id='1'>41</QuestionBlock>
            <QuestionBlock name={FSQuestion[1].question} setAns={setAns} ans={ans} id='2'>42</QuestionBlock>
            <QuestionBlock name={FSQuestion[2].question} setAns={setAns} ans={ans} id='3'>43</QuestionBlock>
            <QuestionBlock name={FSQuestion[3].question} setAns={setAns} ans={ans} id='4'>44</QuestionBlock>
            <QuestionBlock name={FSQuestion[4].question} setAns={setAns} ans={ans} id='5'>45</QuestionBlock>
            <QuestionBlock name={FSQuestion[5].question} setAns={setAns} ans={ans} id='6'>46</QuestionBlock>
            <QuestionBlock name={FSQuestion[6].question} setAns={setAns} ans={ans} id='7'>47</QuestionBlock>
            <QuestionBlock name={FSQuestion[7].question} setAns={setAns} ans={ans} id='8'>48</QuestionBlock>
            </div>
        </div>
    );
}

export { FSScoreList }