import  React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollection} from '../redux/shopcontent.selectors';
import ShopContainer from '../component/shop-container.component';
import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview"> 
    {
        collections.map(({id, title,...otherProps})=> (                
        <ShopContainer key={id} title= {title} {...otherProps}/>
        ))
    }  

     </div>
);

const mapStateToProps = createStructuredSelector(
    {collections: selectCollection}
)
export default connect(mapStateToProps)(CollectionOverview);

