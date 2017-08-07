import React from 'react';
import {storiesOf} from '@storybook/react';
import {Image} from 'react-bootstrap';


import logoWide from '../../static/CID/logoWideBitmap.png';
import logoSquare from '../../static/CID/logoSquareBitmap.png';

storiesOf('CID')

    .addWithInfo(
        'Palette',
        'seen on ',
        () => (
            <div className="palette">
                <div className="palette-color palette-color-1">
                    @gray-base<br/>#282d38
                </div>
                <div className="palette-color palette-color-2">
                    @link-color<br/>#15c3ff
                </div>
                <div className="palette-color palette-color-3">
                    @link-color<br/>#15c3ff
                </div>
                <div className="palette-color palette-color-4">
                    @link-color<br/>#15c3ff
                </div>
                <div className="palette-color palette-color-5">
                    @link-color<br/>#15c3ff
                </div>
            </div>
        ),
    )

    .addWithInfo(
        'Typography',
        'Typography.com / keboola / font Gotham Rounded',
        () => (
            <div>
                <h1>font Gotham Rounded zatim neni</h1>
                <h2>font Gotham Rounded zatim neni</h2>
                <h3>font Gotham Rounded zatim neni</h3>
                <h4>font Gotham Rounded zatim neni</h4>
                <h5>font Gotham Rounded zatim neni</h5>
                <h6>font Gotham Rounded zatim neni</h6>
            </div>
        ),
    )

    .addWithInfo(
        'Logo Wide',
        'DL SVG http://indigo.keboola.com, \ ' +
        'DL PNG http://indigo.keboola.com, \ ' +
        'DL jpg http://indigo.keboola.com ',
        () => (
            <div className="">
                <Image src={logoWide} rounded width="200" className="center-block"/>
            </div>
        ),
        {
            inline: true,
        }
    )

    .addWithInfo(
        'Logo Square',
        'seen on ',
        () => (
            <div className="">
                <Image src={logoSquare} rounded width="200" className="center-block"/>
            </div>
        ),
        {
            inline: true,
        }
    )