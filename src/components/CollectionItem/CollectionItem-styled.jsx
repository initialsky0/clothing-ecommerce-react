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
   top: 255px;
   display: none;
`;

export const CollectionItemContainer = styled.div`
   width: 22vw;
   display: flex;
   flex-direction: column;
   height: 350px;
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