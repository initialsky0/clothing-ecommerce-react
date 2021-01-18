import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionLoaded } from '../../redux/shop/shop-selectors';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner-component';
import CollectionPage from './Collection-component';


const mapStateToProps = createStructuredSelector({
   isLoading: state => !selectCollectionLoaded(state)
});

const CollectionPageContainer = compose(
   connect(mapStateToProps),
   LoadSpinner
)(CollectionPage);

export default CollectionPageContainer;