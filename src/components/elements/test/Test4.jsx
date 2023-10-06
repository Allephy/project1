import React from 'react';

import {TFQuestion} from '@components/elements/question/question';
import QuestionBlock from '@components/elements/question/question-block';

export default function Test4() {
    return(
        <div>
            <h1>This is test 4</h1>
            <div>
            <QuestionBlock name={TFQuestion[0].question}>31</QuestionBlock>
            <QuestionBlock name={TFQuestion[1].question}>32</QuestionBlock>
            <QuestionBlock name={TFQuestion[2].question}>33</QuestionBlock>
            <QuestionBlock name={TFQuestion[3].question}>34</QuestionBlock>
            <QuestionBlock name={TFQuestion[4].question}>35</QuestionBlock>
            <QuestionBlock name={TFQuestion[5].question}>36</QuestionBlock>
            <QuestionBlock name={TFQuestion[6].question}>37</QuestionBlock>
            <QuestionBlock name={TFQuestion[7].question}>38</QuestionBlock>
            <QuestionBlock name={TFQuestion[8].question}>39</QuestionBlock>
            <QuestionBlock name={TFQuestion[9].question}>40</QuestionBlock>
            </div>
        </div>
    );
}