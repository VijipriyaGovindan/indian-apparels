import React from 'react';
import './collections.styles.scss';
import {selectCollectionItem} from '../redux/shopcontent.selectors';
import ItemContainer from './shop-items.component';
import {connect} from 'react-redux';
const CollectionPage =({collections}) => {
    const {title,items} =collections;
    return(
    <div className="collection-page" >
    <h2 className='title' >{title}</h2>
    <div className="SubItem">
    
    { items.map(
       (item)=> (                
        <ItemContainer key={item.id} item = {item}/>
        ))
    }
    </div>
    </div>);
};


const mapStateToProps = (state,ownProps)=> (
    {collections: selectCollectionItem(ownProps.match.params.collectionId)(state)}
)
export default connect(mapStateToProps)(CollectionPage);