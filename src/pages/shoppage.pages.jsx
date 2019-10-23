import React from 'react';
import './homepage.styles.css';
import './shoppage.styles.css';
import CollectionOverview from '../component/collection-overview.component';
import CollectionPage from '../component/collections.component';
import {Route} from 'react-router-dom';
const ShopPage = ({match}) => (
  
        
            <div className="shop-container1"> 
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route  path={`${match.path}/:collectionId`} component={CollectionPage} />
             </div>
        );



export default ShopPage;