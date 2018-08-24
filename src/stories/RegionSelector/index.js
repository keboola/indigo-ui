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
        <div className="kbc-outer-page splash splash-background splash-8">
          <div className="kbc-outer-container ">
            <div className="kbc-outer-logo">
              <a><span className="kbc-icon-keboola-logo" /></a>
            </div>
            <form className="kbc-outer-content well">
              <div className="kbc-outer-header">
                <h2>Please Sign In
                  <ButtonGroup className="btn-group-region-selector">
                    <Button bsStyle="primary">
                      US
                    </Button>
                    <Button>
                      EU
                    </Button>
                  </ButtonGroup>
                </h2>
              </div>
            </form>
          </div>
        </div>
      );
    })
  );
