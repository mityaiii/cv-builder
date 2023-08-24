import { createSlice } from "@reduxjs/toolkit";

export type LinkWithIcon = {
  id: number;
  link: string;
  iconSrc: string | null;
}

interface ILinksWithIcon {
  links: Array<LinkWithIcon>;
}

const initialState: ILinksWithIcon = {
  links: [{ id: 0, link: '', iconSrc: null }]
}

export const LinksWithIconSlice = createSlice({
  name: 'linkWithIcon',
  initialState,
  reducers: {
    addLink: (state, action) => {
      const id = state.links.length === 0 ? 0 : state.links[state.links.length - 1].id + 1;
      const newValue: LinkWithIcon = { id: id, link: '', iconSrc: null }
      state.links = [...state.links, newValue];
    },
    updateLink: (state, action) => {
      const { idx, link } = action.payload
      state.links[idx].link = link
    },
    updateIconLinkSrc: (state, action) => {
      console.log(action)
      const { idx, iconSrc } = action.payload
      state.links[idx].iconSrc = iconSrc
    },
    removeLink: (state, action) => {

    }
  }
})

export const { actions, reducer } = LinksWithIconSlice