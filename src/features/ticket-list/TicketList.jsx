import React from 'react';
import { connect } from 'react-redux';
import { ColorMap, Translations } from '../../util/Status';
import { setEditing as setEditingAction } from '../ticket-edit/TicketEdit.slice';

const TicketList = ({ tickets, setEditing, editing }) => {
  let tmpYear, tmpMonth, tmpDate;

  const renderTickets = () =>
    tickets
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
              <td>{new Date(year, month, date).toLocaleDateString()}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          );
        }

        return (
          <>
            {divider}
            <tr key={id}>
              <td className="text-center">
                <button
                  className={`btn ${
                    editing === id ? 'btn-primary' : 'btn-secondary'
                  }`}
                  onClick={() => setEditing(ticket)}
                >
                  <i className="bi-pencil"></i>
                </button>
              </td>
              <td className="text-end">{customer}</td>
              <td className="text-center">
                <span className={`badge ${ColorMap[status]}`}>
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
            <th></th>
            <th>Kundennummer</th>
            <th>Status</th>
            <th>Notiz</th>
            <th>Telefonnumer</th>
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
});

const mapDispatchToProps = dispatch => ({
  setEditing: ticket => dispatch(setEditingAction(ticket)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
