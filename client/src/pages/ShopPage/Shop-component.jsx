import React, {useEffect, lazy, Suspense} from 'react';
import Spinner from '../../components/LoadSpinner/Spinner-component';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';


const ShopPage = ({ fetchCollectionsStart, match }) => {

   useEffect(fetchCollectionsStart, [fetchCollectionsStart]);

   // fetch method, change YOUR_PROJECT_ID to actual project ID
   // fetch('https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/collections')
   //    .then(resp => resp.json())
   //    .then(collections => console.log(collections));

   const CollectionOverviewContainer = lazy(() => 
   import('../../components/CollectionOverview/CollectionOverview-container')
   );
   const CollectionPageContainer = lazy(() => import('../Collection/Collection-container'));


   return (
      <div className='shop-page'>
         <Suspense fallback={<Spinner />}>
            <Route 
               exact 
               path={`${match.path}`} 
               component={CollectionOverviewContainer} 
            />
            <Route 
               path={`${match.path}/:collectionId`} 
               component={CollectionPageContainer} 
            />
         </Suspense>
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);