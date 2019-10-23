import React from 'react';
import SignIn from './signin.component';
import SignUp from './signup.component';
import './signin-signup.styles.css';

const SignInandSignUp = () => {
    return(
   <div className="signinandsignup">
            <SignIn/>
            <SignUp/>
        </div>
    );
}

export default SignInandSignUp;