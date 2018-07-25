import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';


let randomNumber = Math.floor((Math.random() * 8) + 1)
let descriptionContent = (
  <div className="splash-description-container">
    <div className="splash-description splash-description-1">
      <span className="splash-label">Photo: </span>
      Keboola Devel Offsite #7, 24.10.2017
      <a target="_blank" href="https://goo.gl/maps/VJjhZ5tVBU52" className="splash-link">
        Zona Militare Gargano
      </a>
    </div>
    <div className="splash-description splash-description-2">
      <span className="splash-label">Photo: </span>
      Keboola Devel Offsite #8, 25.4.2018
      <a target="_blank" href="https://goo.gl/maps/rxLPXWRZqPF2" className="splash-link"
      >Keboola Offsite at Chotěšice
      </a>
    </div>
    <div className="splash-description splash-description-3">
      <span className="splash-label">Photo: </span>
      Keboola Devel Offsite #7, 22.10.2017
      <a target="_blank" href="https://goo.gl/maps/VCfkdJy4xCu" className="splash-link">
        Boat trip to Pescichi
      </a>
    </div>
    <div className="splash-description splash-description-4">
      <span className="splash-label">Photo: </span>
      Keboola Devel Offsite #6, 10.5.2017
      <a target="_blank" href="https://goo.gl/maps/4KjQP4hUe9q" className="splash-link">
        Offsite kart race
      </a>
    </div>
    <div className="splash-description splash-description-5">
      <span className="splash-label">Photo: </span>
      Keboola Devel Offsite #8, 21.10.2017
      <a target="_blank" href="https://goo.gl/maps/H96ghnFWkaU2" className="splash-link">
        Reaching M.A.S.H Gargano
      </a>
    </div>
    <div className="splash-description splash-description-6">
      <span className="splash-label">Photo: </span>
      Keboola Devel Offsite #8, 23.10.2017
      <a target="_blank" href="https://goo.gl/maps/ngAp7ijJyj62" className="splash-link">
        Tractor trip on the beach
      </a>
    </div>
    <div className="splash-description splash-description-7">
      <span className="splash-label">Photo: </span>
      Keboola Devel Offsite #8, 24.4.2018
      <a target="_blank" href="https://goo.gl/maps/CVpnCscDjRs" className="splash-link">
        Prachovské skály reservation
      </a>
    </div>
    <div className="splash-description splash-description-8">
      <span className="splash-label">Photo: </span>
      Keboola Devel Offsite #7, 22.10.2018
      <a target="_blank" href="https://goo.gl/maps/aFfwvCtmNvk" className="splash-link">
        Lago di Lesina
      </a>
    </div>
  </div>
)

storiesOf('Splash', module)
  .add(
    'Splash Screeen',
    withInfo({
      text: `
            Set of Keboola SVG icons. Color can be changed by css 'color' property. When adding new icons to src/icons, you need to re-run svg compilation.
        `,
      inline: false,
    })(() => {
      return (
        <div className={"kbc-outer-page splash splash-" + randomNumber + " splash-background"}>
          <div className="kbc-outer-container ">
            <div className="kbc-outer-logo">
              <a href="/admin/projects"><span className="kbc-icon-keboola-logo"></span></a>
            </div>
            <form className="kbc-outer-content well" method="post" action="">
      
            </form>
            {descriptionContent}
          </div>
        </div>
      );
    })
  );
