import React from 'react';
import { Content, ButtonSet, Button } from 'carbon-components-react';
import EventDetailForm from '../Event/EventDetails';
import EventHeader from '../Event/EventHeader';

const Body = () => (
  <Content class="bx--content">
    <div class="bx--grid">
      <div class="bx--row">
        <div class="bx--offset-lg-3 bx--col-lg-13 mainContent">
          <div class="bx--col-lg-8">
            <EventHeader />
            <EventDetailForm
              title="Event date"
              paragraph="Start and end date of the event displayed on the event page.
            Sessions between these two dates are listed on the event page
            under the Schedule tab."
              firstDateLabel="Event start"
              secondDateLabel="Event end"
              firstValue="28/09/2021"
              secondValue="28/09/2021"
            />
            <EventDetailForm
              title="Event page"
              paragraph=" Opening the event page turns your channel page into your
            event's landing page."
              firstDateLabel="Event page opens"
              secondDateLabel="Event page closes"
              firstValue="26/09/2021"
              secondValue="28/09/2021"
            />
            <ButtonSet>
              <Button kind="primary">Save</Button>
              <Button kind="secondary">Cancel</Button>
            </ButtonSet>
          </div>
        </div>
      </div>
    </div>
  </Content>
);

export default Body;
