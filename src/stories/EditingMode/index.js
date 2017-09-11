import React from 'react';
import {storiesOf} from '@storybook/react';

import CodeMirror from 'react-code-mirror';


storiesOf('EditingMode')
    .addWithInfo(
        'default',
        '',
        () => (
<div>
              <CodeMirror
ref="CodeMirror"
value="eeeee"
theme="solarized"
lineNumbers={true}
lineWrapping={true}
autofocus={true}

placeholder="CREATE VIEW transformed AS SELECT id FROM source;"
    />
</div>
        ),
        {
            inline: true,
        }
    )