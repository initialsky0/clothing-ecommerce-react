import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_DIRECTORY, LOAD_DIRECTORY } from '../../graphql/queries';
import Directory from './Directory-component';

const DirectoryContainer = () => (
   <Query query={GET_DIRECTORY}>
      {
         ({data: {directory}}) => (
            <Mutation mutation={LOAD_DIRECTORY}>
               { 
                  loadDirectory => 
                     <Directory 
                        directory={directory} 
                        loadDir={dirData => loadDirectory({ variables: { dirData } })} 
                     /> 
               }
            </Mutation>
         )
      }
   </Query>
);

export default DirectoryContainer;