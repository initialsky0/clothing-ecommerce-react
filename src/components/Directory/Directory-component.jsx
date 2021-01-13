import React from 'react';
import MenuItem from '../MenuItem/MenuItem-component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirSection } from '../../redux/directory/directory-selectors';
import { DirectoryMenuContainer } from './Directory-styled';


const Directory = ({section}) => (
   <DirectoryMenuContainer>
      {section.map(({ id, ...othSectProps }) => (
         <MenuItem 
            key={id} 
            {...othSectProps} />
      ))}
   </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
   section: selectDirSection
});

export default connect(mapStateToProps)(Directory);