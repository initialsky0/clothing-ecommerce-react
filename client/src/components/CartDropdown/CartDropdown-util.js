export const clickInElement = (element, {pageX, pageY}) => {
   const minX = element.offsetLeft,
         minY = element.offsetTop,
         maxX = minX + element.offsetWidth,
         maxY = minY + element.offsetHeight;
   
   return (pageX >= minX && pageX <= maxX && pageY >= minY && pageY <= maxY) 
      ? true : false;
}