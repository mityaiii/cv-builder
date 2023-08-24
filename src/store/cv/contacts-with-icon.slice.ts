import { createSlice } from "@reduxjs/toolkit";

export type ContactWithIcon = {
  id: number;
  contact: string;
  iconSrc: string;
}

interface IContactsWithIcon {
  contacts: Array<ContactWithIcon>;
}

const initialState: IContactsWithIcon = {
  contacts: []
}

export const contactsWithIconSlice = createSlice({
  name: 'contactWithIcon',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const id = state.contacts.length === 0 ? 0 : state.contacts[state.contacts.length - 1].id;
      const newValue: ContactWithIcon = { id: id, contact: '', iconSrc: '' }
      state.contacts = [...state.contacts, newValue];
    },
    updateContact: (state, action) => {

    },
    updateIconSrc: (state, action) => {

    },
    removeContact: (state, action) => {

    }
  }
})

export const { actions, reducer } = contactsWithIconSlice