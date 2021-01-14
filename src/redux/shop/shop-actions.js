import ShopActionTypes from './shop-types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-util';

export const fetchCollectionsStart = () => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
   payload: collectionsMap
});

export const fetchCollectionsFailed = errorMessage => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_FAILED,
   payload: errorMessage
});

export const fetchCollectionsStartAsync = () => dispatch => {
   const collectionRef = firestore.collection('collections');

   // dispatch is only available when redux-thunk library is included
   dispatch(fetchCollectionsStart());

   // Promise pattern, have to call everytime to update data
   collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
   }).catch(err => dispatch(fetchCollectionsFailed(err.message)));
}

