import React, { useState } from 'react';
import LinkBoard from './LinkBoard';
import style from './LinkStorePage.module.css';

function LinkStorePage () {

    const [Link, setLink] = useState('');
    const [LinkList, setLinkList] = useState([]);


    const onLinkHandler = (event) => {
        setLink(event.currentTarget.value)
    }

    const onEmbedLinkHandler = () => {
        setLinkList([...LinkList, Link]);
    }

    return(
        <div id={style.linkStore}>
            <div id={style.linkAdd}> 
                {/* form 필요함 */} 
                <input type="text" onChange={onLinkHandler} id={style.linkInput}/>
                <button onClick={onEmbedLinkHandler} id={style.linkBtn}>링크 임베드</button>
            </div>
            
            {/* <div> */}
            <LinkBoard LinkList = {LinkList} />
            {/* </div> */}
        </div>
    )
}


export default LinkStorePage;