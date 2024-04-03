import { createSlice } from '@reduxjs/toolkit';

const ticket = {
  createdAt: null,
  description: '',
  customer: '',
  phone: '',
  status: '',
  id: -1,
};

const initialState = {
  ticket,
};

const slice = createSlice({
  name: 'TicketEdit',
  initialState,
  reducers: {
    reset: state => {
      state.ticket = ticket;
    },
    setDescription: (state, { payload }) => {
      state.ticket.description = payload;
    },
    setStatus: (state, { payload }) => {
      state.ticket.status = payload;
    },
    setEditing: (state, { payload }) => {
      state.ticket.createdAt = payload.createdAt;
      state.ticket.description = payload.description;
      state.ticket.customer = payload.customer;
      state.ticket.phone = payload.phone;
      state.ticket.status = payload.status;
      state.ticket.id = payload.id;
    },
  },
});

export const { setDescription, setStatus, setEditing, reset } = slice.actions;
export default slice.reducer;
