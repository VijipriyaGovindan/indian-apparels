import React from 'react';
import './form.styles.css';

const CustomButton = ({valueText, isGoogleSignIn, inverted, ...otherProps}) =>
(
 <button className={`${inverted? 'inverted':''} ${isGoogleSignIn? 'google-style':''} custom-button`} {...otherProps}>
     {valueText}
 </button>
)

export default CustomButton;