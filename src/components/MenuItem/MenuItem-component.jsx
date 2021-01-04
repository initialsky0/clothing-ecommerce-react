import React from 'react';
import './MenuItem-style.scss';

const MenuItem = ({ title, imageUrl, size}) => {
   const classList = size ? `${size} menu-item` : 'menu-item';
   return (
      <div className={classList}>
         <div
            className='background-img'
            style={{
               backgroundImage: `url(${imageUrl})`
            }}
         ></div>
         <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
         </div>
      </div>
   )
}

export default MenuItem;