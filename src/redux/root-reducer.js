
import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import cartReducer from './cart-reducer';
import contentReducer from './content.reducer';
import shopContentReducer from './shopcontent.reducer';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//for Local storage during refresh, reopen
const persistConfig ={
    key:'root',
    storage,
    whitelist :['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart:cartReducer,
    content:contentReducer,
    shopContent :shopContentReducer
});
/*export default ({
    user: userReducer,
    cart:cartReducer
}); */

export default persistReducer(persistConfig,rootReducer);