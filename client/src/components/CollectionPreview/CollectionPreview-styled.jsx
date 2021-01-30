import styled from 'styled-components';
import { CollectionItemContainer } from '../CollectionItem/CollectionItem-styled';

export const CollectionPreviewContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;

   @media only screen and (max-width: 800px) {
      align-items: center;
   }
`;

export const CollectPrevTitleContainer = styled.h1`
   font-size: 28px;
   margin-bottom: 25px;
`;

export const CollectPrevItemsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 40vh;
   min-height: 450px;
   

   @media only screen and (max-width: 1100px) {
      & ${CollectionItemContainer}:not(:last-child) {
         margin-right: 5px;
      }
   }

   @media only screen and (max-width: 800px) {
      margin-right: unset;
      height: unset;
      min-height: unset;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
   }
`;