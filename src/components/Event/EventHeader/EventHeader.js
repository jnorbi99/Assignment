import React, { Fragment } from 'react';
import { TextInput, Dropdown } from 'carbon-components-react';
import MyBreadCrumb from '../../BreadCrumb';

const EventHeader = () => (
  <Fragment>
    <MyBreadCrumb />
    <h2 class="largeSpace">Edit event</h2>
    <TextInput
      helperText="Displayed as the channel title while the event page is open"
      id="test2"
      invalidText="A valid value is required"
      labelText="Event name"
      value="Revenue reporting Q2"
    />
    <Dropdown
      ariaLabel="Dropdown"
      id="carbon-dropdown-example"
      label="Europe/Budapest"
      titleText="Event time zone"
      class="largeSpace smallSpaceBefore"
    />
  </Fragment>
);

export default EventHeader;
