import React, { useState, useRef } from 'react'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './mainpage.module.css'

function unChangePart() {





    return (
        
        <div id={style.wrap}> 
        <div id={style.header}>
            <div className={style.searching}>
                <form action="." method="post">
                    <input className={style.search_txt} type="text" placeholder="Search Contents" />
                    <button className={style.button} type="submit">
                        <img src = "ant-design_search-outlined.png" />
                    </button>
                </form>            
            </div>
            <a href="#">
                <button className={style.name_button}>James</button>
            </a>
            <a href="#">
                <img className={style.profile_img} src="Ellipse 144.png" />
            </a>
            <a href="#">
                <img className={style.bell_img} src="clarity_bell-outline-badged.png" />
            </a>
            <a href="#">
                <img className={style.setup_img} src="clarity_settings-line.png" />
            </a>
            
        </div>


        <div id={style.side_left}>
            <img className = {style.left_line} src="Vector 803.png" />
            <div className = {style.helper_text}>
                <p>과제헬퍼</p>
            </div>
            <img className={style.logo_img} src="Rectangle 431.png" />

    
            <div className={style.menu_wrap}>
                <div className={style.menu_cell}>
                    <input type="checkbox" id={style.ch1} />
                    <label for="ch1" >
                        내 파일
                        <img className={style.img_ch1} src = "ant-design_home-outlined.png" />
                    </label>
                        
                    <ul className={style.sub_menu}>
                        <li>프로젝트 현황</li>
                        <li>웹런칭 프로젝트 파이팅!!!</li>
                        <li>설치정보 등록</li>
                    </ul>
                </div>    
                <a href="#">
                    <div className={style.ch2}>
                        <p>즐겨찾기</p>
                        <img className={style.img_ch2} src = "clarity_star-line.png" />
                    </div>
                </a>
                <a href="#">
                    <div className={style.ch3}>
                        <p>휴지통</p>
                        <img className={style.img_ch3} src = "ion_trash-outline.png" />
                    </div>    
                </a>
                
            </div>

   
        



        </div>







        <div id={style.contents}>contents</div>



        <div id={style.side_right}>
            <div className = {style.team_make}>
                <img className = {style.team_img} src="ant-design_team-outlined.png" />
                <div className = {style.teamfolder_text}>
                    <p>팀 폴더</p>
                </div>
                <input  type="button" className={style.img_button} onclick="showPopup();" />
            </div>
            <div className = {style.teamfolder_menu}>
                <div className={style.team_profile}>
                    <a href="#">
                        <img className={style.img_yellow} src="Ellipse 159.png" />
                    </a>
                    <a href="#">
                        <input type="button" className={style.team_text} value="과제헬퍼"/>
                    </a>
                    <a href="#">
                        <img className={style.img_teamperson} src="bi_person-plus.png" />
                    </a>
                    <a href="#">
                        <img className={style.img_folder} src="fluent_folder-open-24-regular.png" />
                    </a>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>




        <div id={style.side_right2}>
            <a href="#">
                <img className={style.img_pay} src="Rectangle 440.png" />
            </a>
            <div className={style.pay_text}>
                <p>개인 프로 요금제로 업그레이드 하기</p>
            </div>
            <img className = {style.pay_person} src="undraw_update_re_swkp (1) 2.png" />
            <div className={style.pay_text2}>
                <p>현재 파일 당 최대 크기는</p>
                <p>0MB입니다.</p>
            </div>
            
            
            

        </div>
        
    </div>
    )


}


export default unChangePart;