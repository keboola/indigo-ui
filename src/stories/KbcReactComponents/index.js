import React from 'react';
import {storiesOf} from '@storybook/react';

import Check from "../../static/common/kbc-react-components/Check";
import RefreshIcon from "../../static/common/kbc-react-components/RefreshIcon";
import Protected from "../../static/common/kbc-react-components/Protected";
import NewLineToBr from "../../static/common/kbc-react-components/NewLineToBr";

storiesOf('KBC React Components')
    .addWithInfo(
        'Check',
        '',
        () => (
            <div>
                <Check/>
                <Check isChecked='false'/>
            </div>

        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'RefreshIcon',
        '',
        () => (
            <div>
                <RefreshIcon/>
                <RefreshIcon isLoading='true'/>
                <RefreshIcon title='Test Title'/>
                <RefreshIcon loaderPosition='RIGHT'/>
            </div>
        ),
        {
            inline: true,
        }
    )

    .addWithInfo(
        'Protected',
        '',
        () => (
            <div>
                <Protected/>
                <Protected isProtected='false'/>
            </div>
        ),
        {
            inline: true,
        }
    )

    .addWithInfo(
        'NewLineToBr',
        '',
        () => (
            <div>
                <NewLineToBr text="Test text"/>
                <NewLineToBr text="Test text"/>
                <NewLineToBr text="Test text"/>
            </div>
        ),
        {
            inline: true,
        }
    )
