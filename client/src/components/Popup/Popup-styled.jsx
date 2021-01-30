import styled, {css} from 'styled-components';

export const animatePopupMount = css`
   @keyframes popup-start{
      0% { transform: scale(0); }

      100% { transform: scale(1); }
   }

   animation: popup-start .3s ease-out forwards;
`;

export const animatePopupUnmount = css`
   @keyframes popup-end{
      0% { transform: scale(1); }

      100% { transform: scale(0); }
   }

   animation: popup-end .3s ease-out forwards;
`;

export const PopupOverlayStyles = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background: rgba(0, 0, 0, .85);
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const PopupContainerStyles = styled.div`
   background: #eeeeee;
   width: 650px;
   height: 400px;
   border-radius: 10px;
   box-shadow: 0 5px 30px 3px rgba(255, 255, 255, .5);
   ${({ animateStart }) => animateStart ? animatePopupMount : animatePopupUnmount }

   @media only screen and (max-width: 800px) {
      width: 90%;
      height: 70%;
   }
`;

export const CloseBtnContainer = styled.div`
   position: absolute;
   cursor: pointer;
   right: 2.2%;
   top: 3.5%;
   height: 35px;
   width: 35px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
`;

export const CloseBtnStyles = styled.div`
   position: relative;
   width: 25px;
   height: 1.5px;
   background: #060606;
   transform: rotate(45deg);
   transition: transform .2s;

   &::after {
      position: absolute;
      content: '';
      transform: rotate(-90deg);
      width: 25px;
      height: 1.5px;
      background: #060606;
   }

   ${CloseBtnContainer}:hover & {
      transform: rotate(45deg) scale(1.1);
   }

   ${CloseBtnContainer}:active & {
      transform: rotate(45deg) scale(.9);
   }
`;