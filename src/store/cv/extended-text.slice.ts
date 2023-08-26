import { createSlice } from "@reduxjs/toolkit";

type ExtendedText = {
  id: number;
  title: string;
  content: string;
  iconSrc: string | null;
}

interface IExtendedText {
  extendedTexts: Array<ExtendedText>;
}

const initialState: IExtendedText = {
  extendedTexts: [{ id: 0, title: '', content: '', iconSrc: null }]
}

export const ExtendedTextSlice = createSlice({
  name: 'extendedText',
  initialState,
  reducers: {
    addExtendedText: (state, action) => {
      const id = state.extendedTexts.length === 0 ? 0 : state.extendedTexts[state.extendedTexts.length - 1].id + 1;
      const newValue: ExtendedText = { id: id, title: '', content: '', iconSrc: null }
      state.extendedTexts = [...state.extendedTexts, newValue]
    },
    updateExtendedTextTitle: (state, action) => {
      const { idx, newTitle } = action.payload
      state.extendedTexts[idx].title = newTitle
    },
    updateExtendedTextContent: (state, action) => {
      const { idx, content } = action.payload
      state.extendedTexts[idx].content = content
    },
    updateExtendedTextIcon: (state, action) => {
      const { idx, iconSrc } = action.payload
      state.extendedTexts[idx].iconSrc = iconSrc
    },
    removeExtendedText: (state, action) => {

    }
  }
})

export const { actions, reducer } = ExtendedTextSlice;