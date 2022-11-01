import React from 'react';

export const Message = ({author, text}) => {
    return(
    <div>
      <hr/>
      <h1>{text}</h1>
      <hr/>
      <p>{author}</p>
    </div>
    )
  };