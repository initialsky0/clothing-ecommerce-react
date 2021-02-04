export const clickInElementByPosition = (element, {pageX, pageY}) => {
   const minX = element.offsetLeft,
         minY = element.offsetTop,
         maxX = minX + element.offsetWidth,
         maxY = minY + element.offsetHeight;
   
   return (pageX >= minX && pageX <= maxX && pageY >= minY && pageY <= maxY) 
      ? true : false;
}

export const clickOutsideComponent = (ref, event) => { 
   return ref.current && !ref.current.contains(event.target);
};