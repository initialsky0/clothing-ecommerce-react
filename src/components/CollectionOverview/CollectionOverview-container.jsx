import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching } from '../../redux/shop/shop-selectors';
import LoadSpinner from '../LoadSpinner/LoadSpinner-component';
import CollectionOverview from './CollectionOverview-component';


const mapStateToProps = createStructuredSelector({
   isLoading: selectCollectionFetching
});

const CollectionOverviewContainer = compose(
   connect(mapStateToProps),
   LoadSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;