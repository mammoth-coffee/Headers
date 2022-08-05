import React from "react";
import style from './FileUpload.module.css';


function FileUploadItem(props) {



    



    return ( 
            <div className={style.FileContainer}>
        
                    
                        <div className={style.logo_title}>
                            
                            <img src="/img/—Pngtree—adobe photoshop psd ps icon_8061668 4.png"/>
                            
                            
                                
                        
                        
                            
                            <div className={style.filetitle}>
                                <form action="." method="post">
                                    <input type="text"  class={style.title}  value="파일 이름"/> 
                                </form>                                
                            </div>

                            <div className = {style.starimg}>
                                <img src = "/img/clarity_star-line (1).png"/>
                                <div className = {style.trashimg}>
                                    <img src = "/img/ion_trash-outline.png" />
                                </div>
                            </div>
                            
                
                            



                                
                                
                        </div>                                
                    
                
            </div>
    )
}

export default FileUploadItem


/*<form action="." method="post">*/