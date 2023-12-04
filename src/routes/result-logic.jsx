import ResultPage from "@routes/result-page";

import {DPScore} from '@components/elements/test/Test1';
import {CKScore} from '@components/elements/test/Test2';
import {ANScore} from '@components/elements/test/Test3';
import {FSScore} from '@components/elements/test/Test4';

//import { dbService } from "../firebase";
//import { addDoc, collection } from "../firebase/firestore";

//testpage->result-logic->result-page
//Logic 구현
//testpage에서 받은 props
//result-logic에서 firebase로 데이터를 받아올 생각이다.

export default function ResultLogic() {
    
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
    
    //점수의 절대값 비교는 만약 필요하다면 하겠음
    //const sortedArr = handleArr(scoreArr); 

    const type = chooseType(scoreArr);

    console.log('type: ', type)
    /*
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(dbService,"user"),{
                percentage,
                type,
            })
        } catch(e) {
            console.log(e);
        }
    }
    */
    return (
        <ResultPage percentage={percentage} id="1" type={type}/>     
    )
}

/*function handleArr(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && Math.abs(arr[j].score) > Math.abs(currentVal.score); j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}*/

function resultCalculation(arr) {
    const scoreArr = arr;
    let $percentage = [];
    let v;

    v = scoreArr[0].score / 20 * 100;
    if(scoreArr[0].name === "D") { v = -v; $percentage.push({id: 1, value: v}); }
    else { $percentage.push({id: 1, value: v});}


    v = scoreArr[1].score / 20 * 100;
    if(scoreArr[1].name === "C") { v = -v; $percentage.push({id: 2, value: v}); }
    else { $percentage.push({id: 2, value: v}); }

    v = scoreArr[2].score / 20 * 100;
    if(scoreArr[2].name === "A") { v = -v; $percentage.push({id: 3, value: v}); }
    else { $percentage.push({id: 3, value: v}); }


    v = scoreArr[3].score / 20 * 100;
    if(scoreArr[4].name === "F") { v = -v; $percentage.push({id: 5, value: v}); }
    else { $percentage.push({id: 5, value: v}); }

    
    return $percentage;
}

function chooseType(arr) {
    const Charisma = ["PCCTM","PCCFM","PCNTM","PCNFM"];
    const Charmer = ["PFNTM","PFNFM","PFNTP","PFNFP"];
    const Coquette = ["DFCTM","DFCFM"];
    const IdealLover = ["PFCTM","PFCFM","PFCTP","PFCTP"];
    const Lake = ["PCCTP","PCCFP","PCNTP","PCNFP"];
    const Natural = ["DCNTP","DCNTM","DFNTP","DFNTM"];
    const Siren = ["DFCTP","DFCFP"];
    const Star = ["DCCTP","DCCFP","DCCTM","DCCFM"];
    
    const typeArr = [arr[0].name,arr[1].name,arr[2].name,arr[3].name]
    
    //const typeArr= $typeArr.prototype.join("");
    let type;

    console.log(typeArr.join(''))

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
    for(let i=0;i<Coquet.length;i++){
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