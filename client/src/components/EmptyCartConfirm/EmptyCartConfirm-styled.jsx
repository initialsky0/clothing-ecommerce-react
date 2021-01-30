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
      h2{
         text-align: center;
      }
   }

`;

export const ConfirmBtnsContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-evenly;

   @media only screen and (max-width: 800px) {
      flex-direction: column;

      ${CustomBtnContainer} {
         padding: 0 5px;
      }

      ${CustomBtnContainer}:not(:last-child) {
         margin-bottom: 10px;
      }
   }
`;