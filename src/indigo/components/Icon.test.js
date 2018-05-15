import React from 'react';

import { snapshot } from "../../tests";
import Icon from './Icon';

describe('<Icon />', () => {

  it('Icon - application', () => {
    snapshot(<Icon iconClass="application"/>);
  });

  it('Icon - calendar', () => {
    snapshot(<Icon iconClass="calendar"/>);
  });


  it('Icon - check', () => {
    snapshot(<Icon iconClass="check"/>);
  });

});
