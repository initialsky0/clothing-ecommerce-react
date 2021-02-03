import React, { Fragment, useEffect } from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview-component';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop-selectors';
import { selectHeaderHidden } from '../../redux/header/header-selectors';
import { CollectionOverviewContainer } from './CollectionOverview-styled';
import { toggleHeaderFixed, setHeaderHidden, setHeaderShow } from '../../redux/header/header-actions';
import { checkScrollable, initScrollState } from '../../scroll-utils';

const CollectionOverview = ({collections, history, toggleFixedHeader, 
                             headerHidden, hideHeader, showHeader}) => {
   
   useEffect(() => {
      toggleFixedHeader();
      return toggleFixedHeader;
   }, [toggleFixedHeader]);

   useEffect(() => {
      // Setup scroll control
      const getScrollState = initScrollState();
      const scrollHandler = () => {
         if(window.pageYOffset === 0 && headerHidden) {
            showHeader();
            return;
         }
         const scrollState = getScrollState();
         if(scrollState > 0 && !headerHidden) {
            hideHeader();
         } else if(scrollState < 0 && headerHidden) {
            showHeader();
         }
      };

      // Effect
      checkScrollable(scrollHandler, true);
      return () => checkScrollable(scrollHandler);
   }, [headerHidden, hideHeader, showHeader]);

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
   headerHidden: selectHeaderHidden
});

const mapDispatchToProps = dispatch => ({
   toggleFixedHeader: () => dispatch(toggleHeaderFixed()),
   hideHeader: () => dispatch(setHeaderHidden()),
   showHeader: () => dispatch(setHeaderShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);