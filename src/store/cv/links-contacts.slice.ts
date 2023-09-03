import { createSlice } from "@reduxjs/toolkit";

type LinkWithIcon = {
  id: number;
  title: string;
  iconSrc: string | null;
}

interface ILinksWithIcon {
  links: Array<LinkWithIcon>;
}

const initialState: ILinksWithIcon = {
  links: [{ id: 0, title: '', iconSrc: null }]
}

export const LinksWithIconSlice = createSlice({
  name: 'linkWithIcon',
  initialState,
  reducers: {
    addLink: (state) => {
      const id = state.links.length === 0 ? 0 : state.links[state.links.length - 1].id + 1;
      const newValue: LinkWithIcon = { id: id, title: '', iconSrc: null }
      state.links = [...state.links, newValue];
    },
    updateLink: (state, action) => {
      const { idx, newTitle } = action.payload
      state.links[idx].title = newTitle
    },
    updateIconLinkSrc: (state, action) => {
      const { idx, iconSrc } = action.payload
      state.links[idx].iconSrc = iconSrc
    },
    removeLink: (state, action) => {
      const { idx } = action.payload;
      state.links = state.links.filter((_, i) => i !== idx);
    }
  }
})

export const { actions, reducer } = LinksWithIconSlice