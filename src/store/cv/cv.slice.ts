import { createSlice } from '@reduxjs/toolkit'

interface cvDataState {
  initials: string;
  imgSrc: string;
  bgColor: string;
  scale: number;
}

const initialState: cvDataState = {
  initials: 'Your Name',
  imgSrc: '',
  bgColor: '#b23838', 
  scale: 1, 
}

export const cvDataSlice = createSlice({
  name: 'cvData',
  initialState,
  reducers: {
    setInitials: (state, action) => {
      state.initials = action.payload
    },
    setScale: (state, action) => {
      state.scale = action.payload
    },
    setImageSrc: (state, action) => {
      state.imgSrc = action.payload
    },
    setColor: (state, action) => {
      state.bgColor = action.payload
    }
  },
})

export const { actions, reducer } = cvDataSlice
