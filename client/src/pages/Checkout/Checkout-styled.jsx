import styled from 'styled-components';
import {CustomBtnContainer} from '../../components/CustomBtn/CustomBtn-styled';

export const CheckoutPageContainer = styled.div`
   width: 55%;
   min-height: 90vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 50px auto 0;

   & > button { margin-left: auto; }

   @media only screen and (max-width: 800px) {
      width: 95%;
   }
`;

export const CheckoutHeaderContainer = styled.div`
   width: 100%;
   padding: 10px 0;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid darkgrey;

   @media only screen and (max-width: 380px) {
      font-size: 13px;
   }
`;

export const HeaderBlockContainer = styled.div`
   text-transform: capitalize;
   width: 23%;

   &:last-child { width: 8%; }
`;

export const WarningTextContainer = styled.div``;

export const TotalPriceContainer = styled.div`
   margin-top: 30px;
   margin-left: auto;
   font-size: 36px;

   @media only screen and (max-width: 380px) {
      font-size: 30px;
   }

   &~${WarningTextContainer} {
      text-align: center;
      margin: 50px 0;
      font-size: 20px;
      color: red;

      @media only screen and (max-width: 380px) {
      font-size: 16px;
   }
   }
`;

export const ButtonsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;

   ${CustomBtnContainer} {
      padding: 15px 12px;
      height: 33px;
      align-items: center;
      min-width: unset;
      border-radius: 5px;
   }
`;