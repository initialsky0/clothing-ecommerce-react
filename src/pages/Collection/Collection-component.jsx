import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem-component';
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop-selectors';
import './Collection-style.scss';

const CollectionPage = ({ collection }) => (
   <div className="collection">
      <h2>Collection PAGE</h2>
   </div>
);

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);