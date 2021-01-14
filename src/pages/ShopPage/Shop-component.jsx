import React from 'react';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview-component';
import CollectionPage from '../Collection/Collection-component';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner-component';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-util';

const CollectionOverviewWithLoading = LoadSpinner(CollectionOverview);
const CollectionPageWithLoading = LoadSpinner(CollectionPage);

class ShopPage extends React.Component {
   state = {
      loading: true
   };

   unsubFromSnapshot = null;

   componentDidMount() {
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection('collections');
      this.unsubFromSnapshot = collectionRef.onSnapshot(async snapshot => {
         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
         updateCollections(collectionsMap);
         this.setState({ loading: false });
      });
   };

   render() {
      const { match } = this.props;
      const { loading } = this.state;
      return (
         <div className='shop-page'>
            <Route 
               exact 
               path={`${match.path}`} 
               render={props => 
                  <CollectionOverviewWithLoading 
                     isLoading={loading} 
                     {...props}
                  />} 
            />
            <Route 
               path={`${match.path}/:collectionId`} 
               render={props => 
                  <CollectionPageWithLoading
                     isLoading={loading} 
                     {...props}
                  />} 
            />
         </div>
      );
   };
}

const mapDispatchToProps = dispatch => ({
   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);