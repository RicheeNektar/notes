import { Status, Translations } from '../../util/Status';
import React from 'react';

const StatusDropdown = ({ validate, value, onChange, includeEmpty }) => (
  <select
    name="status"
    className={`form-select${
      includeEmpty && validate && value === '' ? ' is-invalid' : ''
    }`}
    value={value}
    onChange={onChange}
  >
    {includeEmpty && <option value="">Bitte wählen</option>}
    {Status.map(status => (
      <option key={status} value={status}>
        {Translations[status]}
      </option>
    ))}
  </select>
);

export default StatusDropdown;
