import { ChildrenType } from 'types'

function Rows ({ children }: { children: ChildrenType }) {
  return (
    <div className="flex justify-betweenS">
      { children }
    </div>
  )
}

export default Rows