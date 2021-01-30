import styled from 'styled-components';
import { CustomBtnContainer } from '../CustomBtn/CustomBtn-styled';

export const EmptCartConfContainer = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;

   p {
      margin: 0 50px;
      margin-bottom: 30px;
      font-size: 20px;
   }

   @media only screen and (max-width: 800px) {
      h2 {
         margin: 0 10px;
         text-align: center;
      }

      ${CustomBtnContainer} {
         font-size: 13px;
         height: 35px;
         min-width: 120px;
         align-items: center;
         border-radius: 5px;
      }
   }

   @media only screen and (max-width: 400px) {
      h2 {
         margin-top: 20px;
         font-size: 20px;
      }

      p {
         font-size: 16px;
         margin-bottom: 10px;
      }
   }

`;

export const ConfirmBtnsContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-evenly;

   @media only screen and (max-width: 400px) {
      flex-direction: column;

      ${CustomBtnContainer}:not(:last-child) {
         margin-bottom: 10px;
      }

      ${CustomBtnContainer} {
         height: 30px;
      }
   }
`;