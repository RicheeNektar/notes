import React, { useState } from 'react';
import {
  setCustomer as setCustomerAction,
  setDescription as setDescriptionAction,
  setStatus as setStatusAction,
  setPhone as setPhoneAction,
  setDate as setDateAction,
} from '../create-ticket/CreateTicket.slice';
import { createTicket as createTicketAction } from '../ticket-list/TicketList.slice';
import { connect } from 'react-redux';
import StatusDropdown from '../../components/status-dropdown/StatusDropdown';

const CreateTicket = ({
  className,
  form: { customer, description, status, phone, date },
  setCustomer,
  setDescription,
  setStatus,
  setPhone,
  setDate,
  createTicket,
}) => {
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (!(customer && description && phone) || status === '') {
      setSubmitted(true);
      return;
    }

    createTicket({
      createdAt: date,
      customer,
      description,
      status,
      phone,
    });

    setDate(new Date().toISOString().substring(0,10));
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <label className="row form-label">
        <span className="col">Kundennummer:</span>
        <div className="col col-9">
          <input
            name="customer"
            className={`form-control${
              isSubmitted && !customer ? ' is-invalid' : ''
            }`}
            value={customer}
            onChange={e => {
              setSubmitted(false);
              setCustomer(e.target.value);
            }}
          />
        </div>
      </label>
      <label className="row form-label">
        <span className="col">Telefonnummer:</span>
        <div className="col col-9">
          <input
            name="phone"
            className={`form-control${
              isSubmitted && !phone ? ' is-invalid' : ''
            }`}
            value={phone}
            onChange={e => {
              setSubmitted(false);
              setPhone(e.target.value);
            }}
          />
        </div>
      </label>
      <label className="row form-label">
        <span className="col">Notiz:</span>
        <div className="col col-9">
          <textarea
            name="description"
            className={`form-control${
              isSubmitted && !description ? ' is-invalid' : ''
            }`}
            value={description}
            onChange={e => {
              setSubmitted(false);
              setDescription(e.target.value);
            }}
            style={{ maxHeight: '16rem' }}
          />
        </div>
      </label>
      <label className="row form-label">
        <span className="col">Status:</span>
        <div className="col col-9">
          <StatusDropdown
            includeEmpty
            validate={isSubmitted}
            value={status}
            onChange={e => {
              setSubmitted(false);
              setStatus(e.target.value);
            }}
          />
        </div>
      </label>
      <label className="row form-label">
        <span className="col">Datum:</span>
        <div className="col col-9">
          <input
            name="date"
            type="date"
            className={`form-control${
              isSubmitted && !phone ? ' is-invalid' : ''
            }`}
            value={date}
            onChange={e => {
              setSubmitted(false);
              setDate(e.target.value);
            }}
          />
        </div>
      </label>
      <button type="submit" className="btn btn-success">
        Ticket anlegen
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  tickets: state.Tickets.tickets,
  form: {
    customer: state.CreateTicket.form.customer,
    description: state.CreateTicket.form.description,
    status: state.CreateTicket.form.status,
    phone: state.CreateTicket.form.phone,
    date: state.CreateTicket.form.date,
  },
});

const mapDispatchToProps = dispatch => ({
  setCustomer: value => dispatch(setCustomerAction(value)),
  setDescription: value => dispatch(setDescriptionAction(value)),
  setStatus: value => dispatch(setStatusAction(value)),
  setPhone: value => dispatch(setPhoneAction(value)),
  setDate: value => dispatch(setDateAction(value)),
  createTicket: ticket => dispatch(createTicketAction(ticket)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicket);
