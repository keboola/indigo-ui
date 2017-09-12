import React from 'react';
import {storiesOf} from '@storybook/react';
import {OverlayTrigger, Popover} from 'react-bootstrap';
import Edit from "../../static/common/QueriesEdit";


const queries = 'CREATE TABLE transformed AS SELECT cars.*, population.POPULATION, (population.POPULATION / cars.CARS) AS PERSON_PER_CAR FROM cars JOIN population On cars.COUNTRY = population.COUNTRY';
const splitQueries = {0: "CREATE TABLE transformed AS SELECT cars.*, population.POPULATION, (population.POPULATION / cars.CARS) AS PERSON_PER_CAR FROM cars JOIN population On cars.COUNTRY = population.COUNTRY"
};
const backend = 'a';
const highlighted = 2;



storiesOf('EditingMode')
    .addWithInfo(
        'default',
        '',
        () => (
            <div>
                <h2>
                    Queries
                    <small>
                        <OverlayTrigger trigger="click" rootClose placement="top" overlay="txt">
                            <i className="fa fa-fw fa-question-circle"/>
                        </OverlayTrigger>

                    </small>
                    <div className="kbc-buttons kbc-save-buttons">
                        <button className="btn btn-default">
                            Save
                        </button>
                    </div>
                </h2>

                <Edit
                    queries={queries}
                    splitQueries={splitQueries}
                    backend={backend}
                    disabled={false}
                    onChange={console.log('onChange')}
                    highlightQueryNumber={1}
                />
            </div>
        ),
        {
            inline: true,
        }
    )