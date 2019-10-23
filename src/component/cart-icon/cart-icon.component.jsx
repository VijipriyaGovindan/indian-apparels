import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../images/shopping-bag.svg';
import './cart-icon.styles.css';
import {connect} from 'react-redux';
import {toggleCartHidden} from  '../../redux/cart.actions';
import {selectCartItemCount} from '../../redux/cart.selectors';
import {createStructuredSelector} from 'reselect';
const CartIcon = ({toggleCartHidden,itemCount}) =>
(
    <div className='cart-icon' >
        <ShoppingIcon className='shopping-icon'  onClick ={toggleCartHidden} />
        <span className='item-count'>{itemCount}</span>

    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({itemCount : selectCartItemCount})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);