import styled from'styled-components';
import CustomBtn from '../CustomBtn/CustomBtn-component';

export const ItemImageContainer = styled.div`
   width: 100%;
   height: 95%;
   background-image: url("${props => props.imageUrl}");
   background-size: cover;
   background-position: center;
   margin-bottom: 5px;
`;

export const ItemBtnContainer = styled(CustomBtn)`
   width: 80%;
   opacity: .7;
   position:  absolute;
   bottom: 45px;
   display: none;

   @media only screen and (max-width: 1000px) {
      min-width: 90%;
   }

   @media only screen and (max-width: 800px) {
      display: block;
      min-width: unset;
      opacity: .9;
      padding: 0 10px;
   }
`;

export const CollectionItemContainer = styled.div`
   width: 22vw;
   display: flex;
   flex-direction: column;
   height: auto;
   min-height: 380px;
   align-items: center;
   position: relative;

   &:hover {
      ${ItemImageContainer} {
         opacity: .8;
      }

      ${ItemBtnContainer} {
         display: flex;
         opacity: .85;
      }
   }

   @media only screen and (max-width: 800px) {
      width: 40vw;

      &:hover {
         ${ItemImageContainer} {
            opacity: unset;
         }

         ${ItemBtnContainer} {
            opacity: unset;
         }
      }
   }
`;

export const CollectionFooterContainer = styled.div`
   width: 100%;
   height: 5%;
   display: flex;
   justify-content: space-between;
   font: 18px;
`;

export const ItemNameContainer = styled.span`
   width: 90%;
   margin-bottom: 15px;
`;

export const ItemPriceContainer = styled.span`
   width: 10%;
`;