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
        <div className="fixed top-0 left-0 right-0 sm:max-lg grid grid-cols-3 gap-4  bg-white text-black shadow-lg text-sm py-[0.75rem] z-40  ">
              <a className="px-[0.75rem]" href="/">LoReT Test</a>
              <a className="px-[0.75rem]" href="/testpage">검사 하기</a>     
              <a className="px-[0.75rem]" href="/typeview">유형</a>
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
                <Route path='/Coquette' element={<Coquette/>} />
                <Route path='/Ideallover' element={<Ideallover />} />
                <Route path='/Lake' element={<Lake />} />
                <Route path='/Natural' element={<Natural />} />
                <Route path='/Siren' element={<Siren/>} />
                <Route path='/Star' element={<Star/>} />

              

          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;



