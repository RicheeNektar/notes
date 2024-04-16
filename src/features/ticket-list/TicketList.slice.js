import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  dateFilter: '',
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
    setDateFilter: (state, { payload: dateFilter }) => {
      state.dateFilter = dateFilter;
    },
  },
});

export const { createTicket, deleteTicket, updateTicket, setDateFilter } = slice.actions;
export default slice.reducer;
