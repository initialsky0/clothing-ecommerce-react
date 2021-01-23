import styled from 'styled-components';
import { CollectionItemContainer } from '../../components/CollectionItem/CollectionItem-styled';

export const CollectionPageContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;

export const CollectionTitleContainer = styled.h2`
   font-size: 38px;
   margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
   gap: 10px;

   & ${CollectionItemContainer} {
      justify-self: center;
      width: 90%;
      margin-bottom: 30px;
   }
`;