import React from 'react';
import CustomButton from '../form-elements/custom-button.component';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart.selectors';
import {createStructuredSelector} from 'reselect';
import './cart-dropdown.styles.css';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from  '../../redux/cart.actions';

const CartDropDown = ({cartItems, history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        { cartItems.map(cartitem =>
          <CartItem key= {cartitem.id} item={cartitem}/>)
        }
        </div>
        <CustomButton onClick= {()=>
         {history.push('/checkout');
           dispatch(toggleCartHidden());} }          
         valueText='GO TO CHECKOUT'></CustomButton>
    </div>
)

const mapStateToProps =createStructuredSelector({cartItems:selectCartItems});


export default withRouter(connect(mapStateToProps)(CartDropDown));