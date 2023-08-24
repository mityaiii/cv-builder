import { useAppSelector } from "@/hooks/store.hooks"
import EvaluatedPoints from "./evaluated-points"

function Skills() {
  const { skills } = useAppSelector(state => state.evaluatedPointsReducer)

  return (
    <div>
      { skills.map((el) => 
        <EvaluatedPoints key={el.id} title={el.title} evaluatedPoints={el.evaluatedPoints}/>
      ) }
    </div>
  )
}

export default Skills