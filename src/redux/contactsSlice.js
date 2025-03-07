import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {items: []},
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;


  