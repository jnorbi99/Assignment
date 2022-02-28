import React, { Fragment } from 'react';
import { DatePicker, DatePickerInput } from 'carbon-components-react';

const EventDetailForm = props => (
  <Fragment>
    <p>
      <strong>{props.title}</strong>
    </p>
    <p class="smallSpace">{props.paragraph}</p>
    <DatePicker
      dateFormat="d/m/Y"
      datePickerType="calendar"
      class="smallSpace datePicker">
      <DatePickerInput
        id="date-picker-default-id"
        placeholder="dd/mm/yyyy"
        labelText={props.firstDateLabel}
        type="text"
        value={props.firstValue}
      />
    </DatePicker>
    <DatePicker
      dateFormat="d/m/Y"
      datePickerType="calendar"
      class="largeSpace datePicker label">
      <DatePickerInput
        id="date-picker-default-id"
        placeholder="dd/mm/yyyy"
        labelText={props.secondDateLabel}
        type="text"
        value={props.secondValue}
      />
    </DatePicker>
  </Fragment>
);

export default EventDetailForm;
