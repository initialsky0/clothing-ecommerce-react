import React from 'react';
import { Query, Mutation } from 'react-apollo';
import Header from './Header-component';
import { GET_CART_HIDDEN, GET_CURRENT_USER, EMPTY_CART_ITEMS } from '../../graphql/queries';

// Will be wrapped in another query for practice
const HeaderContainer = () => (
   <Query query={GET_CART_HIDDEN}>
      {
         ({ data: { cartHidden } }) => (
            <Query query={GET_CURRENT_USER}>
               {
                  ({ data: { currentUser } }) => 
                     (
                        <Mutation mutation={EMPTY_CART_ITEMS}>
                        {
                           emptyCartItems => 
                              <Header 
                                 hidden={cartHidden} 
                                 currentUser={currentUser} 
                                 emptyCart={emptyCartItems}
                              />
                        }
                        </Mutation>
                     )
               }       
            </Query>
         )
      }
   </Query>
);

export default HeaderContainer;