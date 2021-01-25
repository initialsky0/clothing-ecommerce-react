import React from 'react';
import { withRouter } from "react-router-dom";
import { MenuItemContainer, 
         BackgroundImgContainer, 
         ContentContainer, 
         MenuItemSubTitleContainer, 
         MenuItemTitleContainer } from './MenuItem-styled';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
   return (
      <MenuItemContainer
         size={size}
         onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
         <BackgroundImgContainer imageUrl={imageUrl} />
         <ContentContainer>
            <MenuItemTitleContainer>{title}</MenuItemTitleContainer>
            <MenuItemSubTitleContainer>SHOP NOW</MenuItemSubTitleContainer>
         </ContentContainer>
      </MenuItemContainer>
   )
}

export default withRouter(MenuItem);