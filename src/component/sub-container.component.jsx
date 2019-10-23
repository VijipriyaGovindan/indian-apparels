import React from 'react';
import './shop-container.styles.css';
import {withRouter}from 'react-router-dom';

function SubContainer({title,image,linkUrl, history,match})
{
    return(
                
        <div className="sub-container" style= {{backgroundImage:`url(${image})`}} 
        onClick = {()=> history.push(
        `${match.url}${linkUrl}`) }>
        <div className="childItem">
        <h1>{title}</h1>
        <span>Shop Now</span>
        </div>
    </div>
    );
}
export default withRouter(SubContainer);