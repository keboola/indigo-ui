import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';

storiesOf('ComponentDescription')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div className="row">
                <div className="col-md-6">
                    <table className="kbcLicenseTable">
                        <tbody>
                        <tr>
                            <td><em className="fa fa-cloud fa-fw kbcLicenseIcon"></em>
                            </td>
                            <td>This is a 3rd party extractor</td>
                        </tr>
                        <tr>
                            <td ><em className="fa fa-cloud-download fa-fw kbcLicenseIcon"></em></td>
                            <td >This extractor extracts data from outside
                                sources
                            </td>
                        </tr>
                        <tr>
                            <td ><em className="fa fa-life-ring fa-fw kbcLicenseIcon"></em></td>
                            <td>Support for this extractor is provided
                                by its author, not Keboola
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <div className="kbcVendorInfo">
                        <div data-keboolaid=".0.3.0.1.0.1.1.0.0">
                            <span>Component developed by</span>
                            <address>
                                <strong>David Ešner</strong>
                                <span>
                                <br/><span>CZ</span>
                                </span><span>
                            <br/><span>esnerda@gmail.com</span>
                            </span>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
;
