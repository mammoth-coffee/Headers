import React from "react"
// import style from "../../../App.module.css"
import style from "./RightNav.module.css"

function RightNav1() {

    return (
        <div id={style.side_right}>
            <div className = {style.team_make}>
                <img className = {style.team_img} src="/img/ant-design_team-outlined.png" />
                <div className = {style.teamfolder_text}>
                    <p>팀 폴더</p>
                </div>
                <input  type="button" className={style.img_button} onclick="showPopup();" />
            </div>
            <div className = {style.teamfolder_menu}>
                <div className={style.team_profile}>
                    <a href="#">
                        <img className={style.img_yellow} src="/img/Ellipse 159.png" />
                    </a>
                    <a href="#">
                        <input type="button" className={style.team_text} value="과제헬퍼"/>
                    </a>
                    <a href="#">
                        <img className={style.img_teamperson} src="/img/bi_person-plus.png" />
                    </a>
                    <a href="#">
                        <img className={style.img_folder} src="/img/fluent_folder-open-24-regular.png" />
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
    )
}

export default RightNav1;


        