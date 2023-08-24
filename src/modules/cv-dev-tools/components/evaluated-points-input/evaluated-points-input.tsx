import { TextInput } from 'components/index'
import { InputRating } from 'components/index'
import { AddButton } from 'components/index'
import { useActions } from '@/hooks/index'
import { useAppSelector } from '@/hooks/index'

function EvaluatedPointsInput({ idx, title, handleTitle }: { idx: number, title: string, handleTitle: Function }) {
  const { addEvaluatedPoint, updateRating, updateTitle } = useActions()
  const { evaluatedPoints } = useAppSelector(state => state.evaluatedPointsReducer.skills[idx]) 

  return (
    <div className='rounded-lg px-2 bg-sky-950 bg-opacity-50 mb-4'>
      <TextInput value={title} textType='uppercase' className='mb-1' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTitle({ idx: idx, newTitle: e.target.value })}/>
      <div className='flex gap-x-2 flex-wrap items-start justify-between mx-auto w-full'>
        { evaluatedPoints.map((el) => 
        
        <InputRating 
        key={el.id}
        id={el.id}
        title={el.title}
        rating={el.rating}
        idx={ idx }
        handleRating={ updateRating }
        handleTextValue={ updateTitle }
        />
        ) }

        <AddButton addValue={ () => addEvaluatedPoint({ idx: idx }) }/>
      </div>
    </div>
  )
}

export default EvaluatedPointsInput