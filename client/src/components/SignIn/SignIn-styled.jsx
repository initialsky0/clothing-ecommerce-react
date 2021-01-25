import styled from 'styled-components';
import { CustomBtnContainer } from '../CustomBtn/CustomBtn-styled';

export const SignInContainer = styled.div`
   width: 380px;
   display: flex;
   flex-direction: column;
`;

export const SignInBtnsContainer = styled.div`
   display: flex;
   justify-content: space-between;

   @media only screen and (max-width: 1000px) {
      flex-direction: column;

      & ${CustomBtnContainer} {
         margin-bottom: 10px;
         align-self: center;
         width: 60%;
      }
   }
   
`;