import React from 'react';
import {storiesOf} from '@storybook/react';
import Icon from "../../static/common/Icon";

const icons = [
    "applications",
    "arrow-down",
    "arrow-vertical",
    "calendar",
    "cloud",
    "cloud-download",
    "copy",
    "duration",
    "edit",
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
    "transformation",
    "transformation-2",
    "transformation-overview",
    "trash",
    "user",
    "writer"
]

storiesOf('Icons')
    .addWithInfo(
        'default',
        'Desc',
        () => (

            <div className="icon-demo">
                {icons.map(function(object, i){
                    return  <Icon iconClass={object}/>;
                })}
            </div>

        ),
        {
            inline: true,
        }
    )
;