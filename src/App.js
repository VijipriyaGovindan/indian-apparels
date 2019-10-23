import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch ,Redirect} from 'react-router-dom';
import './App.css';
import Header from './component/header.component';
import SignInSignUp from './component/signin-signup.component';
import { auth, createUserProfileDoc } from './firebase/firebase.utility';
import Homepage from './pages/homepage.pages';
import ShopPage from './pages/shoppage.pages';
import {setCurrentUser} from './redux/user.actions';
import {selectLoggedinUser} from './redux/user.selectors';
import {createStructuredSelector} from 'reselect';
import CheckOutPage from './pages/checkout/checkout.component';

class App extends React.Component {


  unSubscribeFromAuth = null;
  //Listening to Auth state changes
 componentDidMount()
 {
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async (user)=> {
      const {setCurrentUser} = this.props;
      if(user)
        {
         const userRef = await createUserProfileDoc(user);
         userRef.onSnapshot(snapShot => {
          setCurrentUser({id: snapShot.id, ...snapShot.data()});
        });
      }
        else setCurrentUser(user);
        
          
    });
 }
 componentWillUnmount()
 {
   this.unSubscribeFromAuth();
 }
  render()
  {
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
      <Route  path="/Shop" component={ShopPage}></Route>
      <Route exact path="/checkout" component={CheckOutPage}></Route>
      <Route exact path="/SignIn" render = {() =>
       this.props.loggedinUser ?
       (<Redirect to="/" />):
       (<SignInSignUp/>) }>
      </Route>
    </Switch>
    </div>
    )
  }
}

const mapStateToProps =createStructuredSelector ({
  loggedinUser : selectLoggedinUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps
  , mapDispatchToProps)(App);
