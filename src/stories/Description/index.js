import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';


storiesOf('Description', module)
  .add(
    'Basic description',
    withInfo({
      
      inline: true,
    })(() => {
      return (
        <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus et, excepturi
          libero nobis obcaecati qui quisquam repudiandae saepe! Beatae cum error eveniet exercitationem expedita
          facilis nulla quas quo reprehenderit sapiente!</div>
      );
    })
  )
  .add(
    'Basic small',
    withInfo({
      text: `
        do not use <small> element
        `,
      inline: true,
    })(() => {
      return (
        <div className="description description-small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta, distinctio dolorem eaque earum fugiat
          impedit, in ipsum maxime, molestiae necessitatibus pariatur rem tempora? Consequatur eaque provident quae
          saepe temporibus?
        </div>
      );
    })
  )
