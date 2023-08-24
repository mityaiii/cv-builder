import { AddButton } from "components/UI"
import { useAppSelector } from "@/hooks/store.hooks"
import { useActions } from "@/hooks/useActions"
import EvaluatedPointsInput from "./evaluated-points-input/evaluated-points-input"


function SkillsInput() {
  const { skills } = useAppSelector(state => state.evaluatedPointsReducer)
  const { addSkill, updateSkillTitle } = useActions()

  return (
    <div>
      { skills.map((el, idx) =>
      <EvaluatedPointsInput key={ el.id } idx={ idx } title={ el.title } handleTitle={ updateSkillTitle } /> 
      ) }
      <AddButton className='block mx-auto w-[60%]' addValue={ addSkill }/>
    </div>
  )
}

export default SkillsInput