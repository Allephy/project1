//This is to be protected.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function Header() {
  return(
    <h1>This is the header</h1>
  );
}

function Body() {
  return(
    <>
    <h2>This is the body where the button starting our test lies.</h2>
    <NavLink to="/test">Start test</NavLink>

    <Routes>
      <Route path="/test" element={<Test />} />
    </Routes>
    </>

  )
}

function Footer() {
  return(
    <h3>This is the footer.</h3>
  )
}

function Home() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

function Test() {
  return (
    <div>
      <h1>This is the test page</h1>
      <Footer></Footer>
    </div>
  );
}

/*function Result() {
  return (

  );
}
*/
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<Test />}/>
      </Routes>
    </div>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
