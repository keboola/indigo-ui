import React from 'react';
import {storiesOf} from '@storybook/react';
import Icon from "../../static/common/Icon";

const icons = [
    "applications",
    "arrow-down",
    "arrow-vertical",
    "calendar",
    "check",
    "cloud",
    "cloud-download",
    "copy",
    "duration",
    "edit",
    "error",
    "extractor",
    "extractor-to",
    "help",
    "jobs",
    "keboola",
    "mapping-in",
    "mapping-out",
    "minus",
    "notification",
    "options",
    "orchestration",
    "overview",
    "plus",
    "refresh",
    "reset",
    "run",
    "sandbox",
    "search",
    "sql-dep",
    "storage",
    "support-by",
    "support-chat",
    "switch-off",
    "switch-on",
    "times",
    "transformation",
    "transformation-2",
    "transformation-overview",
    "trash",
    "user",
    "warning",
    "writer"
]

storiesOf('Icons')
    .addWithInfo(
        'Icon gallery',
        'Desc',
        () => (

            <div className="indigo-layout-grid">

                {icons.map(function(object, i){
                    return  <div><Icon iconClass={object}/></div>;
                })}
            </div>

        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'Icon sizing',
        'Desc',
        () => (

<div>

                <Icon iconClass="mapping-out" className="icon-size-stack"/>
    <br/>
                <Icon iconClass="mapping-in" className="icon-size-stack"/>
    <br/>
                <Icon iconClass="extractor-to" className="icon-size-stack"/>
    <br/>
                <Icon iconClass="transformation-2" className="icon-size-stack"/>

    <br/>
    <br/>
    <br/>

    <Icon iconClass="keboola" className="icon-size-20"/>
    <Icon iconClass="keboola" className="icon-size-32"/>
    <Icon iconClass="keboola" className="icon-size-48"/>
    <Icon iconClass="keboola" className="icon-size-64"/>


</div>
        ),
        {
            inline: true,
        }
    )