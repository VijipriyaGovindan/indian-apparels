import img1 from '../images/kurtis.jpeg';
import img2 from '../images/saree.jpeg';
import img3 from '../images/western.jpeg';
import img4 from '../images/salwar.jpg';
const INITIAL_STATE=
{
    section:[{id:1,title:'SAREES' ,image:img2,linkUrl:'shop/SAREES'},
    {id:2,title:'SALWARS',image:img4,linkUrl:'shop/SALWARS'},
    {id:3,'title':'KURTIS',image:img1,linkUrl:'shop/KURTIS'},
    {id:4,'title':'LEGGINGS',image:img3,linkUrl:'shop/LEGGINGS'},
    {id:5,'title':'WESTERN',image:img3,linkUrl:'shop/WESTERN'} 
    ]
};
const contentReducer =(state=INITIAL_STATE,action)=>
{
    switch(action.type)
    {
        default:return state;
    }
}

export default contentReducer;