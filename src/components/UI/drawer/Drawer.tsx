import React, { useState } from 'react'
import { DrawerButton } from '..'

const Drawer = ({ element } : { element: React.ReactNode }) => {
  const [ isActive, setIsActive ] = useState(true)

  return (
  <div className='fixed flex items-center z-50'>
    { isActive ? element : <div className='min-h-screen h-full w-0'/> }
    <DrawerButton
     className={ '' }
     state={ isActive } 
     promise={ (e) => {
      e.preventDefault();
      setIsActive(!isActive)}}
     />
  </div>
  )
}

export default Drawer