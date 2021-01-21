import React from 'react';
import MenuItem from '../MenuItem/MenuItem-component';
import LoadSpinner from '../LoadSpinner/LoadSpinner-component';
import DIRECTORY_DATA from './directory-data';
import { DirectoryMenuContainer } from './Directory-styled';

// Code here is solely for practice. 
// There is no beneficial reason to cache directory data to apollo cache, 
// because it can be imported and used directly, and it's only used in this component.

class Directory extends React.Component {

   componentDidMount() {
      const { directory, loadDir } = this.props;
      // Cache directory data on first access
      if(!directory?.section) loadDir(DIRECTORY_DATA);
   }

   render() {
      const { directory } = this.props;
      return !directory?.section 
      ? <LoadSpinner /> 
      : (<DirectoryMenuContainer>
            {directory.section.map(({ id, ...othSectProps }) => (
               <MenuItem 
                  key={id} 
                  {...othSectProps} />
            ))}
         </DirectoryMenuContainer>
         );
   }
};

export default Directory;