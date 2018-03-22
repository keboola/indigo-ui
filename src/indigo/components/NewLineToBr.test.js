import React from 'react';

import { snapshot } from "../../tests";
import NewLineToBr from './NewLineToBr';

describe('<NewLineToBr />', () => {

  it('NewLineToBr - default', () => {
    snapshot(<NewLineToBr text={"one\ntwo\nthree"}/>);
  });

  it('NewLineToBr - no newline', () => {
    snapshot(<NewLineToBr text={"one"}/>);
  });

});
