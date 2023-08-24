import React, { useState } from 'react'
import DrawerButton from './drawer.button'

const Drawer = ({ element }: { element: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(true)

  return (
    <div className='fixed z-50 transition-all duration-300 transform'>
      <div className='h-screen overflow-y-auto scrollbar rtl-grid'>
        <div className='ltr-grid'>
        {isActive ? element : <div className='min-h-screen h-full w-0' />}
        </div>
      </div>
      <DrawerButton
          state={isActive}
          className='fixed top-1/3 right-0 translate-x-7'
          promise={(e) => {
            e.preventDefault();
            setIsActive(!isActive)
          }}
        />
    </div>
  )
}

export default Drawer