import { useState ,useEffect } from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

import Home from '@routes/home';
import TestPage from "@routes/test-page";
import TypeView from "@routes/type-view";
import LoadingScreen from "@components/loading-screen";
import Layout from "@components/layout";
import GlobalStyles from "@components/global-style";

import Charisma from "@components/elements/type/charisma";
import Charmer from "@components/elements/type/charmer";
import Coquet from "@components/elements/type/coquet";
import Dandy from "@components/elements/type/dandy";
import Ideallover from "@components/elements/type/ideallover";
import Lake from "@components/elements/type/lake";
import Natural from "@components/elements/type/natural";
import Siren from "@components/elements/type/siren";
import Star from "@components/elements/type/star";



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
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : (
        <BrowserRouter>
          <div className='App'>
            <div className='nav-btn'>
              <button>
                <Link to="/">Home</Link>
              </button>
              <button>
                <Link to="/testpage">Test</Link>
              </button>
              <button>
                <Link to="/typeview">Type</Link>
              </button>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
              <Route path="testpage" element={<TestPage />} />
              <Route path="typeview" element={<TypeView />} >
                  <Route path='charisma' element={<Charisma />} />
                  <Route path='charmer' element={<Charmer />} />
                  <Route path='coquet' element={<Coquet/>} />
                  <Route path='danay' element={<Dandy />} />
                  <Route path='ideallover' element={<Ideallover />} />
                  <Route path='lake' element={<Lake />} />
                  <Route path='natural' element={<Natural />} />
                  <Route path='siren' element={<Siren/>} />
                  <Route path='star' element={<Star/>} />
              <Route/>
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;



