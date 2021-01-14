import styled from 'styled-components';

export const SignUpContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 380px;

   & > h2 { margin: 10px 0; }
`;

// The h2 is originally .title class, 
// but it's the only h2 element inside signup form so
// the style would get combine inside the signupcontainer.
