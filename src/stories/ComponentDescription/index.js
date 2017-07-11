import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';

storiesOf('ComponentDescription')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div class="row">
                <div class="col-md-6">
                    <table class="kbcLicenseTable">
                        <tbody>
                        <tr>
                            <td><em class="fa fa-cloud fa-fw kbcLicenseIcon"></em>
                            </td>
                            <td>This is a 3rd party extractor</td>
                        </tr>
                        <tr>
                            <td ><em class="fa fa-cloud-download fa-fw kbcLicenseIcon"></em></td>
                            <td >This extractor extracts data from outside
                                sources
                            </td>
                        </tr>
                        <tr>
                            <td ><em class="fa fa-life-ring fa-fw kbcLicenseIcon"></em></td>
                            <td>Support for this extractor is provided
                                by its author, not Keboola
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6" data-keboolaid=".0.3.0.1.0.1.1">
                    <div class="kbcVendorInfo" data-keboolaid=".0.3.0.1.0.1.1.0">
                        <div data-keboolaid=".0.3.0.1.0.1.1.0.0"><span data-keboolaid=".0.3.0.1.0.1.1.0.0.0">Component developed by</span>
                            <address data-keboolaid=".0.3.0.1.0.1.1.0.0.1"><strong
                                data-keboolaid=".0.3.0.1.0.1.1.0.0.1.0">David
                                Ešner</strong><span data-keboolaid=".0.3.0.1.0.1.1.0.0.1.1:0">
                            <br/><span>CZ</span></span><span>
                            <br/><span>esnerda@gmail.com</span></span></address>
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
