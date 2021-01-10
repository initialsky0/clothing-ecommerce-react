import React from 'react';
import MenuItem from '../MenuItem/MenuItem-component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirSection } from '../../redux/directory/directory-selectors';
import './Directory-component.scss';

// Class component with redux coded for practice, functional component is implemented
// class Directory extends React.Component {

//    render() {
//       const {section} = this.props;
//       return(
//          <div className="directory-menu">
//             {section.map(({ id, ...othSectProps }) => (
//                <MenuItem 
//                   key={id} 
//                   {...othSectProps} />
//             ))}
//          </div>
//       )
//    }
// }

const Directory = ({section}) => (
   <div className="directory-menu">
      {section.map(({ id, ...othSectProps }) => (
         <MenuItem 
            key={id} 
            {...othSectProps} />
      ))}
   </div>
);

const mapStateToProps = createStructuredSelector({
   section: selectDirSection
});

export default connect(mapStateToProps)(Directory);