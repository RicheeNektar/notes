import { combineReducers } from 'redux';
import TicketSlice from '../features/ticket-list/TicketList.slice';
import CreateTicketSlice from '../features/create-ticket/CreateTicket.slice';
import TicketEditSlice from '../features/ticket-edit/TicketEdit.slice';

const reducers = combineReducers({
  Tickets: TicketSlice,
  CreateTicket: CreateTicketSlice,
  TicketEdit: TicketEditSlice,
});

export default reducers;
