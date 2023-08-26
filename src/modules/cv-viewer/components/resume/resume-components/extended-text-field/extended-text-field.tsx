import { useAppSelector } from "@/hooks/index"
import ExtendedText from "./extended-text"

function ExtendedTextField() {
  const { extendedTexts } = useAppSelector(state => state.extendedTextReducer)
  const { bgColor } = useAppSelector(state => state.cvReducer)

  return (
    <div className='mt-3'>
      <ul>
        { extendedTexts.map((el) => 
          <li key={el.id}>
            <ExtendedText
              title={ el.title }
              content={ el.content }
              bgColor={ bgColor }
              iconSrc={ el.iconSrc }
            />
          </li>
        ) }
      </ul>
    </div>
  )
}

export default ExtendedTextField