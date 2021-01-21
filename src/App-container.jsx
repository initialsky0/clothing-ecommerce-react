import React from 'react';
import { Query, Mutation } from'react-apollo';
import { GET_CURRENT_USER, UPDATE_CURRENT_USER } from './graphql/queries';
import App from './App';

// Practice nesting Query and mutation
const  AppContainer = () => (
   <Mutation mutation={UPDATE_CURRENT_USER}>
      {
         updateCurrentUser => (
            <Query query={GET_CURRENT_USER}> 
               {
                  ( {data: { currentUser } }) => 
                     <App 
                        setCurrentUser={user => updateCurrentUser({ variables: { user } })}
                        currentUser={currentUser}
                     />
               }
            </Query>
         )
      }
   </Mutation>
);

export default AppContainer;