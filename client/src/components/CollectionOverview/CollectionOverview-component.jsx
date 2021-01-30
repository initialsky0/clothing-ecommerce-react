import React, { Fragment } from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview-component';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop-selectors';
import { CollectionOverviewContainer } from './CollectionOverview-styled';

const CollectionOverview = ({collections, history}) => (
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
);

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionsPreview
});

export default connect(mapStateToProps)(CollectionOverview);