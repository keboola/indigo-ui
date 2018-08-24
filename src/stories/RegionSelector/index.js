import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

storiesOf('[CSS] Region Selector', module)
  .add(
    'Region Selector',
    withInfo({
      text: `
        ButtonGroup with custom class to add left margin
        `,
      inline: true,
    })(() => {
      return (
        <ButtonGroup className="btn-group-region-selector">
          <Button bsStyle="primary">
            US
          </Button>
          <Button>
            EU
          </Button>
        </ButtonGroup>
      );
    })
  );
