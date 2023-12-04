import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Test1 from '@components/elements/test/Test1';
import Test2 from '@components/elements/test/Test2';
import Test3 from '@components/elements/test/Test3';
import Test4 from '@components/elements/test/Test4';
import ResultLogic from './result-logic';

//import ResultLogic from '@routes/result-logic';

//testpage->result-logic->result-page;


const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };


function Header2() {
    return(
        <div>
            1.시험은 총 40문제입니다.
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
    } else if (Number(props.id) === 5){
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
                
        };
    
    const navigate = useNavigate();
        
        console.log('props', id)
        let move = null;
        if (id < 5) {
            move = <button onClick={Next} className= "">다음 페이지</button>
        } else if (id === 5) { 
            // id가 5가 된 후 submit을 하면, result-page로 
            move = <input type='submit' value='Get Your Result' onClick={() => navigate("/resultlogic") } className= " text-align:center text-black font-bold py-2 px-4 rounded-full"></input>
        } else if (id === 6) {
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
        <div>
            <Header2></Header2>
            <TestPage id={id} ></TestPage>
            <NextPage id={id} ></NextPage>   
        </div>

        );
    }
