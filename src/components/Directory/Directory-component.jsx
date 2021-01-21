import React from 'react';
import MenuItem from '../MenuItem/MenuItem-component';
import DIRECTORY_DATA from './directory-data';
import { DirectoryMenuContainer } from './Directory-styled';


const Directory = () => (
   <DirectoryMenuContainer>
      {DIRECTORY_DATA.section.map(({ id, ...othSectProps }) => (
         <MenuItem 
            key={id} 
            {...othSectProps} />
      ))}
   </DirectoryMenuContainer>
);


export default Directory;