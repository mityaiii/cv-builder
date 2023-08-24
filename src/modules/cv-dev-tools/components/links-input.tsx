import { useActions, useAppSelector } from '@/hooks/index'
import { AddButton, TextInputWithIcon } from 'components/UI'

const LinksInput = () => {
  const { links } = useAppSelector(state => state.linksReducer)
  const { addLink, updateIconLinkSrc, updateLink } = useActions()

  return (
    <div className='rounded-lg bg-sky-950 bg-opacity-50 px-2 mb-1 pb-[2px]'>
      <h2 className='pt-3 text-sm text-white text-center uppercase'> Hrefs to messengers </h2>
      <ul>
      { links.map((el, idx)  => 
        <li key={el.id}>
          <TextInputWithIcon 
          value={el.link} 
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => updateLink(e.target.value) } 
          updateIconSrc={ updateIconLinkSrc }
          idx={idx}
          iconSrc={el.iconSrc}/>
        </li>
      ) }
      </ul>
      <AddButton addValue={ addLink } className='block mx-auto'></AddButton>
    </div>
  )
}

export default LinksInput