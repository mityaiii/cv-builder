import React, { useState } from 'react'
import DrawerButton from './drawer.button'

const Drawer = ({ element }: { element: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(true)

  return (
    <div className='fixed z-50 flex items-center transition-all duration-300 transform'>
      <div className=''>
        {isActive ? element : <div className='min-h-screen h-full w-0' />}
      </div>
      <DrawerButton
          state={isActive}
          promise={(e) => {
            e.preventDefault();
            setIsActive(!isActive)
          }}
        />
    </div>
  )
}

export default Drawer