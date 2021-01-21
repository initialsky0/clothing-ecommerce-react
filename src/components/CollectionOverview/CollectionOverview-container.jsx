import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import CollectionOverview from './CollectionOverview-component';
import LoadSpinner from '../LoadSpinner/LoadSpinner-component';

const GET_COLLECTIONS = gql`
   {
      collections {
         id
         title
         items {
            id
            name
            price
            imageUrl
         }
      }
   }
`;

const CollectionOverviewContainer = () => (
   <Query query={GET_COLLECTIONS}>
      {
         ({ loading, error, data }) => {
            if(error) console.log(error);
            if(loading) return <LoadSpinner />;
            return <CollectionOverview collections={data.collections} />;
         }
      }
   </Query>
)

export default CollectionOverviewContainer;