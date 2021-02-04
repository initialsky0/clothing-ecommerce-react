import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// const OptionContainerStyles = css`
//    padding: 10px 15px;
//    cursor: pointer;
// `;

const headerFixedStyles = css`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 10;
   background: white;
   height: 80px;
   padding: 0 60px;
`;

const headerContainerStyles = css`
   height: 70px;
   width: 100%;
   margin-bottom: 25px;

   @media only screen and (max-width: 800px) {
      height: 60px;
      padding: 10px;
      margin-bottom: 20px;
   }
`;

const headerAnimationDown = css`
   @keyframes dropdownHeader {
      from{
         transform: translateY(-100%);
         display: flex;
      }
      to{
         transform: translateY(0);
      }
   }

   animation: dropdownHeader .3s forwards;
`;

const headerAnimationUp = css`
   @keyframes slideUpHeader {
      from{
         transform: translateY(0);
      }
      to{
         transform: translateY(-100%);
         display: none;
      }
   }

   animation: slideUpHeader .3s forwards;
`;

export const HeaderContainer = styled.div`
   position: relative;
   z-index: 1;
   display: flex;
   justify-content: space-between;
   ${headerContainerStyles};
   ${({headerFixed}) => (headerFixed ? headerFixedStyles : null)};
   ${({headerHidden}) => headerHidden ? headerAnimationUp : headerAnimationDown};
   
`;

export const HeaderPlaceholder = styled.div`
   display: ${({headerFixed}) => (headerFixed ? 'block' : 'none')};
   ${headerContainerStyles};
`;

export const LogoContainer = styled(Link)`
   height: 100%;
   width: 70px;
   display: flex;
   justify-content: center;
   align-items: center;

   @media only screen and (max-width: 800px) {
      padding: 5px;
      width: 50px;
   }
`;

export const OptionsContainer = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   @media only screen and (max-width: 800px) {
      width: 80%;
   }
`;

// Same style but different container type
export const OptionLink = styled(Link)`
   padding: 10px 15px;
   cursor: pointer;

   @media only screen and (max-width: 380px) {
      padding: 10px 5px;
   }
`;

// export const OptionDiv = styled.div`
//    ${OptionContainerStyles}
// `;