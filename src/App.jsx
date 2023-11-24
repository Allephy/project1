import { useState ,useEffect } from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

import Home from '@routes/home';
import Test from "@routes/test-page";
import TypeView from "@routes/type-view";
import ResultLogic from '@routes/result-logic';
import ResultPage from '@routes/result-page';

import LoadingScreen from "@components/loading-screen";
import Layout from "@components/layout";


import Charisma from "@components/elements/type/charisma";
import Charmer from "@components/elements/type/charmer";
import Coquet from "@components/elements/type/coquet";
import Dandy from "@components/elements/type/dandy";
import Ideallover from "@components/elements/type/ideallover";
import Lake from "@components/elements/type/lake";
import Natural from "@components/elements/type/natural";
import Siren from "@components/elements/type/siren";
import Star from "@components/elements/type/star";

import './input.css'


function App() {

  const [isLoading,setLoading] = useState(true);
  const init = async () => {
    //await auth.authStateReady();
    setLoading(false);
  }; 
  useEffect(() => {
    init();
  }, []);
  

  return (
    <>
      {isLoading ? <LoadingScreen /> : (
        <BrowserRouter>
          <div className='aspect-auto container mx-auto static inset-x-0 top-100 h-100'>
              <button className='box-border h-100 w-15 border-2'>
                <Link to="/">Home</Link>
              </button>
              <button className='box-border h-100 w-15 border-2'>
                <Link to="/testpage">Test</Link>
              </button>
              <button className='box-border h-100 w-15 border-2'>
                <Link to="/typeview">Type</Link>
              </button>
          </div>

          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
              <Route path="testpage" element={<Test />} />
                <Route path='/resultlogic' element={<ResultLogic />} />
                <Route path='/resultpage' element={<ResultPage />} />  

              <Route path="typeview" element={<TypeView />} />
                <Route path='/Charisma' element={<Charisma />} />
                <Route path='/Charmer' element={<Charmer />} />
                <Route path='/Coquet' element={<Coquet/>} />
                <Route path='/Dandy' element={<Dandy />} />
                <Route path='/Ideallover' element={<Ideallover />} />
                <Route path='/Lake' element={<Lake />} />
                <Route path='/Natural' element={<Natural />} />
                <Route path='/Siren' element={<Siren/>} />
                <Route path='/Star' element={<Star/>} />

              

          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;



