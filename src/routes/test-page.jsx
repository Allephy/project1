import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
//import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Test1 from '../components/elements/question/Test1';
import Test2 from '../components/elements/question/Test2';
import Test3 from '../components/elements/question/Test3';
import Test4 from '../components/elements/question/Test4';
import Test5 from '../components/elements/question/Test5';



export default function TestPage (props) {
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
    } else if (Number(props.id) === 5) {
        content = <Test5></Test5>
        console.log('test5')
    } else if (Number(props.id) === 6){
        content = <Result></Result>
    }

    return(
        <div id={props.id}>
            {content}
        </div>
    );

    function Test() {
    const [id, setId] = useState(1);
    
        function NextPage() {
        const Next = (event) => {
        event.preventDefault();
        setId(Number(id)+1);
                
        };
        console.log('props', id)
        let move = null;
        if (id < 5) {
            move = <button onClick={Next}>Move to the Next Page</button>
        } else if (id === 5) {
            move = move = <input value='Get Your Result' onClick={Next}></input>
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
            <h1>This is the test page.</h1>
            <Header2></Header2>
            <TestPage id={id}></TestPage>
            <NextPage id={id}></NextPage>
            <Footer></Footer>
            
        </div>
        
        );
    }
}