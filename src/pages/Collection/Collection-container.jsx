import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import CollectionPage from './Collection-component';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner-component';

const GET_COLLECTION_BY_TITLE = gql`
   query getCollectionsByTitle($title: String!) {
      getCollectionsByTitle(title: $title) {
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

const CollectionContainer = ({ match }) => (
   <Query   query={GET_COLLECTION_BY_TITLE} 
            variables={{ title: match.params.collectionId }}
   >
      {
         ({ loading, data }) => {
            if(loading) return <LoadSpinner />;
            const {getCollectionsByTitle} = data;
            return <CollectionPage collection={getCollectionsByTitle} />;
         }
      }

   </Query>
);

export default CollectionContainer;