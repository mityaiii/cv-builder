import React from 'react'
import { ChildrenType } from 'types'

const Button: React.FC<any> = ({ promise, children }: { promise: () => void, children: ChildrenType }) => {
  return (
    <button className='block mx-auto rounded-xl h-12 w-48 bg-white duration-200 transition-colors hover:bg-slate-400' onClick={() => { promise() }}>{ children }</button>
  )
}

export default Button