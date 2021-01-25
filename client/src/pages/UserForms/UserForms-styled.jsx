import styled from 'styled-components';
import { CustomBtnContainer } from '../../components/CustomBtn/CustomBtn-styled';
import { SignInContainer } from '../../components/SignIn/SignIn-styled';


export const UserformContainer = styled.div`
   width: 850px;
   display: flex;
   justify-content: space-between;
   margin: 30px auto;

   @media only screen and (max-width: 1000px) {
      margin: auto;
      width: 95%;

      div {
         width: 300px;
      }
   }
   @media only screen and (max-width: 800px) {
      flex-direction: column;
      align-items: center;

      div {
         width: 90%;
      }

      ${SignInContainer} {
         margin-bottom: 30px;
      }

      ${CustomBtnContainer} {
         min-width: 200px;
      }
   }
`;