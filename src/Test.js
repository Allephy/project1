import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
//import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './index';
import Test1 from './Test1';
import Test2 from './Test1';
import Test3 from './Test1';
import Test4 from './Test1';
import Test5 from './Test1';

function Header2() {
    return(
        <h1>This is a new header for test pages, which will remain until the end of the test.</h1>
    )
}
//Otherwise you can reuse the header on the main page.

function TestPage(props) {

    console.log('props', props.id)

    let content = null;

    if (Number(props.id) === 1) {
        content = <Test1></Test1>
        console.log('idin', props.id)
    } else if (Number(props.id) === 2) {
        content = <Test2></Test2>
    } else if (Number(props.id) === 3) {
        content = <Test3></Test3>
    } else if (Number(props.id) === 4) {
        content = <Test4></Test4>
    } else if (Number(props.id) === 5) {
        content = <Test5></Test5>
    }

    return(
        <div id={props.id}>
            {content}
        </div>
    );
}



export default function Test() {
    const [id, setId] = useState(1);

    function NextPage(props) {
        const Next = () => {setId(Number(props.id)+1)};
        console.log('props', props.id)
        return(
            <button onClick={Next}>Next Page</button>
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