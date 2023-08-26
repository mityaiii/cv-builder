import { EvaluatedPoint as EvaluatedPointType } from '@/store/index'
import EvaluatedPoint from './evaluated-point'

const EvaluatedPoints = ({ title, evaluatedPoints }: { title: string, evaluatedPoints: Array<EvaluatedPointType> }) => {
  return (
    <div>
      <h2 className='mt-[1rem] text-white text-2xl uppercase text-center'>{ title }</h2>
      { evaluatedPoints.map((el: EvaluatedPointType) => 
        <EvaluatedPoint key={el.id} title={ el.title } rating={el.rating}/>) }
    </div>
  )
}

export default EvaluatedPoints