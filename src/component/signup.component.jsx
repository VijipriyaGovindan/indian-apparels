import React from 'react';
import FormInput from './form-elements/form-input.component';
import CustomButton from './form-elements/custom-button.component';
import './signup.styles.css';

import {auth, createUserProfileDoc} from '../firebase/firebase.utility';

class SignUp extends React.Component
{
 constructor(){
     super();
     this.state={displayName:'', email:'',password:'',confirmPassword:'' };
 }

 handleSubmit = async event =>{
     event.preventDefault();

     const { displayName,email,password,confirmPassword} =this.state;
     if(confirmPassword !== password)
     {
         alert("Password dont match");
         return;
     }
     try {
         const {user} = await auth.createUserWithEmailAndPassword(email,password);

         await createUserProfileDoc(user, {displayName});
         //clear the form
         this.setState ({displayName:'', email:'',password:'','confirmPassword':''});
         
     } catch (error) {
        alert(error.message);
      console.error(error) ;
     }
 }
 handleChange = event =>
 {
        const{value,name} = event.target;
        this.setState ({[name]: value});
 }

render()
{
    return(
        <div className= 'sign-up'>
            <h2>I do not have an acoount</h2>
            <span>SIgn up with your email and password</span>
  
            <form onSubmit={this.handleSubmit}>
            <FormInput type='text'
                 name ='displayName'
                 handleChange ={this.handleChange}
                 value ={this.state.displayName}
                 label="Display Name"
                 required/>
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
          <FormInput type='password'
                 name ='confirmPassword'
                 handleChange ={this.handleChange}
                 value ={this.state.confirmPassword}
                 label='Confirm Password'
                 required/>
                <div className="buttons">
                   <CustomButton type= 'submit' valueText="Sign Up" ></CustomButton>
                </div>
            </form>
        </div>

    )
}
}
export default SignUp
