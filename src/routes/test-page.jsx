import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Test1 from '@components/elements/test/Test1';
import Test2 from '@components/elements/test/Test2';
import Test3 from '@components/elements/test/Test3';
import Test4 from '@components/elements/test/Test4';
import ResultLogic from './result-logic';

//import ResultLogic from '@routes/result-logic';

//testpage->result-logic->result-page;



function Header2() {
    return(
        <div className='font-light text-sm mx-[1.25rem] underline decoration-1 lg:text-lg'>
            1. 시험은 총 32문제입니다.<br/>
            2. 진솔하게 답변하는 것이 좋습니다.<br/>
            3. 답변하기 위해 깊은 생각을 하는 것을 추천합니다.
        </div>
    )
}


function TestPage (props) {
    console.log('props', props.id)

    let content = null;

    if (Number(props.id) === 1) {
        content = <Test1></Test1>
        console.log('test1')
    } else if (Number(props.id) === 2) {
        content = <Test2></Test2>
        console.log('test2')
    } else if (Number(props.id) === 3) {
        content = <Test3></Test3>
        console.log('test3')
    } else if (Number(props.id) === 4) {
        content = <Test4></Test4>
        console.log('test4')
    } else if (Number(props.id)===5) {
        content = <ResultLogic></ResultLogic>
    }

    return(
        <div id={props.id}>
            {content}
        </div>
    );
}

    export default function Test() {

    const [id, setId] = useState(1);
    
        function NextPage() {
        const Next = (event) => {
        event.preventDefault();
        setId(Number(id)+1);

        window.scroll(top);
                
        };
    

        

    const navigate = useNavigate();
        
        console.log('props', id)
        let move = null;
        if (id <= 3) {
            move = <button onClick={Next} className= "mx-auto">다음 페이지</button>
        } else if (id === 4) { 
            // id가 4가 된 후 submit을 하면, result-page로 
            move = <input type='submit' value='Get Your Result' className= "mx-auto" onClick={() => navigate("/resultlogic") } ></input>
        } else if (id === 5) {
            move = null;
        }
    
    
    
        return(
            <div>
                {move}
            </div>
        );
    } 


    
        console.log('id', id);
    
    
        return(
        <div> <br/><br/> 
            <Header2></Header2>
            <TestPage id={id} ></TestPage>
            <div className="text-center font-semibold py-[0.5rem] px-[1.0rem] mx-[5.0rem]  mt-[2.5rem]">
            <div className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold 
            border border-transparent bg-gray-800 text-white
            disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
            <NextPage id={id} ></NextPage>  
            </div>
            </div>

        </div>

        );
    }
