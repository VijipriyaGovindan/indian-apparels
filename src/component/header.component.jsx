import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.css';
import {auth} from '../firebase/firebase.utility';
import {connect} from 'react-redux';
import CartIcon from '../component/cart-icon/cart-icon.component'
import CartDropDown from '../component/cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCardHidden} from '../redux/cart.selectors';
import {selectLoggedinUser} from '../redux/user.selectors';

function Header({loggedinUser,hidden})
{
    return(
        <div className="nav">
        <div className="left">
                <Link className="linkto item" to="/">
                Home
                </Link>
        </div>
        <div className="right">
            <Link className="linkto item" to="/Shop">Shop</Link>
            <Link className="linkto item" to="/Shop">Contact</Link>
            {
                loggedinUser?
                <div className="popup linkto Item" onClick ={()=> auth.signOut()}>Sign Out</div>:
                <Link className="linkto item" to="/SignIn">Sign In</Link>
            }
          
        </div>
        <CartIcon/>
        {
        hidden?null:
        <CartDropDown/>
        }
        </div>
    );
}
//Advanced destructuring nested ( state.user.loggedInUser can be destructuted as {user:{loggedInUser}})
const mapStateToProps = createStructuredSelector({
    loggedinUser :selectLoggedinUser,
    hidden : selectCardHidden
});

export default connect(mapStateToProps)(Header);