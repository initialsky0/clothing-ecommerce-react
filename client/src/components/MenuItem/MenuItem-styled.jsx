import styled from 'styled-components';

export const BackgroundImgContainer = styled.div`
   width: 100%;
   height: 100%;
   background-image: url(${props => props.imageUrl});
   background-position: center;
   background-size: cover;
`;

export const ContentContainer = styled.div`
   height: 90px;
   padding: 0 25px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border: 1px solid black;
   background-color: rgb(250, 250, 250);
   opacity: .7;
   position: absolute;
`;

export const MenuItemContainer = styled.div`
   min-width: 30%;
   height: ${props => props.size === 'large' ? '380px' : '240px'};
   display: flex;
   flex: 1 1 auto;
   align-items: center;
   justify-content: center;
   border: 1px solid black;
   margin: 0 7.5px 15px;
   overflow: hidden;

   &:first-child { margin-right: 7.5; }

   &:last-child { margin-left: 7.5; }
   
   &:hover {
      cursor: pointer;

      & ${BackgroundImgContainer} {
         transform: scale(1.1);
         transition: transform 6s cubic-bezier(.25, .45, .45, .95);
      }

      & ${ContentContainer} { opacity: .9; }
   }
`;

export const MenuItemTitleContainer = styled.h1`
   font-weight: bold;
   margin-bottom: 6px;
   font-size: 22px;
   color: #4b4b4b;
`;

export const MenuItemSubTitleContainer = styled.span`
   font-weight: lighter;
   font-size: 16px;
`;