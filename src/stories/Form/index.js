import React from 'react';
import {storiesOf} from '@storybook/react';
import {FormGroup, FormControl, ControlLabel, HelpBlock, FieldGroup, Checkbox, Radio, Button} from 'react-bootstrap';


storiesOf('Form')
    .addWithInfo(
        '🆕 Form horizontal responsive',
        'Desc',
        () => (
            <form className="form-horizontal">
                <FormGroup>
                    <ControlLabel className="col-sm-2">Select</ControlLabel>
                    <div className="col-sm-10">
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">...</option>
                        </FormControl>
                    </div>
                </FormGroup>

                <FormGroup>
                    <ControlLabel className="col-sm-2">Multiple select</ControlLabel>
                    <div className="col-sm-10">
                        <FormControl componentClass="select" multiple>
                            <option value="select">select (multiple)</option>
                            <option value="other">...</option>
                        </FormControl>
                    </div>
                </FormGroup>

                <FormGroup>
                    <ControlLabel className="col-sm-2">Textarea</ControlLabel>
                    <div className="col-sm-10">
                        <FormControl componentClass="textarea" placeholder="textarea"/>
                    </div>
                </FormGroup>

                <FormGroup>
                    <ControlLabel className="col-sm-2">Static text</ControlLabel>
                    <div className="col-sm-10">
                        <FormControl.Static>
                            email@example.com
                        </FormControl.Static>
                    </div>
                </FormGroup>

                <FormGroup>
                    <div className="col-sm-offset-2 col-sm-10">
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </FormGroup>
            </form>
        ),
        {
            inline: true,
        }
    )


;
