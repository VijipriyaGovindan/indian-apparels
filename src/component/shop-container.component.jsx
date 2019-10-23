import React from 'react';
import ItemContainer from './shop-items.component';
import {withRouter,Link} from 'react-router-dom';
import './shop-container.styles.css';



function ShopContainer({title,routeName,match,items})
{
    return(
        <div className="CollectionItem">
        <Link className="linkto" to={
        `${match.url}/${routeName}`}>
        {title.toUpperCase()}
        </Link>
        <div className="SubItem">
        {
            items.filter((item,ids) => ids<4)
                 .map(item => (
                <ItemContainer key={item.id} item={item}/>
            ))
            
        }
        </div>
        </div>
    );
}
export default withRouter(ShopContainer);