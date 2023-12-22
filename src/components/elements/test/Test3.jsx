import React, {useState} from 'react';

import {ANQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let ANScoreList;

export default function Test3() {
    const [ans, setAns] = useState([{id: '1', value: '0'}, {id: '2', value: '0'}, {id: '3', value: '0'}, {id: '4', value: '0'}, {id: '5', value: '0'}, {id: '6', value: '0'}, {id: '7', value: '0'},{id: '8', value: '0'}])
    
    ANScoreList = [...ans];
    console.log('ANScoreList', ANScoreList);
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={ANQuestion[0].question} setAns={setAns} ans={ans} id='1'>21</QuestionBlock>
            <QuestionBlock name={ANQuestion[1].question} setAns={setAns} ans={ans} id='2'>22</QuestionBlock>
            <QuestionBlock name={ANQuestion[2].question} setAns={setAns} ans={ans} id='3'>23</QuestionBlock>
            <QuestionBlock name={ANQuestion[3].question} setAns={setAns} ans={ans} id='4'>24</QuestionBlock>
            <QuestionBlock name={ANQuestion[4].question} setAns={setAns} ans={ans} id='5'>25</QuestionBlock>
            <QuestionBlock name={ANQuestion[5].question} setAns={setAns} ans={ans} id='6'>26</QuestionBlock>
            <QuestionBlock name={ANQuestion[6].question} setAns={setAns} ans={ans} id='7'>27</QuestionBlock>
            <QuestionBlock name={ANQuestion[7].question} setAns={setAns} ans={ans} id='8'>28</QuestionBlock>

            </div>
        </div>
    );
}

export { ANScoreList }