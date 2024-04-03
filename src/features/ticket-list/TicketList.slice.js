import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
};

const slice = createSlice({
  name: 'Tickets',
  initialState,
  reducers: {
    createTicket: (state, { payload }) => {
      state.tickets.push(payload);
    },
    deleteTicket: (state, { payload }) => {
      state.tickets = [
        ...state.tickets.slice(0, payload),
        ...state.tickets.slice(payload + 1),
      ];
    },
    updateTicket: (state, { payload: ticket }) => {
      state.tickets[ticket.id] = {
        ...ticket,
      };
    },
  },
});

export const { createTicket, deleteTicket, updateTicket } = slice.actions;
export default slice.reducer;
