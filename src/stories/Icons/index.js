import React from 'react';
import {storiesOf} from '@storybook/react';
import Icon from "../../static/common/Icon";

storiesOf('Icons')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div className="icon-demo">
                <Icon iconClass="applications"/>
                <Icon iconClass="arrow-down"/>
                <Icon iconClass="arrow-verical"/>
                <Icon iconClass="calendar"/>
                <Icon iconClass="cloud"/>
                <Icon iconClass="cloud-download"/>
                <Icon iconClass="copy"/>
                <Icon iconClass="duration"/>
                <Icon iconClass="edit"/>
                <Icon iconClass="extractor"/>
                <Icon iconClass="extractor-to"/>
                <Icon iconClass="help"/>
                <Icon iconClass="jobs"/>
                <Icon iconClass="keboola"/>
                <Icon iconClass="mapping-in"/>
                <Icon iconClass="mapping-out"/>
                <Icon iconClass="minus"/>
                <Icon iconClass="notification"/>
                <Icon iconClass="options"/>

                <Icon iconClass="orchestration"/>
                <Icon iconClass="overview"/>
                <Icon iconClass="plus"/>
                <Icon iconClass="refresh"/>
                <Icon iconClass="reset"/>
                <Icon iconClass="run"/>
                <Icon iconClass="sandbox"/>
                <Icon iconClass="search"/>
                <Icon iconClass="sql-dep"/>
                <Icon iconClass="storage"/>
                <Icon iconClass="support-by"/>
                <Icon iconClass="support-chat"/>
                <Icon iconClass="switch-off"/>
                <Icon iconClass="switch-on"/>
                <Icon iconClass="transformation"/>
                <Icon iconClass="transformation-2"/>
                <Icon iconClass="transformation-overview"/>
                <Icon iconClass="trash"/>
                <Icon iconClass="user"/>
                <Icon iconClass="writer"/>


            </div>
        ),
        {
            inline: true,
        }
    )
;
