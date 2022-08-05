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

import MainPage from './components/views/MainPage/MainPage'

import LinkStorePage from './components/views/LinkStorePage/LinkStorePage'
import ImageUpload from './components/views/ImageUploadPage/ImageUpload'
import MemoUpload from './components/views/MemoPage/MemoUpload'
import FileUploadPage from './components/views/FileUploadPage/FileUploadPage'



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
                        <Route exact path="/" element={ < MainPage /> } />
                        <Route exact path="/linkstore" element={ < LinkStorePage /> } />
                        <Route exact path="/imagestore" element={ < ImageUpload /> } />
                        <Route exact path="/memostore" element={ < MemoUpload /> } />
                        <Route exact path="/filestore" element={ < FileUploadPage /> } />
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