import React from 'react';
import './shop-items.styles.scss';
import CustomButton from './form-elements/custom-button.component';
import {connect}from 'react-redux';
import {addItem} from '../redux/cart.actions';
function ItemContainer({item, addItem})
{
    return(
            <div className="item-container">
               <div className="item-image" style= {{backgroundImage:`url(${item.imageUrl})`}}></div>
                <div className="item-footer">
                    <span>{item.name}</span>
                    <span>Price: {item.price}</span>
                
                </div>
            <CustomButton valueText="ADD TO CART" inverted onClick = {()=>addItem(item)}></CustomButton>
              </div> 
    );
}

const mapDispatchToProps = dispatch => (
   {addItem : (item) => dispatch(addItem(item))}
);
export default connect(null,mapDispatchToProps)(ItemContainer);