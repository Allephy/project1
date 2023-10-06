import React from 'react';

import {CNQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';


export default function Test3() {
    return(
        <div>
            <h1>This is test 3</h1>
            <div>
            <QuestionBlock name={CNQuestion[0].question}>21</QuestionBlock>
            <QuestionBlock name={CNQuestion[1].question}>22</QuestionBlock>
            <QuestionBlock name={CNQuestion[2].question}>23</QuestionBlock>
            <QuestionBlock name={CNQuestion[3].question}>24</QuestionBlock>
            <QuestionBlock name={CNQuestion[4].question}>25</QuestionBlock>
            <QuestionBlock name={CNQuestion[5].question}>26</QuestionBlock>
            <QuestionBlock name={CNQuestion[6].question}>27</QuestionBlock>
            <QuestionBlock name={CNQuestion[7].question}>28</QuestionBlock>
            <QuestionBlock name={CNQuestion[8].question}>29</QuestionBlock>
            <QuestionBlock name={CNQuestion[9].question}>30</QuestionBlock>
            </div>
        </div>
    );
}