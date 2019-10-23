import SHOP_DATA from '../data/shoppingdata';

const INITIAL_STATE =
{
    collections: SHOP_DATA
}

const shopContentReducer =(state=INITIAL_STATE,action)=>
{
    switch(action.type)
    {
        default:return state;
    }
}

export default shopContentReducer;