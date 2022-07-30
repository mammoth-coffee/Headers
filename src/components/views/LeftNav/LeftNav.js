import React from "react";
// import style from '../../../App.module.css'
import style from './LeftNav.module.css'

function LeftNav() {

    return (
        <div id={style.side_left}>
            <img className = {style.left_line} src="/img/Vector 803.png" />
            <div className = {style.helper_text}>
                <p>과제헬퍼</p>
            </div>
            <img className={style.logo_img} src="/img/Rectangle 431.png" />

    
            <div className={style.menu_wrap}>
                <div className={style.menu_cell}>
                    <input type="checkbox" className={style.ch1} />
                    <label for="ch1" >
                        내 파일
                        <img className={style.img_ch1} src = "/img/ant-design_home-outlined.png" />
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
                        <img className={style.img_ch2} src = "/img/clarity_star-line.png" />
                    </div>
                </a>
                <a href="#">
                    <div className={style.ch3}>
                        <p>휴지통</p>
                        <img className={style.img_ch3} src = "/img/ion_trash-outline.png" />
                    </div>    
                </a>
                
            </div>
        </div>
        )
    }

export default LeftNav;