import { AddButton } from "components/UI"
import { useAppSelector } from "@/hooks/store.hooks"
import { useActions } from "@/hooks/useActions"
import EvaluatedPointsInput from "./evaluated-points-input/evaluated-points-input"
import InputField from "./input-field"

function SkillsInput() {
  const { skills } = useAppSelector(state => state.evaluatedPointsReducer)
  const { addSkill, updateSkillTitle } = useActions()

  return (
    <InputField addValue={addSkill}>
      <h2 className="text-white text-center text-sm pt-3 uppercase"> Short info </h2>
      { skills.map((el, idx) =>
      <EvaluatedPointsInput 
        key={ el.id } 
        idx={ idx } 
        title={ el.title } 
        handleTitle={ updateSkillTitle }
      /> 
      ) }
    </InputField>
  )
}

export default SkillsInput