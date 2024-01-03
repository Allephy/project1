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
import Coquette from "@components/elements/type/coquette";
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
    <div className="bg-white  text-black sm:max-lg:mx-[0.01rem] lg:px-[30rem] text-xl ">
      {isLoading ? <LoadingScreen /> : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} /> 
            <Route index element={<Home />} />
              <Route path="testpage" element={<Test />} />
                <Route path='/resultlogic' element={<ResultLogic />} />
                <Route path='/resultpage' element={<ResultPage />} />  

              <Route path="typeview" element={<TypeView />} />
                <Route path='/Charisma' element={<Charisma />} />
                <Route path='/Charmer' element={<Charmer />} />
                <Route path='/Coquette' element={<Coquette/>} />
                <Route path='/Ideallover' element={<Ideallover />} />
                <Route path='/Lake' element={<Lake />} />
                <Route path='/Natural' element={<Natural />} />
                <Route path='/Siren' element={<Siren/>} />
                <Route path='/Star' element={<Star/>} />
          </Routes>

          <div className="fixed top-0 left-0 right-0 sm:max-lg grid grid-cols-5 gap-1 bg-white text-black shadow-md text-md font-light py-[0.5rem] z-40  ">
              <a className="px-[0.875rem] " href="/">Home</a>
              <span className='mx-[0.5rem]'>|</span>
              <a className="-mx-[2.8rem]" href="/testpage">Test</a>
              <span className='-mx-[4.0rem]'>|</span>     
              <a className="-mx-[7.2rem]" href="/typeview">Type</a>
        </div> 

        </BrowserRouter>
      )}
    </div>
  );
}

export default App;



