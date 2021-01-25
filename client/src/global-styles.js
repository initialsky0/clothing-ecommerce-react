import { createGlobalStyle } from 'styled-components';

/* Custom scrollbar from css-trick included: https://css-tricks.com/custom-scrollbars-in-webkit/ */

export const GlobalStyle = createGlobalStyle`

   * {
      box-sizing: border-box;
   }

   body {
      font-family: 'Open Sans Condensed', sans-serif;
      padding: 20px 60px;

      @media only screen and (max-width: 800px) {
         padding: 10px;
      }
   }

   a {
      text-decoration: none;
      color: black;
   }

   ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
   }

   ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      border-radius: 10px;
   }

   ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); 
   }

`;


