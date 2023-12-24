import ResultPage from "@routes/result-page";


import {DPScoreList} from '@components/elements/test/Test1';
import {CKScoreList} from '@components/elements/test/Test2';
import {ANScoreList} from '@components/elements/test/Test3';
import {FSScoreList} from '@components/elements/test/Test4';

import {DPQuestion,CKQuestion,ANQuestion,FSQuestion} from '@components/elements/question/question';

import { db, analytics } from "../fbase";
import { ref, set } from "firebase/database";
import { logEvent } from "firebase/analytics";

let DPScore = 0;
let CKScore = 0;
let ANScore = 0;
let FSScore = 0;


//testpage->result-logic->result-page
//Logic 구현
//testpage에서 받은 props
//result-logic에서 firebase로 데이터를 받아올 생각이다.

export default function ResultLogic() {
    
    DPScore = Number(DPScoreList[0].value) * Number(DPQuestion[0].statement) + Number(DPScoreList[1].value) * Number(DPQuestion[1].statement) + Number(DPScoreList[2].value) * Number(DPQuestion[2].statement) + Number(DPScoreList[3].value) * Number(DPQuestion[3].statement) + Number(DPScoreList[4].value) * Number(DPQuestion[4].statement) + Number(DPScoreList[5].value) * Number(DPQuestion[5].statement) + Number(DPScoreList[6].value) * Number(DPQuestion[6].statement) + Number(DPScoreList[7].value) * Number(DPQuestion[7].statement);
    CKScore = Number(CKScoreList[0].value) * Number(CKQuestion[0].statement) + Number(CKScoreList[1].value) * Number(CKQuestion[1].statement) + Number(CKScoreList[2].value) * Number(CKQuestion[2].statement) + Number(CKScoreList[3].value) * Number(CKQuestion[3].statement) + Number(CKScoreList[4].value) * Number(CKQuestion[4].statement) + Number(CKScoreList[5].value) * Number(CKQuestion[5].statement) + Number(CKScoreList[6].value) * Number(CKQuestion[6].statement) + Number(CKScoreList[7].value) * Number(CKQuestion[7].statement);
    ANScore = Number(ANScoreList[0].value) * Number(ANQuestion[0].statement) + Number(ANScoreList[1].value) * Number(ANQuestion[1].statement) + Number(ANScoreList[2].value) * Number(ANQuestion[2].statement) + Number(ANScoreList[3].value) * Number(ANQuestion[3].statement) + Number(ANScoreList[4].value) * Number(ANQuestion[4].statement) + Number(ANScoreList[5].value) * Number(ANQuestion[5].statement) + Number(ANScoreList[6].value) * Number(ANQuestion[6].statement) + Number(ANScoreList[7].value) * Number(ANQuestion[7].statement);
    FSScore = Number(FSScoreList[0].value) * Number(FSQuestion[0].statement) + Number(FSScoreList[1].value) * Number(FSQuestion[1].statement) + Number(FSScoreList[2].value) * Number(FSQuestion[2].statement) + Number(FSScoreList[3].value) * Number(FSQuestion[3].statement) + Number(FSScoreList[4].value) * Number(FSQuestion[4].statement) + Number(FSScoreList[5].value) * Number(FSQuestion[5].statement) + Number(FSScoreList[6].value) * Number(FSQuestion[6].statement) + Number(FSScoreList[7].value) * Number(FSQuestion[7].statement);

    console.log('sending Out: DPScoreList in result-logic', DPScoreList);
    console.log('CKScoreList is ready', CKScoreList);
    console.log('ANScoreList is ready', ANScoreList);
    console.log('FSScoreList is ready', FSScoreList);

    console.log('DPScore', DPScore);
    console.log('CKScore', CKScore);
    console.log('ANScore', ANScore);
    console.log('FSScore', FSScore);
    


    let DP;
    let CK;
    let AN;
    let FS;

    //속성을 하나로 정한다.
    
    if( DPScore < 0) { DP = ("D");} else { DP = ("P");}
    if( CKScore < 0) { CK = ("C");} else { CK = ("K");}
    if( ANScore < 0) { AN = ("A");} else { AN = ("N");}
    if( FSScore < 0) { FS = ("F");} else { FS = ("S");}

    const scoreArr = [
        {
            id:1,
            name:DP,
            score:DPScore, 
        },
        {
            id:2,
            name:CK,
            score:CKScore,
        },
        {
            id:3,
            name:AN,
            score:ANScore,
        },
        {
            id:4,
            name:FS,
            score:FSScore,
        },

    ]
    const percentage = resultCalculation(scoreArr);
    const type = chooseType(scoreArr);
    
    console.log('type: ', type)



    function writeUserData(percentage,type) {
        set(ref(db), {
          type:type,
          score1:percentage[0],
          score2:percentage[1],
          score3:percentage[2],
          score4:percentage[3],
        });
      }
 
      
      writeUserData(percentage,type);
      logEvent(analytics,'select_content',{
        type:type,
        DPscore:percentage[0],
        CKscore:percentage[1],
        ANscore:percentage[2],
        FSscore:percentage[3],
      });


    return (
        <ResultPage percentage={percentage} id="1" type={type}/>     
    )
}


function resultCalculation(arr) {
    const scoreArr = arr;
    let $percentage = [];
    let v;

    v = scoreArr[0].score / 16 * 100;
    if(scoreArr[0].name === "D") { v = -v; $percentage.push({id: 1, value: v}); }
    else { $percentage.push({id: 1, value: v});}


    v = scoreArr[1].score / 16 * 100;
    if(scoreArr[1].name === "C") { v = -v; $percentage.push({id: 2, value: v}); }
    else { $percentage.push({id: 2, value: v}); }

    v = scoreArr[2].score / 16 * 100;
    if(scoreArr[2].name === "A") { v = -v; $percentage.push({id: 3, value: v}); }
    else { $percentage.push({id: 3, value: v}); }


    v = scoreArr[3].score / 16 * 100;
    if(scoreArr[3].name === "F") { v = -v; $percentage.push({id: 4, value: v}); }
    else { $percentage.push({id: 4, value: v}); }

    
    return $percentage;
}

function chooseType(arr) {
    const Charisma = ["PCAS","PCNS"];
    const Charmer = ["PKAS","PKNS"];
    const Coquette = ["DCAS","DCNS"];
    const IdealLover = ["PKAF","PKNF"];
    const Lake = ["PCAF","PCNF"];
    const Natural = ["DKAS","DKNS"];
    const Siren = ["DCAF","DCNF"];
    const Star = ["DKAF","DKNF"];
    
    const typeArr = [arr[0].name,arr[1].name,arr[2].name,arr[3].name]
    let type;

    for(let i=0;i<Charisma.length;i++){
        if( typeArr.join('') === Charisma[i]) {
            type = "Charisma";
            return type;
        }
    }
    for(let i=0;i<Charmer.length;i++){
        if( typeArr.join('') === Charmer[i]) {
            type = "Charmer";
            return type;
        }
    }
    for(let i=0;i<Coquette.length;i++){
        if( typeArr.join('') === Coquette[i]) {
            type = "Coquette";
            return type;
        }
    }
    for(let i=0;i<IdealLover.length;i++){
        if( typeArr.join('') === IdealLover[i]) {
            type = "IdealLover";
            return type;
        }
    }
    for(let i=0;i<Lake.length;i++){
        if( typeArr.join('') === Lake[i]) {
            type = "Lake";
            return type;
        }
    }
    for(let i=0;i<Natural.length;i++){
        if( typeArr.join('') === Natural[i]) {
            type = "Natural";
            return type;
        }
    }
    for(let i=0;i<Siren.length;i++){
        if( typeArr.join('') === Siren[i]) {
            type = "Siren";
            return type;
        }
    }

    for(let i=0;i<Star.length;i++){
        if( typeArr.join('') === Star[i]) {
            type = "Star";
            return type;
        }
    }
    
    //아무것도 나오지 않았을때의 에러 반환
    return "-1";

}
//We should display the result type depending on some values in the test pages.