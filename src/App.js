import TicketList from './features/ticket-list/TicketList';
import React from 'react';
import CreateTicket from './features/create-ticket/CreateTicket';
import TicketEdit from './features/ticket-edit/TicketEdit';

function App() {
  return (
    <div className="d-grid gap-3">
      <div className="row d-flex gap-3">
        <TicketList />
        <CreateTicket className="col col-4 bg-dark text-light p-3 rounded" />
      </div>
      <div className="row bg-dark text-light p-3 rounded">
        <TicketEdit />
      </div>
    </div>
  );
}

export default App;
