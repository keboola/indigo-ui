import React from 'react';
import {storiesOf} from '@storybook/react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';


storiesOf('Input')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <FormGroup>
                <FormControl type="text" placeholder="Normal text"/>
            </FormGroup>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'with validation',
        'Fancy demo here: https://react-bootstrap.github.io/components.html#forms',
        () => (

            <FormGroup controlId="formValidationSuccess1" validationState="success">
                <ControlLabel>Input with success</ControlLabel>
                <FormControl type="text"/>
                <HelpBlock>Help text with validation state.</HelpBlock>
            </FormGroup>
        ),
        {
            inline: true,
        }
    )

;
