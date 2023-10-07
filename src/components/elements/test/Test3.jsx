import React, {useState} from 'react';

import {CNQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

let CNScore;

export default function Test3() {
    const [ans, setAns] = useState(0);
    console.log('**', ans);
    CNScore = ans;
    return(
        <div>
            <h1>This is test 3</h1>
            <div>
            <QuestionBlock name={CNQuestion[0].question} setAns={setAns} ans={ans}>21</QuestionBlock>
            <QuestionBlock name={CNQuestion[1].question} setAns={setAns} ans={ans}>22</QuestionBlock>
            <QuestionBlock name={CNQuestion[2].question} setAns={setAns} ans={ans}>23</QuestionBlock>
            <QuestionBlock name={CNQuestion[3].question} setAns={setAns} ans={ans}>24</QuestionBlock>
            <QuestionBlock name={CNQuestion[4].question} setAns={setAns} ans={ans}>25</QuestionBlock>
            <QuestionBlock name={CNQuestion[5].question} setAns={setAns} ans={ans}>26</QuestionBlock>
            <QuestionBlock name={CNQuestion[6].question} setAns={setAns} ans={ans}>27</QuestionBlock>
            <QuestionBlock name={CNQuestion[7].question} setAns={setAns} ans={ans}>28</QuestionBlock>
            <QuestionBlock name={CNQuestion[8].question} setAns={setAns} ans={ans}>29</QuestionBlock>
            <QuestionBlock name={CNQuestion[9].question} setAns={setAns} ans={ans}>30</QuestionBlock>
            </div>
        </div>
    );
}

export { CNScore }