import { ChildrenType } from 'types'

function Rows ({ children}: { children: ChildrenType }) {
  return (
    <div className="flex justify-betweens">
      { children }
    </div>
  )
}

export default Rows