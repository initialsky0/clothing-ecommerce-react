import styled from 'styled-components';
import { CollectionItemContainer } from '../../components/CollectionItem/CollectionItem-styled';

export const CollectionPageContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const CollectionTitleContainer = styled.h2`
   font-size: 38px;
   margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 10px;

   & ${CollectionItemContainer} { margin-bottom: 30px; }
`;