import React from 'react';
import { Mutation } from  'react-apollo';
import { ADD_ITEM_TO_CART } from '../../graphql/queries';
import CollectionItem from './CollectionItem-component';

const CollectionItemContainer = props => (
   <Mutation mutation={ADD_ITEM_TO_CART}>
      {
         addItemToCart => 
            <CollectionItem 
               {...props} 
               addItemToCart={
                  item => addItemToCart({ variables: { item } })
               } 
            />
      }
   </Mutation>
);

export default CollectionItemContainer;