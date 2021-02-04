import React, { Fragment } from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview-component';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop-selectors';
import { selectHeaderHidden, selectHeaderFixed } from '../../redux/header/header-selectors';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { CollectionOverviewContainer } from './CollectionOverview-styled';
import { toggleHeaderFixed, setHeaderHidden, setHeaderShow } from '../../redux/header/header-actions';
import { useInitCollections } from '../../pages/Collection/Collection-utils';
import { useScrollEffect } from '../../scroll-utils';

const CollectionOverview = (
   { collections, history, toggleFixedHeader, 
      headerHidden, hideHeader, showHeader, itemCount, headerFixed }) => {

   useInitCollections(toggleFixedHeader, showHeader, headerFixed, headerHidden, itemCount);
   useScrollEffect(headerHidden, showHeader, hideHeader);

   return (
      <CollectionOverviewContainer>
         {
            collections.map(({ id, ...otherCollectionProps }) => 
               (<Fragment key={`frag${id}`}>
                     <CollectionPreview key={id} {...otherCollectionProps} />
                     <CustomBtn 
                        key={`btn${id}`}
                        onClick={() => 
                           history.push(`/shop/${otherCollectionProps.routeName}`
                        )}
                     > 
                        Shop {otherCollectionProps.title}
                     </CustomBtn>
               </Fragment>)
            )
         }
      </CollectionOverviewContainer>
)};

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionsPreview,
   headerFixed: selectHeaderFixed,
   headerHidden: selectHeaderHidden,
   itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
   toggleFixedHeader: () => dispatch(toggleHeaderFixed()),
   hideHeader: () => dispatch(setHeaderHidden()),
   showHeader: () => dispatch(setHeaderShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);