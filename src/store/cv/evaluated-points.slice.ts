import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type EvaluatedPoint = {
  id: number;
  title: string;
  rating: number;
} 

type Skill = {
  id: number;
  title: string;
  evaluatedPoints: Array<EvaluatedPoint>
}

interface ISkills {
  skills: Array<Skill>;
}

interface IUpdatedRatingPayload {
  id: number;
  idx: number;
  newRating: number;
}

const initialState: ISkills = {
  skills: [{ id: 1, title: '', evaluatedPoints: []}]
}

export const evaluatedPointsSlice = createSlice({
  name: 'evaluatedPoints',
  initialState,
  reducers: {
    addEvaluatedPoint: (state, action) => {
      const { idx } = action.payload;

      const id = state.skills[idx].evaluatedPoints.length === 0 ? 0 : state.skills[idx].evaluatedPoints[state.skills[idx].evaluatedPoints.length - 1].id + 1;
      const newValue: EvaluatedPoint = { id: id, title: '', rating: 1 }
      state.skills[idx].evaluatedPoints = [...state.skills[idx].evaluatedPoints, newValue]
    },
    delEvaluatedPoint: (state, action) => {
      const { idx, title } = action.payload;
      state.skills[idx].evaluatedPoints = state.skills[idx].evaluatedPoints.filter((el) => title !== el.title)
    },
    updateRating: (state, action: PayloadAction<IUpdatedRatingPayload>) => {
      const { id, idx, newRating } = action.payload;
      for (let i = 0; i < state.skills[idx].evaluatedPoints.length; ++i) {
        if (state.skills[idx].evaluatedPoints[i].id == id)  {
          state.skills[idx].evaluatedPoints[i].rating = newRating;
          break;
        } 
      }
    },
    updateTitle: (state, action) => {
      console.log(action.payload)
      const { id, idx, title } = action.payload
      for (let i = 0; i < state.skills[idx].evaluatedPoints.length; ++i) {
        if (state.skills[idx].evaluatedPoints[i].id == id)  {
          state.skills[idx].evaluatedPoints[i].title = title
          break;
        } 
      }
    },
    addSkill: (state, action) => {
      const id = state.skills.length === 0 ? 0 : state.skills[state.skills.length - 1].id + 1;
      const newValue: Skill = { id: id, title: '', evaluatedPoints: [] }
      state.skills = [...state.skills, newValue]
    },
    delSkill: (state, action) => {
      state.skills = state.skills.filter((el) => action.payload !== el.title)
    },
    updateSkillTitle: (state, action) => {
      const { idx, newTitle } = action.payload;
      state.skills[idx].title = newTitle;
    },
  }
})

export const { actions, reducer } = evaluatedPointsSlice