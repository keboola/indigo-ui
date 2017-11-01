import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from 'react-select';
import Icon from "../../static/common/Icon";



var options = [
    { value: 'one', label: 'One' },
    { value: 'one and half', label: 'One and Half' },
    { value: 'three', label: 'Three' },
    { value: 'two', label: '#89959f' },
    { value: 'two', label: '#373b46' },
    { value: 'two', label: '#22262f' },
    { value: 'two', label: '#1e2129' },
    { value: 'two', label: '#89959f' },
    { value: 'two', label: '#373b46' },
    { value: 'two', label: '#22262f' },
    { value: 'two', label: '#1e2129' },
    { value: 'two', label: '#89959f' },
    { value: 'two', label: '#373b46' }
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
            value="three"
            options={options}
            onChange={logChange}
            placeholder="Select placeholder..."
            arrowRenderer={function() {return (<Icon iconClass="arrow-down">+</Icon>)}}
            clearRenderer={function() {return (<Icon iconClass="times">+</Icon>)}}
        />
    ),
    {
      inline: true,
    }
  )
;
