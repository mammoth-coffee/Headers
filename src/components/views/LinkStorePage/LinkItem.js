import React from "react";
import style from './LinkStorePage.module.css';

function LinkItem(props) {

    return ( 
            <div className={style.LinkContainer}>
                {/* <!-- star : absolute(이건 링크 아님) --> */}
                {/* <img src="img/forLinkStar.png" alt="star" className="star" /> */}
                <a href={props.link} target="_blank">
                    {/* <!-- 이미지 부분 --> */}
                    <div className={style.upper_img}>
                        <img src='img/forLink.png' className={style.preview_img} alt="previewImg"/>
                    </div>
                    {/* <!-- 밑부분 --> */}
                    <div className={style.bottom_white}>
                        <div className={style.logo_title}>
                            <div>
                                <img src="img/button_페이스북.png" alt="logo" />
                            </div>
                            {/* <h2 className={style.title}>웹사이트 사용자의 ux분석</h2> */}
                            <input type="text" value="No-Title" class={style.title} />
                        </div>
                        <div>
                            <p className={style.pageLink}>{props.link}</p>
                        </div>
                    </div>
                </a>
            </div>
    )
}

export default LinkItem


{/* <div class="TotalLinkContainer">
        <!-- star : absolute(이건 링크 아님) -->
        <img src="./button_페이스북.png" alt="" class="star">
        <div class="LinkContainer">
            <a href='https://brunch.co.kr/@jiyeonsongofnt/11'>
                <!-- 이미지 부분 -->
                <div class="upper-img">
                    <img src=./button_페이스북.png class='preview-img'/>
                </div>
                <!-- 밑부분 -->
                <div class="bottom-white">
                    <div class="logo-title">
                        <div>
                            <img src="./button_페이스북.png" alt="">
                        </div>
                        <h2 class="title">웹사이트 사용자의 ux분석</h2>
                    </div>
                    <div>
                        <p class="pageLink">https://brunch.co.kr/@jiyeonsongofnt/11</p>
                    </div>
                </div>
            </a>
        </div>
    </div> */}