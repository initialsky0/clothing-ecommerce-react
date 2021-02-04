import { useEffect, useRef } from 'react';

export const useInitCollections = (toggleFixedHeader, showHeader, headerFixed, headerHidden, itemCount) => {
   useEffect(() => {
      // Initiate sticky header
      toggleFixedHeader();
      return () => {
         toggleFixedHeader();
         showHeader();
      };
   }, [toggleFixedHeader, showHeader]);

   const headerHiddenRef = useRef(null);
   headerHiddenRef.current = headerHidden;
   useEffect(() => {
      // Show header if item count updates
      if(headerFixed && headerHiddenRef.current && itemCount) {
         showHeader();
      }
   }, [headerFixed, itemCount, showHeader]);
};