import React, { useState } from 'react';


const Pin = ({ size, imgsrc, link, name}) => {
  const [isLarge, setIsLarge] = useState(false);

  const handleClick = () => {
    setIsLarge(prevIsLarge => !prevIsLarge);  
  };
  return (
    <div className={`pin pin-${size}`} onClick={handleClick}>
      <div className='demo'> 
      <a href={link} target="_blank" rel="noopener noreferrer">
      <img
          className={`mainPic ${isLarge ? 'large' : ''}`}
          src={imgsrc}
          alt=''
          onClick={handleClick}
        />
      </a>
      </div>
      {/* <div className="content">
       
      
         <div className="icon">
        <h4>{name}</h4>
           <a href={link}>
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPXMSE91ghVf-czJGaLZDsjZXXk8n6fBz0OQ&s"
          alt=""
          />
          </a> 
          <h4>jdj</h4>

        </div>
      </div>  */}
    </div>
  );
};

export default Pin;
