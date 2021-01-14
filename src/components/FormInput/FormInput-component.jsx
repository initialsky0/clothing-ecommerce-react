import React from 'react';
import { GroupContainer, FormInputContainer, FormInputLabelContainer } from './FormInput-styled';

const FormInput = ({ handleChange, label, ...otherProps }) => (
   <GroupContainer>
      <FormInputContainer type="text" onChange={handleChange} {...otherProps} />
      {
         label
            ? (<FormInputLabelContainer 
                  shrink={otherProps.value.length}
               >
                  {label}
               </FormInputLabelContainer>) 
            : null
      }
   </GroupContainer>
)

export default FormInput;