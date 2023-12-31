import { useAppSelector } from "@/hooks/index"

const LinksWithIcon = () => {
  const { links } = useAppSelector( state => state.linksReducer )

  return (
    <ul className="flex items-center justify-center gap-x-1">
      { links.map(el => 
        <li key={el.id}> 
          <a href={el.title}>
            { typeof el.iconSrc === 'string' ? <img className='w-[32px] h-[32px]' src={ el.iconSrc }/> : <></> }
          </a>
        </li>  
      ) }

    </ul>
  )
}

export default LinksWithIcon