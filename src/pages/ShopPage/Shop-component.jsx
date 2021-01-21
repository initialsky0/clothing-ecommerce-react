import React from 'react';
import { default as CollectionOverview } from '../../components/CollectionOverview/CollectionOverview-container';
import {default as CollectionPage} from '../Collection/Collection-container';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => (
   <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
   </div>
);


export default ShopPage;