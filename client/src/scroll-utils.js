import { useEffect } from "react";

// Have to use addEventListener because the scrolling is on document, not on the component.

/* 
   Note:
   Content total height = document.body.clientHeight || document.body.scrollHeight
   Screen size = window.screen.height || window.innerHeight
   Actual offset(position on top of the window) = window.pageYOffset
   
   Therefore at the end of the page:
   document.body.scrollHeight = window.pageYOffset + window.innerHeight
   Or: 
   const maxScrollOffsetY = document.body.scrollHeight - window.innerHeight
*/

export const checkScrollable = (scrollHandler, mount, force, offset = 0) => {
   // Add scroll eventlistener if page is scrollable and mount is true 
   // Remove any scroll eventlistener with scrollHandler if page is not scrollable, or mount is false
   // force will enforce scroll listener disregard any condition
   if((document.body.scrollHeight > window.innerHeight + offset && mount) || force) {
      // console.log('initiate scroll event listener');
      document.addEventListener('scroll', scrollHandler);
   } else {
      // console.log('unmount');
      document.removeEventListener('scroll', scrollHandler);
   }
};


// Function to catch scroll begin and scroll end
export const scrollStartAndEnd = (delay) => {
   let timer = null;
   return () => {
      if(timer !== null) {
         clearTimeout(timer);
      } else {
         // Scroll start
         console.log('Start position:', window.pageYOffset);
      }
      timer = setTimeout(() => {
         // Scroll end
         console.log('End position:', window.pageYOffset);
         timer = null;
      }, delay);
   };
};

// Function for knowing scrolling state
export const initScrollState = () => {
   // Returns a function for determining y-axis scroll state represented with int
   // 0 = did not scroll, 1 = scroll down, -1 = scroll up
   let prevPosition = window.pageYOffset;
   return () => {
      if(prevPosition === window.pageYOffset) {
         return 0;
      } else if(prevPosition < window.pageYOffset) {
         prevPosition = window.pageYOffset;
         return 1;
      } else {
         prevPosition = window.pageYOffset;
         return -1;
      }
   };
};

// Function for scroll distance detection with delay
export const initScrollDelay = (threshold = 0) => {
   let startPosition = null;
   return (delay, callfunc) => {
      if(startPosition === null) {
         startPosition = window.pageYOffset;
         return setTimeout(() => {
            const displacement = window.pageYOffset - startPosition
            if(displacement > 0 && displacement > threshold) {
               // Condition for scroll down and greater than threshold
               callfunc();
            } else if(displacement < 0 && displacement < threshold) {
               // Condition for scroll up and greater than threshold
               callfunc();
            }
            startPosition = null;
         }, delay);
      }
   }
}

// Custom Hook effect used for sticky header in shopPage collections
export const useScrollEffect = (headerHidden, showHeader, hideHeader) => {

   useEffect(() => {
      // Setup scroll control
      const getScrollState = initScrollState();
      const scrollHandler = () => {
         if(window.pageYOffset === 0 && headerHidden) {
            showHeader();
            return;
         }
         const scrollState = getScrollState();
         if(scrollState > 0 && !headerHidden) {
            hideHeader();
            return;
         } else if(scrollState < 0 && headerHidden) {
            showHeader();
         }
      };

      // Effect
      checkScrollable(scrollHandler, true, true);
      return () => checkScrollable(scrollHandler);
   }, [headerHidden, hideHeader, showHeader]);
}