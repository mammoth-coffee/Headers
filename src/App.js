import logo from './logo.svg';
import './App.css';
import style from './App.module.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Header from './components/views/Header/Header'
import LeftNav from './components/views/LeftNav/LeftNav';
import RightNav1 from '../src/components/views/RightNav/RightNav1'
import RightNav2 from '../src/components/views/RightNav/RightNav2'
import LinkStorePage from '../src/components/views/LinkStorePage/LinkStorePage'


function App() {
  return (
    <div className="App">
      <div id={style.wrap}> 

        < Header />
        < LeftNav />
       
        <div id={style.contents}>
            <div id={style.contents_wrap}>

                <div id={style.myFolder}>
                  <span>내폴더</span>
                  <span>Portfolio자료</span>
                </div>
          
                <Router>
            
                    <Routes>
                        <Route exact path="/linkstore" element={ < LinkStorePage /> } />
                    </Routes>
            
                </Router>
            </div>
         </div>

        < RightNav1 />
        < RightNav2 />

      </div>
    </div>
  );
}

export default App;
