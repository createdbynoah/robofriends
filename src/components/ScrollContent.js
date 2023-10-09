import React from 'react';
import './ScrollContent.css';

const ScrollContent = (props) => {
  return <div className="scroll">{props.children}</div>;
};

export default ScrollContent;
