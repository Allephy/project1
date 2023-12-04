import React, {useState} from 'react';

import {ANQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let ANScore = 0;

export default function Test3() {
    const [ans, setAns] = useState(0);
    ANScore = ans;
    console.log(ANScore);
    return(
        <div>
            <div className='font-light text-center tracking-wide'>
            <QuestionBlock name={ANQuestion[0].question} setAns={setAns} ans={ans}>21</QuestionBlock>
            <QuestionBlock name={ANQuestion[1].question} setAns={setAns} ans={ans}>22</QuestionBlock>
            <QuestionBlock name={ANQuestion[2].question} setAns={setAns} ans={ans}>23</QuestionBlock>
            <QuestionBlock name={ANQuestion[3].question} setAns={setAns} ans={ans}>24</QuestionBlock>
            <QuestionBlock name={ANQuestion[4].question} setAns={setAns} ans={ans}>25</QuestionBlock>
            <QuestionBlock name={ANQuestion[5].question} setAns={setAns} ans={ans}>26</QuestionBlock>
            <QuestionBlock name={ANQuestion[6].question} setAns={setAns} ans={ans}>27</QuestionBlock>
            <QuestionBlock name={ANQuestion[7].question} setAns={setAns} ans={ans}>28</QuestionBlock>
            <QuestionBlock name={ANQuestion[8].question} setAns={setAns} ans={ans}>29</QuestionBlock>
            <QuestionBlock name={ANQuestion[9].question} setAns={setAns} ans={ans}>30</QuestionBlock>
            </div>
        </div>
    );
}

export { ANScore }