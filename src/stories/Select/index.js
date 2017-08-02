import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from 'react-select';


var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
}

storiesOf('Select')
  .addWithInfo(
    'KBC - Select',
    'https://github.com/JedWatson/react-select',
    () => (
        <Select
            name="form-field-name"
            value="one"
            options={options}
            onChange={logChange}
        />
    ),
    {
      inline: true,
    }
  )
;
