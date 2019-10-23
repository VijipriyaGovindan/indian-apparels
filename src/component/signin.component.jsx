import React from 'react';
import FormInput from './form-elements/form-input.component';
import CustomButton from './form-elements/custom-button.component';
import './signin.styles.css';

import {auth, singinWithGoogle} from '../firebase/firebase.utility';

class SignIn extends React.Component
{
 constructor(){
     super();
     this.state={email:'', password:'' };
 }
 handleSubmit = async e =>
 {
     e.preventDefault();
     const {email,password}= this.state;
     try {
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'', password:'' });         
     } catch (error) {
         console.log(error);
     }
     

     this.setState({email:'',password:''});
 }
 handleChange = e =>
 {
     const{value,name} = e.target;
     this.setState ({[name]: value});
 }
render()
{
    return(
        <div className= 'sign-in'>
            <h2>I already have an acoount</h2>
            <span>SIgn in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
            <FormInput type='email'
                 name ='email'
                 handleChange ={this.handleChange}
                 value ={this.state.email}
                 label="Email"
                 required/>
                      <FormInput type='password'
                 name ='password'
                 handleChange ={this.handleChange}
                 value ={this.state.password}
                 label='Password'
                 required/>
                <div className="buttons">
                   <CustomButton type= 'submit' valueText="Sign In" ></CustomButton>
                    <CustomButton onClick = {singinWithGoogle} isGoogleSignIn  valueText="SignIn with Google" ></CustomButton>
                </div>
            </form>
        </div>

    )
}
}
export default SignIn
