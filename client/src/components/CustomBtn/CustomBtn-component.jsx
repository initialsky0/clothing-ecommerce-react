import React from 'react';
import { CustomBtnContainer } from './CustomBtn-styled';

const CustomBtn = ({ children, ...props }) => (
   <CustomBtnContainer {...props}>
      {children}
   </CustomBtnContainer>
);

export default CustomBtn;