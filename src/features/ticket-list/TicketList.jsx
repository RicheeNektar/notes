import React from 'react';
import { connect } from 'react-redux';
import { ColorMap, Translations } from '../../util/Status';
import {
  setEditing as setEditingAction,
} from '../ticket-edit/TicketEdit.slice';
import {
  setDateFilter as setDateFilterAction,
} from './TicketList.slice';

const TicketList = ({ tickets, setEditing, editing, setDateFilter, dateFilter }) => {
  let tmpYear, tmpMonth, tmpDate;

  const renderTickets = () =>
    tickets
      .filter(ticket => !dateFilter || dateFilter === ticket.createdAt)
      .map((ticket, id) => ({ ...ticket, id }))
      .sort((a, b) => b.createdAt - a.createdAt)
      .map(ticket => {
        const { createdAt, customer, status, description, phone, id } = ticket;

        const dateTime = new Date(createdAt);
        const year = dateTime.getFullYear();
        const month = dateTime.getMonth();
        const date = dateTime.getDate();

        let divider = undefined;

        if (tmpYear !== year || tmpMonth !== month || tmpDate !== date) {
          tmpYear = year;
          tmpMonth = month;
          tmpDate = date;

          divider = (
            <tr key={createdAt}>
              <td colSpan={5}>{new Date(year, month, date).toLocaleDateString()}</td>
            </tr>
          );
        }

        return (
          <>
            {divider}
            <tr key={id}>
              <td className="text-center">
                <div className="btn-group">
                  <button
                    className={`btn btn-primary ${
                      editing === id && 'active'
                    }`}
                    onClick={() => setEditing(ticket)}
                  >
                    <i className="bi-pencil"></i>
                  </button>
                  <a
                    href={ticket.customer.includes('.') ? 'sfmc' : 'old'}
                    target="_blank"
                    className="btn btn-secondary"
                    onClick={() => setEditing(ticket)}
                  >
                    <i className="bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </td>
              <td>{customer}</td>
              <td className="text-center">
                <span className={`w-100 badge ${ColorMap[status]}`}>
                  {Translations[status]}
                </span>
              </td>
              <td className="text-truncate" style={{ maxWidth: '15rem' }}>
                {description}
              </td>
              <td>{phone}</td>
            </tr>
          </>
        );
      });

  return (
    <div
      className="col rounded overflow-auto bg-dark"
      style={{ height: '50vh', maxWidth: '65vw' }}
    >
      <table className="table table-dark table-borderless table-striped text-light">
        <thead style={{ position: 'sticky', top: 0 }}>
          <tr>
            <th><input className="form-control" type="date" onChange={e => setDateFilter(e.target.value)} value={dateFilter} /></th>
            <th style={{width: '10ch'}}>Kundennummer</th>
            <th className="text-center">Status</th>
            <th style={{width: '256ch'}}>Notiz</th>
            <th style={{width: '48ch'}}>Telefonnumer</th>
          </tr>
        </thead>
        <tbody>{renderTickets()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  tickets: state.Tickets.tickets,
  editing: state.TicketEdit.ticket.id,
  dateFilter: state.Tickets.dateFilter,
});

const mapDispatchToProps = dispatch => ({
  setEditing: ticket => dispatch(setEditingAction(ticket)),
  setDateFilter: date => dispatch(setDateFilterAction(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
