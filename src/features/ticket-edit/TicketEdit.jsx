import React from 'react';
import { connect } from 'react-redux';
import {
  setDescription as setDescriptionAction,
  setStatus as setStatusAction,
  reset as resetAction,
  setEditing as setEditingAction,
} from './TicketEdit.slice';
import { deleteTicket as deleteTicketAction } from '../ticket-list/TicketList.slice';
import StatusDropdown from '../../components/status-dropdown/StatusDropdown';
import { updateTicket as updateTicketAction } from '../ticket-list/TicketList.slice';

const TicketEdit = ({
  ticket,
  setDescription,
  updateTicketStatus,
  deleteTicket,
  setStatus,
  reset,
  updateTicketDescription,
}) => {
  const { customer, phone, status, description, id } = ticket;

  if (id === -1) {
    return <p>Kein Ticket ausgewählt.</p>;
  }

  const handleSubmit = e => {
    e.preventDefault();

    updateTicketDescription(ticket, description);
  };

  const handleDelete = () => {
    if (window.confirm('Ticket löschen?')) {
      deleteTicket(id);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col col-10 row gap-3">
          <div className="col col-5">
            <span className="row">Status:</span>
            <span className="row">
              <StatusDropdown
                value={status}
                onChange={e => {
                  setStatus(e.target.value);
                  updateTicketStatus(ticket, e.target.value);
                }}
              />
            </span>
          </div>
          <div className="col col-2">
            <span className="row">Kundennummer:</span>
            <span className="row">{customer}</span>
          </div>
          <div className="col col-2">
            <span className="row">Telefonnummer:</span>
            <span className="row">{phone}</span>
          </div>
        </div>
        <div className="float-end col text-end">
          <div className="btn-group">
            <button type="submit" className="btn btn-success">
              Speichern
            </button>
            <button className="btn btn-secondary" onClick={reset}>
              Abbrechen
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Löschen
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <textarea
          style={{ height: '16rem' }}
          className="form-control"
          onChange={e => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  ticket: state.TicketEdit.ticket,
});

const mapDispatchToProps = dispatch => ({
  setDescription: value => dispatch(setDescriptionAction(value)),
  setStatus: value => dispatch(setStatusAction(value)),
  deleteTicket: id => dispatch(deleteTicketAction(id)),
  updateTicketStatus: (ticket, status) =>
    dispatch(updateTicketAction({ ...ticket, status })),
  updateTicketDescription: (ticket, description) =>
    dispatch(updateTicketAction({ ...ticket, description })),
  setEditing: id => dispatch(setEditingAction()),
  reset: () => dispatch(resetAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketEdit);
