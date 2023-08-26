import { createSlice } from "@reduxjs/toolkit";

export type ContactWithIcon = {
  id: number;
  title: string;
  iconSrc: string | null;
}

interface IContactsWithIcon {
  contacts: Array<ContactWithIcon>;
}

const initialState: IContactsWithIcon = {
  contacts: [{ id: 0, title: '', iconSrc: null }]
}

export const contactsWithIconSlice = createSlice({
  name: 'contactWithIcon',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const id = state.contacts.length === 0 ? 0 : state.contacts[state.contacts.length - 1].id + 1;
      const newValue: ContactWithIcon = { id: id, title: '', iconSrc: null }
      state.contacts = [...state.contacts, newValue];
    },
    updateContact: (state, action) => {
      const { idx, newTitle } = action.payload
      state.contacts[idx].title = newTitle
    },
    updateIconSrc: (state, action) => {
      const { idx, iconSrc } = action.payload
      state.contacts[idx].iconSrc = iconSrc
    },
    removeContact: (state, action) => {

    }
  }
})

export const { actions, reducer } = contactsWithIconSlice