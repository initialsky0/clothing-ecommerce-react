import React, { useContext } from 'react';
import MenuItem from '../MenuItem/MenuItem-component';
import DirectoryContext from '../../contexts/directory/directory-context';
import { DirectoryMenuContainer } from './Directory-styled';


const Directory = () => {
   const {section} = useContext(DirectoryContext);
   return (
      <DirectoryMenuContainer>
         {section.map(({ id, ...othSectProps }) => (
            <MenuItem 
               key={id} 
               {...othSectProps} />
         ))}
      </DirectoryMenuContainer>
   );
};

export default Directory;