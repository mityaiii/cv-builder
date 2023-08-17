import React from 'react';
import { IContainerType, containerTypeMap } from './types.Container';

const Container: React.FC<IContainerType> = ({ type, className='', children }) => {
  return(
    <div className={`${containerTypeMap[type]} ${className}`}>
      { children }
    </div>
  )
}

export default Container