import React from 'react';
import './homepage.styles.css';
import SubContainer from '../component/sub-container.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSection} from '../redux/content.selctors';

function Homepage ({section}){
   
        return(
            <div className="main-container"> 
            {
                section.map(current=>(
                
                <SubContainer key={current.id} title ={current.title} image={current.image} linkUrl={current.linkUrl}/>
                ))
                }  
        
             </div>
        )
    }

    const mapStateToProps = createStructuredSelector(
        {section:selectSection}
    )

export default connect(mapStateToProps)(Homepage);