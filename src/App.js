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
import LeftNav from './components/views/LeftNav/LeftNav'
import RightNav1 from './components/views/RightNav/RightNav1'
import RightNav2 from './components/views/RightNav/RightNav2'
import LinkStorePage from './components/views/LinkStorePage/LinkStorePage'
import MainPage from './components/views/MainPage/MainPage'

function App() {
  return (
    <div className="App">
      <div id={style.wrap}>

        < Header />
        < LeftNav />
       
        <div id={style.contents}>
            <div id={style.contents_wrap}>

                <Router>
            
                    <Routes>
                        <Route exact path="/linkstore" element={ < LinkStorePage /> } />
                        <Route exact path="/" element={ < MainPage /> } />
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

// 로그인관련 페이지도 넣기