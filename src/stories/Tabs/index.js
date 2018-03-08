import React from 'react';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {
    Tab,
    Tabs,
    Modal,

} from 'react-bootstrap';


storiesOf('Tabs', module)
    .add('Tabs', () => (
        <div className="kbc-main">
            <div className="kbc-main-content">
                <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
                </Tabs>
            </div>
        </div>
    ), module)

    .add('Tabs @ WizardCommon', () => (
        <div className="kbc-main">
            <div className="kbc-main-content">
                <Tabs className="indigo-temp-tabs" animation={false}
                      id="ex-twitter-react-wizard-common-tabs"
                >
                    <Tab eventKey={1} title="Authorization">
                        <div className="row" style={{minHeight: 120}}>
                            <div className="col-md-12">
                                <div>
                                    <noscript></noscript>
                                    <div className="row component-empty-state text-center"
                                    ><p
                                    >No Account authorized</p>
                                        <button className="btn btn-success"
                                        ><i
                                            className="fa fa-fw fa-user"
                                        ></i><span
                                        >Authorize Account</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kbc-row clearfix">
                            <div className="pull-right">
                                <div><span
                                >&nbsp; &nbsp;</span><a
                                ><span className="kbc-icon-cup fa fa-fw"
                                ></span><span
                                > Move to Trash</span></a>
                                    <button style={{marginLeft: 10}} disabled="" type="button"
                                            className="btn btn-primary"
                                    >Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="User Timeline">
                        <div className="row" style={{minHeight: 120}}>
                            <div className="col-md-8">
                                <div className="form-group"><label
                                    className="control-label">Screen
                                    name</label>
                                    <div><input value=""
                                                label="Screen name"
                                                type="text"
                                                className="form-control"
                                    /><span
                                        className="help-block">User timeline will be fetched.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kbc-row clearfix">
                            <div className="pull-right">
                                <div><span
                                >&nbsp; &nbsp;</span><a
                                ><span className="kbc-icon-cup fa fa-fw"
                                ></span><span
                                > Move to Trash</span></a>
                                    <button style={{marginLeft: 10}} type="button" className="btn btn-link"
                                    >Previous
                                    </button>
                                    <button style={{marginLeft: 10}} type="button" className="btn btn-primary"
                                    >Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={3} title="Mentions">
                        <div className="row" style={{minHeight: 120}}>
                            <div className="col-md-8"><p
                            >Mentions of authorized user will be
                                fetched.</p></div>
                        </div>
                        <div className="kbc-row clearfix">
                            <div className="pull-right">
                                <div><span
                                >&nbsp; &nbsp;</span><a
                                ><span className="kbc-icon-cup fa fa-fw"
                                ></span><span
                                > Move to Trash</span></a>
                                    <button style={{marginLeft: 10}} type="button" className="btn btn-link"
                                    >Previous
                                    </button>
                                    <button style={{marginLeft: 10}} type="button" className="btn btn-primary"
                                    >Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={4} title="Followers List">
                        <div className="row" style={{minHeight: 120}}>
                            <div className="col-md-8">
                                <div className="form-group"><label
                                    className="control-label">Screen
                                    name</label>
                                    <div><input value=""
                                                label="Screen name"
                                                type="text"
                                                className="form-control"
                                    /><span
                                        className="help-block">Account's followers will be fetched.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kbc-row clearfix">
                            <div className="pull-right">
                                <div><span
                                >&nbsp; &nbsp;</span><a
                                ><span className="kbc-icon-cup fa fa-fw"
                                ></span><span
                                > Move to Trash</span></a>
                                    <button style={{marginLeft: 10}} type="button" className="btn btn-link"
                                    >Previous
                                    </button>
                                    <button style={{marginLeft: 10}} type="button" className="btn btn-primary"
                                    >Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={5} title="Search Tweets">
                        <div className="row" style={{minHeight: 120}}>
                            <div className="col-md-8">
                                <div className="form-group"><label
                                    className="control-label">Query</label>
                                    <div><input value=""
                                                label="Query"
                                                type="text"
                                                className="form-control"
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kbc-row clearfix">
                            <div className="pull-right">
                                <div><span
                                >&nbsp; &nbsp;</span><a
                                ><span className="kbc-icon-cup fa fa-fw"
                                ></span><span
                                > Move to Trash</span></a>
                                    <button style={{marginLeft: 10}} type="button" className="btn btn-link"
                                    >Previous
                                    </button>
                                    <button style={{marginLeft: 10}} type="button" className="btn btn-success"
                                    >Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    ), module)

    .add('Tabs @ SettingsTabs',
        withInfo({
            text: `This needs to be reformated. Bootstrap markup is not used properly`,
            inline: true,
        })
        (() => {
            return (
                <div className="kbc-main">
                    <div className="kbc-main-content">
                        <Tabs className="indigo-temp-tabs">
                            <Tab eventKey={1} title="Users">
                                <div className="row kbc-header">
                                    All users have full permissions in the project and can add or remove other users
                                    from
                                    it.
                                    <a href="#" className="pull-right kb-add-new-administrator-modal btn btn-success"
                                       data-options="{&quot;hiddenFields&quot;:{&quot;projectId&quot;:&quot;2376&quot;,&quot;adminWasInvited&quot;:true},&quot;required&quot;:[&quot;email&quot;],&quot;action&quot;:&quot;\/admin\/projects\/add-administrator&quot;}"
                                       data-toggle="tooltip" title="Add new user">
                                        <i className="kbc-icon-plus"></i>New User
                                    </a>
                                </div>
                                <table className="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>MFA <span className="fa fa-question-circle" data-toggle="tooltip"
                                                      title="Multi-Factor Authentication"></span></th>
                                        <th>Reason</th>
                                        <th>Joined</th>
                                        <th>Expires</th>
                                        <th className="kbc-action-column"><span className="fa"></span>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="">
                                        <td style={{position: 'relative'}}>
                                            <img
                                                src="https://secure.gravatar.com/avatar/861827b16ace048fcad0058e29c27640?s=40&amp;d=mm"
                                                width="40" height="40" className="kbc-user-avatar"/>
                                        </td>
                                        <td>
                                            Jan Michek
                                        </td>
                                        <td>jan@keboola.com</td>
                                        <td>
                                            <span className="fa fa-check"></span>
                                        </td>
                                        <td><strong></strong></td>
                                        <td>
                                <span className="kb-date-convert" data-date="2017-11-08T17:43:42+0100"
                                      title="2017-11-08T17:43:42+0100">2017-11-08 17:43</span>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                            <div className="kbc-action-column">
                                                <a href="#" className="kb-confirm text-muted"
                                                   data-options="{&quot;action&quot;:&quot;\/admin\/projects\/remove-administrator&quot;,&quot;title&quot;:&quot;Remove user from project&quot;,&quot;text&quot;:&quot;Do you really want to remove <strong>jan@keboola.com<\/strong> from <strong>Jan Michek<\/strong>?&quot;,&quot;confirmText&quot;:&quot;Leave Project&quot;,&quot;hiddenFields&quot;:{&quot;projectId&quot;:&quot;2376&quot;,&quot;administratorId&quot;:&quot;2807&quot;}}">
                                                    <span className="fa fa-sign-out"></span>Leave </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td style={{position: 'relative'}}>
                                            <img
                                                src="https://secure.gravatar.com/avatar/0f7ad98cc5b6e8daff602989f0325d63?s=40&amp;d=mm"
                                                width="40" height="40" className="kbc-user-avatar"/>
                                        </td>
                                        <td>
                                            Martin Halamíček
                                        </td>
                                        <td>martin.halamicek@keboola.com</td>
                                        <td>
                                            <span className="fa fa-check"></span>
                                        </td>
                                        <td><strong></strong></td>
                                        <td>
                                <span className="kb-date-convert" data-date="2017-03-20T16:20:35+0100"
                                      title="2017-03-20T16:20:35+0100">2017-03-20 16:20</span>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                            <div className="kbc-action-column">
                                                <a href="#" className="kb-confirm text-muted"
                                                   data-options="{&quot;action&quot;:&quot;\/admin\/projects\/remove-administrator&quot;,&quot;title&quot;:&quot;Remove user from project&quot;,&quot;text&quot;:&quot;Do you really want to remove <strong>martin.halamicek@keboola.com<\/strong> from <strong>Jan Michek<\/strong>?&quot;,&quot;confirmText&quot;:&quot;Remove User&quot;,&quot;hiddenFields&quot;:{&quot;projectId&quot;:&quot;2376&quot;,&quot;administratorId&quot;:&quot;1&quot;}}">
                                                    <span className="kbc-icon-cup"></span>Remove </a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Tab>
                            <Tab eventKey={2} title="Settings">

                            </Tab>
                            <Tab eventKey={3} title="Limits" disabled>

                            </Tab>
                            <Tab eventKey={4} title="Project Power" disabled>

                            </Tab>
                            <Tab eventKey={5} title="Trash" disabled>

                            </Tab>
                            <Tab eventKey={6} title="Tokens" disabled>

                            </Tab>

                        </Tabs>
                    </div>
                </div>
            );
        }))

    .add('Tabs @ Authorize Modal + AuthorizeAccount', () => (
        <div className="static-modal" style={{position: 'relative'}}>
            <Modal.Dialog className="kbc-authorization-modal">
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <form action="" className="form form-horizontal">
                    <Modal.Body>
                        <div id="authorizationrowtabs" className="kbc-wrapper-tabs-margin-fix">
                            <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="authorizationrowtabs">
                                <Tab eventKey={1} title="Instant authorization">
                                    <div>
                                        <div className="form-group"><label
                                            className="control-label col-sm-3">Description</label>
                                            <div className="col-sm-9"><input
                                                className="form-control" type="text" name="authorizedFor"
                                            /><p className="help-block"
                                            >
                                                Describe this authorization, e.g. by the account name.</p></div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey={2} title="External authorization">
                                    <div><p
                                    ><span
                                    >To authorize an account from a non-Keboola Connection user, generate a link to the external authorization app and send it to the user you want to have the authorized account for. The generated link is valid for </span><strong
                                    >48</strong><span
                                    > hours and will not be stored anywhere.</span>
                                    </p></div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button>Close</button>
                    </Modal.Footer>
                </form>
            </Modal.Dialog>
        </div>
    ), module)

    .add('Tabs @ Google Sheet Writer + Google Drive Writer', () => (
        <div className="static-modal" style={{position: 'relative'}}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Add Sheet</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{minHeight: 250}}>
                    <Tabs className="indigo-temp-tabs" defaultActiveKey={1} id="wr-google-sheets-sheet-modal-tabs">
                        <Tab eventKey={1} title="Source">
                            <div className="form-horizontal">
                                <div className="row">
                                    <div className="form-group">
                                        <div className="col-xs-10 col-xs-offset-2"
                                        >
                                            <div className="form-group"
                                            >
                                                <div>
                                                    <div className="checkbox"
                                                    >
                                                        <label title=""
                                                        ><input
                                                            type="checkbox" label="Show details"
                                                        /><span
                                                        >Show details</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group"><label
                                        className="col-md-2 control-label"
                                    >Input Table</label>
                                        <div className="col-md-10"><span
                                        ><div
                                            className="Select Select--single is-searchable has-value"
                                        >
                                                <input type="hidden"
                                                       name="Input table"
                                                       value="in.c-csv-import.282218367"
                                                /><div
                                            className="Select-control"
                                        >
                                                    <span
                                                        className="Select-multi-value-wrapper"
                                                        id="react-select-2--value"
                                                    ><div
                                                        className="Select-value"
                                                    ><span
                                                        className="Select-value-label" role="option"
                                                        aria-selected="true"
                                                        id="react-select-2--value-item"
                                                    >in.c-csv-import.282218367</span></div><div
                                                        className="Select-input" style={{display: 'inline-block'}}
                                                    ><input
                                                        role="combobox" aria-expanded="false" aria-owns=""
                                                        aria-haspopup="false"
                                                        aria-activedescendant="react-select-2--value"
                                                        value="" style={{width: 5, boxSizing: 'content-box'}}
                                                    /><div
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            visibility: 'hidden',
                                                            height: 0,
                                                            overflow: 'scroll',
                                                            whiteSpace: 'pre',
                                                            fontSize: 14,
                                                            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                                                            fontWeight: 300,
                                                            fontStyle: 'normal',
                                                            letterSpacing: 'normal'
                                                        }}
                                                    ></div></div></span><span
                                            className="Select-clear-zone" title="Clear value"
                                            aria-label="Clear value"
                                        ><span
                                            className="Select-clear"
                                        >×</span></span><span
                                            className="Select-arrow-zone"
                                        ><span
                                            className="Select-arrow"
                                        ></span></span></div></div></span><span
                                            className="help-block">Select source table from Storage</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Destination">
                            <div className="form-horizontal">
                                <div className="row">
                                    <div className="form-group"><label
                                        className="col-md-2 control-label"
                                    >Upload data to</label>
                                        <div className="col-md-10">
                                            <div name="type" value="new"
                                            >
                                                <div className="form-group"
                                                >
                                                    <div className="col-sm-8"
                                                    >
                                                        <div className="radio"
                                                        >
                                                            <label title=""
                                                            ><input
                                                                type="radio" label="New spreadsheet" value="new"

                                                                name="type"/><span
                                                            >New spreadsheet</span></label>
                                                        </div>
                                                        <span className="help-block"
                                                        >Create new Spreadsheet</span>
                                                    </div>
                                                </div>
                                                <div className="form-group"
                                                >
                                                    <div className="col-sm-8"
                                                    >
                                                        <div className="radio"
                                                        >
                                                            <label title=""
                                                            ><input
                                                                type="radio" label="Existing spreadsheet"
                                                                value="existing"

                                                                name="type"/><span
                                                            >Existing spreadsheet</span></label>
                                                        </div>
                                                        <span className="help-block"
                                                        >Use existing Spreadsheet</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group"><label
                                        className="col-md-2 control-label"
                                    >Spreadsheet</label>
                                        <div className="col-md-10">
                                            <div className="input-group"
                                            >
                                                <div className="input-group-btn"
                                                >
                                                    <button type="button" className="btn btn-lg btn-default"
                                                    >/
                                                    </button>
                                                </div>
                                                <input placeholder="New Spreadsheet" type="text" value=""
                                                       className="form-control"
                                                /></div>
                                            <span className="help-block"
                                            ><span
                                            >Select Spreadsheets parent </span><strong
                                            >folder</strong><span
                                            > and enter Spreadsheets </span><strong
                                            >title</strong><span
                                            >.</span><br
                                            /><span
                                            >The Spreadsheet will be created upon save.</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Options">
                            <div className="form-horizontal">
                                <div className="row">
                                    <div className="form-group"><label
                                        className="col-md-2 control-label"
                                    >Sheet title</label>
                                        <div className="col-md-10">
                                            <div className="form-group"
                                            >
                                                <div>
                                                    <input placeholder="Sheet1" value="Sheet1" type="text"
                                                           className="form-control form-control"
                                                    />
                                                </div>
                                            </div>
                                            <span className="help-block"
                                            >Type a name of existing Sheet to import into it or type a unique name to add new Sheet into the Spreadsheet.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group"><label
                                        className="col-md-2 control-label"
                                    >Action</label>
                                        <div className="col-md-10">
                                            <div name="Action" value="update"
                                            >
                                                <div className="form-horizontal"
                                                >
                                                    <div className="form-group"
                                                    >
                                                        <div className="col-sm-8"
                                                        >
                                                            <div className="radio"
                                                            >
                                                                <label title=""
                                                                ><input
                                                                    type="radio" label="Update rows"
                                                                    value="update"

                                                                    name="Action"/><span
                                                                >Update rows</span></label>
                                                            </div>
                                                            <span className="help-block"
                                                            >Overwrites data in the Sheet</span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group"
                                                    >
                                                        <div className="col-sm-8"
                                                        >
                                                            <div className="radio"
                                                            >
                                                                <label title=""
                                                                ><input
                                                                    type="radio" label="Append rows"
                                                                    value="append"

                                                                    name="Action"/><span
                                                                >Append rows</span></label>
                                                            </div>
                                                            <span className="help-block"
                                                            >Add new data to the end of the Sheet</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>

                <Modal.Footer>
                    <div className="kbc-buttons">
                        <button type="button" className="btn btn-link">Cancel</button>
                        <button type="button" className="btn btn-default">Previous
                        </button>
                        <button type="button" className="btn btn-success">Save Sheet
                        </button>
                    </div>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    ), module)

    .add('Tabs @ Token Detail', () => (
        <div className="kbc-main">
            <div className="kbc-main-content">
                <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="token-detail">
                    <Tab eventKey={1} title="Overwiev" style={{paddingTop: 0}}>

                        <div className="kbc-inner-content-padding-fix">
                            <div className="form form-horizontal" style={{marginLeft: 0, marginRight: 0}}
                            >
                                <div className="form-group">
                                    <div className="col-sm-12 text-right">
                                        <div className="kbc-buttons kbc-save-buttons"
                                        >
                                            <button disabled="" type="button" className="save-button btn btn-success"
                                            >Saved
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group"><label
                                        className="control-label col-sm-3">Description</label>
                                        <div className="col-sm-9"><input
                                            placeholder="Describe token..." className="form-control" type="text"
                                            value="Orchestrator aaaa"/></div>
                                    </div>
                                    <div className="form-group"><label
                                        className="control-label col-sm-3">Expires
                                        In</label>
                                        <div className="col-sm-9"><p
                                            className="form-control-static">
                                            <span>Never</span></p></div>
                                    </div>
                                    <div className="form-group"><label
                                        className="control-label col-sm-3"
                                    >Created</label>
                                        <div className="col-sm-9"><p
                                            className="form-control-static">
                                        <span title="2017-09-07 12:07:33"
                                        ><i
                                            className="fa fa-fw fa-calendar"
                                        ></i><span
                                        > </span><span
                                        >4 months ago</span></span><span
                                        ><span
                                        > </span><span
                                        > by </span><span
                                        > </span><a className=""
                                                    href="/admin/projects/2376/tokens/70838"
                                        >jan@keboola.com</a></span>
                                        </p></div>
                                    </div>
                                    <div className="form-group"><label
                                        className="control-label col-sm-3"
                                    >Files</label>
                                        <div className="col-sm-9">
                                            <div className="radio"><label
                                            ><input type="radio"
                                                    checked=""
                                            /><span
                                            >Full Access</span></label>
                                            </div>
                                            <span className="help-block">Allow access to all files</span>
                                            <div className="radio"><label
                                            ><input type="radio"
                                            /><span
                                            >Restricted Access</span></label>
                                            </div>
                                            <span
                                                className="help-block">Only files uploaded by the token are accessible</span>
                                        </div>
                                    </div>
                                    <div className="form-group"><label
                                        className="control-label col-sm-3">Components &amp;
                                        Buckets</label>
                                        <div className="col-sm-9">
                                            <div className="radio"><label
                                                style={{paddingLeft: 0, cursor: 'default'}}
                                            ><span
                                            >Full Access</span></label><span
                                                className="help-block">Allow full access to all buckets and components including buckets created in future</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Tab>
                    <Tab eventKey={2} title="Events">

                        <div>
                            <form className="kbc-search"><span className="kbc-icon-search"
                            ></span><input
                                type="text" value="" className="form-control" placeholder="Search"
                            /></form>
                            <div>
                                <div className="table table-striped table-hover">
                                    <div className="thead">
                                        <div className="tr">
                                            <div className="th">Created</div>
                                            <div className="th"><span
                                            >Event </span></div>
                                        </div>
                                    </div>
                                    <div className="tbody"><a className="tr"
                                                              href="/admin/projects/2376/tokens/77161?eventId=605950796"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-14 02:08:47
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Job failed</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605950791"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-14 02:08:47
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Orchestration job 317428104 end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605950789"
                                    >
                                        <div className="td bg-warning">
                                            2017-09-14 02:08:46
                                        </div>
                                        <div className="td bg-warning">
                                        <span><span
                                        >Component  end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605950443"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-14 02:08:35
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >[2017-09-14 00:08:14] logger.ERROR: The 'config' section is required in the configuration. [] []</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605949952"
                                    >
                                        <div className="td">2017-09-14
                                            02:08:14
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >[2017-09-14 00:08:14] logger.ERROR: The 'config' section is required in the configuration. [] []</span><br
                                        /><span
                                        ></span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605949460"
                                    >
                                        <div className="td">2017-09-14
                                            02:07:57
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Running Component ex-adform</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605944096"
                                    >
                                        <div className="td">2017-09-14
                                            02:04:14
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Job created</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605944071"
                                    >
                                        <div className="td">2017-09-14
                                            02:04:14
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Component  start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605944060"
                                    >
                                        <div className="td">2017-09-14
                                            02:04:14
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 317428104 start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605938298"
                                    >
                                        <div className="td">2017-09-14
                                            02:00:46
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 317428104 scheduled</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605371227"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-13 02:12:48
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Job failed</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605371221"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-13 02:12:48
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Orchestration job 317220457 end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605371218"
                                    >
                                        <div className="td bg-warning">
                                            2017-09-13 02:12:48
                                        </div>
                                        <div className="td bg-warning">
                                        <span><span
                                        >Component  end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605370630"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-13 02:12:32
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >[2017-09-13 00:12:13] logger.ERROR: The 'config' section is required in the configuration. [] []</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605369976"
                                    >
                                        <div className="td">2017-09-13
                                            02:12:13
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >[2017-09-13 00:12:13] logger.ERROR: The 'config' section is required in the configuration. [] []</span><br
                                        /><span
                                        ></span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605369323"
                                    >
                                        <div className="td">2017-09-13
                                            02:11:51
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Running Component ex-adform</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605366991"
                                    >
                                        <div className="td">2017-09-13
                                            02:10:17
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Job created</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605366963"
                                    >
                                        <div className="td">2017-09-13
                                            02:10:16
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Component  start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605366954"
                                    >
                                        <div className="td">2017-09-13
                                            02:10:16
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 317220457 start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=605350408"
                                    >
                                        <div className="td">2017-09-13
                                            02:00:45
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 317220457 scheduled</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604771928"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-12 02:08:57
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Job failed</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604771923"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-12 02:08:57
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Orchestration job 316926991 end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604771919"
                                    >
                                        <div className="td bg-warning">
                                            2017-09-12 02:08:57
                                        </div>
                                        <div className="td bg-warning">
                                        <span><span
                                        >Component  end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604771867"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-12 02:08:55
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >[2017-09-12 00:08:29] logger.ERROR: The 'config' section is required in the configuration. [] []</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604771252"
                                    >
                                        <div className="td">2017-09-12
                                            02:08:29
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >[2017-09-12 00:08:29] logger.ERROR: The 'config' section is required in the configuration. [] []</span><br
                                        /><span
                                        ></span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604770570"
                                    >
                                        <div className="td">2017-09-12
                                            02:08:04
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Running Component ex-adform</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604768323"
                                    >
                                        <div className="td">2017-09-12
                                            02:06:26
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Job created</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604768306"
                                    >
                                        <div className="td">2017-09-12
                                            02:06:25
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Component  start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604768298"
                                    >
                                        <div className="td">2017-09-12
                                            02:06:25
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 316926991 start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604758440"
                                    >
                                        <div className="td">2017-09-12
                                            02:00:44
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 316926991 scheduled</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604207707"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-11 02:16:28
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Job failed</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604207700"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-11 02:16:28
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Orchestration job 316610160 end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604207699"
                                    >
                                        <div className="td bg-warning">
                                            2017-09-11 02:16:28
                                        </div>
                                        <div className="td bg-warning">
                                        <span><span
                                        >Component  end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604207422"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-11 02:16:13
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >[2017-09-11 00:16:05] logger.ERROR: The 'config' section is required in the configuration. [] []</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604207218"
                                    >
                                        <div className="td">2017-09-11
                                            02:16:05
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >[2017-09-11 00:16:05] logger.ERROR: The 'config' section is required in the configuration. [] []</span><br
                                        /><span
                                        ></span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604202740"
                                    >
                                        <div className="td">2017-09-11
                                            02:13:38
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Running Component ex-adform</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604202706"
                                    >
                                        <div className="td">2017-09-11
                                            02:13:37
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Job created</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604202679"
                                    >
                                        <div className="td">2017-09-11
                                            02:13:36
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Component  start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604202672"
                                    >
                                        <div className="td">2017-09-11
                                            02:13:36
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 316610160 start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=604182490"
                                    >
                                        <div className="td">2017-09-11
                                            02:00:49
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 316610160 scheduled</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603694497"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-10 02:11:29
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Job failed</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603694487"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-10 02:11:29
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >Orchestration job 316324810 end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603694483"
                                    >
                                        <div className="td bg-warning">
                                            2017-09-10 02:11:29
                                        </div>
                                        <div className="td bg-warning">
                                        <span><span
                                        >Component  end</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603694121"
                                    >
                                        <div className="td bg-danger">
                                            2017-09-10 02:11:16
                                        </div>
                                        <div className="td bg-danger">
                                        <span><span
                                        >[2017-09-10 00:11:11] logger.ERROR: The 'config' section is required in the configuration. [] []</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603694026"
                                    >
                                        <div className="td">2017-09-10
                                            02:11:11
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >[2017-09-10 00:11:11] logger.ERROR: The 'config' section is required in the configuration. [] []</span><br
                                        /><span
                                        ></span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603693044"
                                    >
                                        <div className="td">2017-09-10
                                            02:10:39
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Running Component ex-adform</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603693033"
                                    >
                                        <div className="td">2017-09-10
                                            02:10:38
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Job created</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603693014"
                                    >
                                        <div className="td">2017-09-10
                                            02:10:37
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Component  start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603693009"
                                    >
                                        <div className="td">2017-09-10
                                            02:10:37
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 316324810 start</span></span>
                                        </div>
                                    </a><a className="tr" href="/admin/projects/2376/tokens/77161?eventId=603677720"
                                    >
                                        <div className="td">2017-09-10
                                            02:00:48
                                        </div>
                                        <div className="td"><span
                                        ><span
                                        >Orchestration job 316324810 scheduled</span></span>
                                        </div>
                                    </a></div>
                                </div>
                                <div className="kbc-block-with-padding">
                                    <button type="button" className="btn btn-default"
                                    >More ...
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    ), module)

    .add('Tabs @ Modal Dialog', () => (
        <div className="static-modal" style={{position: 'relative'}}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>
                        <span>in.c-csv-import.282218367</span><a
                        target="_blank" href="/admin/projects/2376/storage#/tables/in.c-csv-import.282218367"
                    >
                        <small className="btn btn-link">Explore in Console</small>
                    </a><span title="Refresh"><span title="Refresh"
                                                    className="kbc-refresh kbc-icon-cw"
                    ></span></span>

                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div style={{maxHeight: '75vh'}} className="pre-scrollable">
                        <Tabs className="indigo-temp-tabs" defaultActiveKey="general" animation={false}
                              id="modalin.c-keboola-ex-db-snowflake-335491067.ACCOUNT">
                            <Tab eventKey="description" title="General Info">
                                <div>
                                    <div className="table-responsive">
                                        <table className="table table">
                                            <thead>
                                            <tr>
                                                <td style={{width: '20%'}}>
                                                    ID
                                                </td>
                                                <td>
                                                    in.c-keboola-ex-db-snowflake-335491067.ACCOUNT
                                                </td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Storage</td>
                                                <td><span
                                                    className="label label-info"
                                                >snowflake</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Created</td>
                                                <td><span
                                                ><span
                                                > </span><span
                                                >2017-12-05 10:40:05</span><small
                                                ><span
                                                > </span><span
                                                >22 days ago</span><span
                                                > </span></small></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Primary Key</td>
                                                <td>N/A</td>
                                            </tr>
                                            <tr>
                                                <td>Last Import</td>
                                                <td><span
                                                ><span
                                                > </span><span
                                                >2017-12-18 03:37:45</span><small
                                                ><span
                                                > </span><span
                                                >9 days ago</span><span
                                                > </span></small></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Last Change</td>
                                                <td><span
                                                ><span
                                                > </span><span
                                                >2017-12-18 03:37:45</span><small
                                                ><span
                                                > </span><span
                                                >9 days ago</span><span
                                                > </span></small></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rows Count</td>
                                                <td>275 rows</td>
                                            </tr>
                                            <tr>
                                                <td>Data Size</td>
                                                <td>13.82 kB</td>
                                            </tr>
                                            <tr>
                                                <td>Indexed Column(s)
                                                </td>
                                                <td>N/A</td>
                                            </tr>
                                            <tr>
                                                <td>Columns</td>
                                                <td>5 columns: Id, Name,
                                                    Region, Status, FirstOrder
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="description" title="Description">
                                <div>
                                    <div className="kbc-metadata-description"><span
                                    ><div placeholder="Describe this table"
                                    ><div
                                        className="text-right"><button
                                        className="btn btn-link"><span
                                        className="kbc-icon-pencil"
                                    ></span><span
                                    > </span><span
                                    >Describe this table</span></button></div></div></span>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="columns" title="Columns">
                                <div>
                                    <div className="table-responsive">
                                        <table className="table table-striped table"
                                        >
                                            <thead>
                                            <tr>
                                                <th>Column</th>
                                                <th>Sample Values</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><span
                                                ><span
                                                >Id</span><div
                                                ><span
                                                ></span><span
                                                ></span></div></span>
                                                </td>
                                                <td>
                                                    f030ed64cbc8babbe50901a26675a2ee,
                                                    06c0b954b0d2088e3da2132d1ba96f31,
                                                    fffe0e30b4a34f01063330a4b908fde5,
                                                    33025ad4a425b6ee832e76beb250ae1c,
                                                    eb2dcd593e154801529fb2ca07dcc41b,
                                                    6c66f7dbaf44818c2cd44d3ab45795de,
                                                    5809586ac6b71878b7bc0e85bb05fa39,
                                                    5cc2719e6cbc9777d48892f02360121a,
                                                    b581db866f5becf6e98acb5852322e29,
                                                    fef98a3419592e65d9b62ecc1e179afa
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                ><span
                                                >Name</span><div
                                                ><span
                                                ></span><span
                                                ></span></div></span>
                                                </td>
                                                <td>CSK Auto, AM/PM
                                                    Camp, Super Saver Foods, Netcore, Monmax, Chief Auto Parts,
                                                    Vibrant
                                                    Man, Handyman, Rex Audio Video Appliance, Rainbow Bay Crafts
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                ><span
                                                >Region</span><div
                                                ><span
                                                ></span><span
                                                ></span></div></span>
                                                </td>
                                                <td>US West, Global,
                                                    Global, Global, Global, Global, Global, Global, Global, Global
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                ><span
                                                >Status</span><div
                                                ><span
                                                ></span><span
                                                ></span></div></span>
                                                </td>
                                                <td>Active, Active,
                                                    Active, Inactive, Inactive, Inactive, Active, Inactive,
                                                    Inactive,
                                                    Active
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                ><span
                                                >FirstOrder</span><div
                                                ><span
                                                ></span><span
                                                ></span></div></span>
                                                </td>
                                                <td>2015-01-23,
                                                    2015-02-04, 2015-02-06, 2015-03-02, 2015-01-07, 2015-02-04,
                                                    2015-03-05, 2015-02-05, 2015-01-20, 2015-03-06
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="datasample" title="Data Sample">
                                <div>
                                    <div className="table-responsive">
                                        <table className="table table-striped table"
                                        >
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Region</th>
                                                <th>Status</th>
                                                <th>FirstOrder</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >f030ed64cbc8babbe50901a26675a2ee</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >CSK Auto</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >US West</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Active</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-01-23</span><span
                                                > </span></td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >06c0b954b0d2088e3da2132d1ba96f31</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >AM/PM Camp</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Global</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Active</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-02-04</span><span
                                                > </span></td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >fffe0e30b4a34f01063330a4b908fde5</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Super Saver Foods</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Global</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Active</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-02-06</span><span
                                                > </span></td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >33025ad4a425b6ee832e76beb250ae1c</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Netcore</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Global</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Inactive</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-03-02</span><span
                                                > </span></td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >eb2dcd593e154801529fb2ca07dcc41b</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Monmax</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Global</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Inactive</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-01-07</span><span
                                                > </span></td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >6c66f7dbaf44818c2cd44d3ab45795de</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Chief Auto Parts</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Global</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Inactive</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-02-04</span><span
                                                > </span></td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >5809586ac6b71878b7bc0e85bb05fa39</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Vibrant Man</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Global</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Active</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-03-05</span><span
                                                > </span></td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >5cc2719e6cbc9777d48892f02360121a</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Handyman</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Global</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Inactive</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-02-05</span><span
                                                > </span></td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >b581db866f5becf6e98acb5852322e29</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Rex Audio Video Appliance</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Global</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Inactive</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-01-20</span><span
                                                > </span></td>
                                            </tr>
                                            <tr>
                                                <td><span
                                                > </span><span
                                                >fef98a3419592e65d9b62ecc1e179afa</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Rainbow Bay Crafts</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Global</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >Active</span><span
                                                > </span></td>
                                                <td><span
                                                > </span><span
                                                >2015-03-06</span><span
                                                > </span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="events" title="Events">
                                <div>
                                    <div>
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <div className="checkbox">
                                                    <label><input
                                                        checked="" type="checkbox"
                                                    /><span className=""
                                                    >Ignore table fetches</span></label>
                                                </div>
                                            </div>
                                            <div className="col-xs-3">
                                                <div className="checkbox">
                                                    <label><input
                                                        type="checkbox"
                                                    /><span className=""
                                                    >Ignore table exports</span></label>
                                                </div>
                                            </div>
                                            <div className="col-xs-3">
                                                <div className="checkbox">
                                                    <label><input
                                                        type="checkbox"
                                                    /><span
                                                    > Import/Exports only</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover table"
                                        >
                                            <thead className="thead">
                                            <tr className="tr">
                                                <th className="th">Created
                                                </th>
                                                <th className="th">Event
                                                </th>
                                                <th className="th">Creator
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="tbody">
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-18 03:37:53</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >9 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-18 03:37:53</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >9 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-18 03:37:45</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >9 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-18 03:37:39</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >9 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-18 01:24:06</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >9 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-18 01:24:05</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >9 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-18 01:23:59</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >9 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-18 01:23:52</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >9 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-17 03:05:34</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >10 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-17 03:05:34</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >10 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-17 03:05:27</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >10 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-17 03:05:20</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >10 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-17 01:13:56</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >10 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-17 01:13:56</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >10 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-17 01:13:51</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >10 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-17 01:13:42</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >10 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-16 03:01:59</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >11 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-16 03:01:59</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >11 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-16 03:01:51</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >11 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-16 03:01:45</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >11 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-16 01:07:34</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >11 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-16 01:07:34</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >11 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-16 01:07:28</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >11 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-16 01:07:20</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >11 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-15 03:02:01</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >12 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-15 03:02:01</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >12 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-15 03:01:54</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >12 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-15 03:01:47</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >12 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-15 01:14:21</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >12 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-15 01:14:21</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >12 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-15 01:14:16</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >12 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-15 01:14:07</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >12 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-14 03:02:21</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >13 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-14 03:02:21</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >13 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-14 03:02:17</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >13 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-14 03:02:07</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >13 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-14 01:12:37</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >13 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-14 01:12:37</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >13 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-14 01:12:32</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >13 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-14 01:12:23</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >13 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-13 03:02:03</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >14 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-13 03:02:03</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >14 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-13 03:01:55</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >14 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-13 03:01:49</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >14 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-13 01:12:18</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >14 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-13 01:12:18</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >14 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr success"
                                            >
                                                <td className="td"
                                                ><span
                                                >2017-12-13 01:12:12</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >14 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Successfully imported </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-13 01:12:04</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >14 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Import started</span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-12 03:04:24</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >15 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added keboola.ex-db-snowflake metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            <tr className="tr ">
                                                <td className="td"
                                                ><span
                                                >2017-12-12 03:04:24</span>
                                                    <small>
                                                        <span
                                                        > </span><span
                                                    >15 days ago</span><span
                                                    > </span>
                                                    </small>
                                                </td>
                                                <td className="td"
                                                ><span
                                                >Added system metadata to table </span><span
                                                ></span>
                                                </td>
                                                <td className="td"
                                                >
                                                    Orchestrator test
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    ), module)

    .add('Tabs @ Orchestration Detail', () => (
        <div className="kbc-main">
            <div className="kbc-main-content">
                <div className="kb-orchestrations-main">
                    <div className="orchestration-job-detail-tabs">
                        <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="">
                            <Tab eventKey={1} title="Overview" id="orchestration-job-detail-tabs-pane-overview">
                                <div>
                                    <div className="table kbc-table-border-vertical kbc-detail-table"
                                    >
                                        <div className="tr">
                                            <div className="td">
                                                <div className="row"><span
                                                    className="col-md-4">Created At </span><strong
                                                    className="col-md-8">2017-12-27
                                                    04:00:19</strong></div>
                                                <div className="row"><span
                                                    className="col-md-4"
                                                >Start </span><strong
                                                    className="col-md-8">2017-12-27
                                                    04:00:20</strong></div>
                                            </div>
                                            <div className="td">
                                                <div className="row"><span
                                                    className="col-md-4">Status </span><span
                                                    className="col-md-8"><span
                                                    className="label label-danger"
                                                >error</span></span>
                                                </div>
                                                <div className="row"><span
                                                    className="col-md-4"
                                                >End </span><strong
                                                    className="col-md-8">2017-12-27
                                                    04:01:32</strong></div>
                                                <div className="row"><span
                                                    className="col-md-4">Created By </span><strong
                                                    className="col-md-8">Orchestrator
                                                    fasdfasd</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2><span
                                    >Tasks</span><span
                                    > </span>
                                        <small className="pull-right"><span
                                        >Total Duration </span><span
                                        >1 min 12 sec</span></small>
                                    </h2>
                                    <div role="tablist" className="kbc-panel-heading-with-table panel-group"
                                    >
                                        <div className="panel panel-default"
                                        >
                                            <div className="panel-heading"
                                            ><span
                                                className="panel-title"
                                            ><a
                                                role="tab" aria-expanded="false" aria-selected="false"
                                                className="collapsed"
                                            ><span
                                                className="table"
                                            ><span
                                                className="tbody"
                                            ><span
                                                className="tr"
                                            ><span
                                                className="td col-xs-6"
                                            ><span
                                            ><span
                                                className="kb-sapi-component-icon"
                                            ><img
                                                src="https://assets-cdn.keboola.com/developer-portal/icons/esnerda.ex-ares/32/1.png"
                                                width="32" height="32"
                                            /></span><span
                                            > </span><span
                                            ><span
                                            >ARES</span><span
                                            > </span><small
                                            >extractor</small></span></span><span
                                            > </span><span
                                            > - fasfasffffasf</span></span><span
                                                className="td col-xs-2 text-right"
                                            ><span
                                                className="label kbc-label-rounded kbc-label-block label-default"
                                            >new phase</span></span><span
                                                className="td col-xs-2 text-right"
                                            ><span
                                            >1 min 11 sec</span></span><span
                                                className="td col-xs-2 text-right"
                                            ><span
                                                className="label label-danger"
                                            >error</span></span></span></span></span></a></span>
                                            </div>
                                            <div role="tabpanel" className="panel-collapse collapse" aria-hidden="true"
                                            >
                                                <div className="panel-body"
                                                >
                                                    <div className="pull-right"
                                                    >
                                                        2017-12-27 04:00:20
                                                    </div>
                                                    <div
                                                    >
                                                        <strong
                                                        >Configuration </strong><a
                                                        className=""
                                                        href="/admin/projects/2376/extractors/esnerda.ex-ares/315756935"
                                                    >fasfasffffasf</a>
                                                    </div>
                                                    <div
                                                    >
                                                        <strong
                                                        >POST</strong><span
                                                    > </span><span
                                                    >https://syrup.keboola.com/docker/esnerda.ex-ares/run</span>
                                                    </div>
                                                    <div
                                                    >
                                                        <h5>
                                                            Parameters</h5>
                                                        <div className="kb-tree"
                                                        >
                                                            <ul>
                                                                <li>
                                                            <span
                                                            ><strong
                                                            >config</strong><span
                                                            >: </span><span
                                                            >315756935</span></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div
                                                    >
                                                        <h5>
                                                            Response</h5>
                                                        <div className="kb-tree"
                                                        >
                                                            <ul>
                                                                <li>
                                                            <span
                                                            ><strong
                                                            >usage</strong><ul
                                                            ></ul></span>
                                                                </li>

                                                                <li data-keboolaid=".0.4.0.1.0.0.0.1.0.0.1.0.0.2.$333219931/=1$333219931.1.$0.$=14.1.0.$_type:0">
                                                            <span
                                                                data-keboolaid=".0.4.0.1.0.0.0.1.0.0.1.0.0.2.$333219931/=1$333219931.1.$0.$=14.1.0.$_type:0.0"><strong
                                                                data-keboolaid=".0.4.0.1.0.0.0.1.0.0.1.0.0.2.$333219931/=1$333219931.1.$0.$=14.1.0.$_type:0.0.0">_type</strong><span
                                                                data-keboolaid=".0.4.0.1.0.0.0.1.0.0.1.0.0.2.$333219931/=1$333219931.1.$0.$=14.1.0.$_type:0.0.1">: </span><span
                                                                data-keboolaid=".0.4.0.1.0.0.0.1.0.0.1.0.0.2.$333219931/=1$333219931.1.$0.$=14.1.0.$_type:0.0.2">jobs</span></span>
                                                                </li>

                                                                <li>
                                                            <span
                                                            ><strong
                                                            >result</strong><ul
                                                            ><li
                                                            ><span
                                                            ><strong
                                                            >message</strong><span
                                                            >: </span><span
                                                            >The KBC project is not allowed to use this extractor!</span></span></li><li
                                                            ><span
                                                            ><strong
                                                            >exceptionId</strong><span
                                                            >: </span><span
                                                            >docker-841d6322b1297c4484043a1f3c525cb6</span></span></li><li
                                                            ><span
                                                            ><strong
                                                            >context</strong><ul
                                                            ><li
                                                            ><span
                                                            ><strong
                                                            >container</strong><ul
                                                            ><li
                                                            ><span
                                                            ><strong
                                                            >id</strong><span
                                                            >: </span><span
                                                            >341714696-341714667.341714697--0-esnerda-ex-ares</span></span></li><li
                                                            ><span
                                                            ><strong
                                                            >image</strong><span
                                                            >: </span><span
                                                            >esnerd/keboola-ares-ex:latest</span></span></li></ul></span></li><li
                                                            ><span
                                                            ><strong
                                                            >output</strong><span
                                                            >: </span><span
                                                            ></span></span></li><li
                                                            ><span
                                                            ><strong
                                                            >errorOutput</strong><span
                                                            >: </span><span
                                                            >The KBC project is not allowed to use this extractor!</span></span></li></ul></span></li></ul></span>
                                                                </li>
                                                                <li>
                                                            <span
                                                            ><strong
                                                            >component</strong><span
                                                            >: </span><span
                                                            >docker</span></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey={2} title="Log" id="orchestration-job-detail-tabs-pane-log">
                                <div>
                                    <form className="kbc-search"><span
                                        className="kbc-icon-search"></span><input
                                        type="text" value="" className="form-control" placeholder="Search"
                                    /></form>
                                    <div>
                                        <div className="table table-striped table-hover"
                                        >
                                            <div className="thead">
                                                <div className="tr">
                                                    <div className="th">
                                                        Created
                                                    </div>
                                                    <div className="th"><span
                                                    >Event </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tbody"><a className="tr"
                                                                      href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674516120"
                                            >
                                                <div className="td bg-danger"
                                                >2017-12-27
                                                    04:01:32
                                                </div>
                                                <div className="td bg-danger"
                                                ><span
                                                ><span
                                                >Job failed</span></span>
                                                </div>
                                            </a><a className="tr"
                                                   href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674516110"
                                            >
                                                <div className="td bg-danger"
                                                >2017-12-27
                                                    04:01:31
                                                </div>
                                                <div className="td bg-danger"
                                                ><span
                                                ><span
                                                >Orchestration job 341714666 end</span></span>
                                                </div>
                                            </a><a className="tr"
                                                   href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674516107"
                                            >
                                                <div className="td bg-warning"
                                                >2017-12-27
                                                    04:01:31
                                                </div>
                                                <div className="td bg-warning"
                                                ><span
                                                ><span
                                                >Component  end</span></span>
                                                </div>
                                            </a><a className="tr"
                                                   href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674515767"
                                            >
                                                <div className="td bg-danger"
                                                >2017-12-27
                                                    04:01:20
                                                </div>
                                                <div className="td bg-danger"
                                                ><span
                                                ><span
                                                >The KBC project is not allowed to use this extractor!</span></span>
                                                </div>
                                            </a><a className="tr"
                                                   href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674514833"
                                            >
                                                <div className="td bg-danger"
                                                >2017-12-27
                                                    04:00:42
                                                </div>
                                                <div className="td bg-danger"
                                                ><span
                                                ><span
                                                >The KBC project is not allowed to use this extractor!</span></span>
                                                </div>
                                            </a><a className="tr"
                                                   href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674514449"
                                            >
                                                <div className="td">
                                                    2017-12-27 04:00:21
                                                </div>
                                                <div className="td">
                                            <span><span
                                            >Running Component esnerda.ex-ares</span></span>
                                                </div>
                                            </a><a className="tr"
                                                   href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674514427"
                                            >
                                                <div className="td">
                                                    2017-12-27 04:00:21
                                                </div>
                                                <div className="td">
                                            <span><span
                                            >Job created</span></span>
                                                </div>
                                            </a><a className="tr"
                                                   href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674514388"
                                            >
                                                <div className="td">
                                                    2017-12-27 04:00:20
                                                </div>
                                                <div className="td">
                                            <span><span
                                            >Component  start</span></span>
                                                </div>
                                            </a><a className="tr"
                                                   href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674514380"
                                            >
                                                <div className="td">
                                                    2017-12-27 04:00:20
                                                </div>
                                                <div className="td">
                                            <span><span
                                            >Orchestration job 341714666 start</span></span>
                                                </div>
                                            </a><a className="tr"
                                                   href="/admin/projects/2376/orchestrations/333219891/jobs/341714666?eventId=674514360"
                                            >
                                                <div className="td">
                                                    2017-12-27 04:00:19
                                                </div>
                                                <div className="td">
                                            <span><span
                                            >Orchestration job 341714666 scheduled</span></span>
                                                </div>
                                            </a></div>
                                        </div>
                                        <div className="kbc-block-with-padding">
                                            <button type="button" className="btn btn-default"
                                            >More ...
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    ), module)

    .add('Tabs @ ex-adform', () => (
        <div className="kbc-main">
            <div className="kbc-main-content">
                <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="wizardtab">
                    <Tab eventKey={1} title="1. Credentials">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-horizontal"><p
                                    className="help-block">Please provide your
                                    Adform credentials.</p>
                                    <div className="form-group"><label
                                        className="col-sm-4 control-label">Username</label>
                                        <div className="col-sm-6">
                                            <input label="Username" value="" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group"><label
                                        className="col-sm-4 control-label">Password</label>
                                        <div className="col-sm-6">
                                            <input label="Password" value="" type="password"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-horizontal">
                                <div className="form-group">
                                    <div className="pull-right"><a
                                    ><span
                                        className="kbc-icon-cup fa fa-fw"
                                    ></span><span
                                    > Move to Trash</span></a>
                                        <button style={{marginLeft: 20}} disabled="" type="button"
                                                className="btn btn-primary">
                                            Next: Select Template
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="2. Template">
                        <div className="row">
                            <div className="col-sm-10"><p
                            >Please select from the predefined templates to
                                initialize the Adform configuration:</p><p
                            ></p>
                                <div className="Select Select--single is-searchable"
                                >
                                    <div className="Select-control"><span
                                        className="Select-multi-value-wrapper" id="react-select-2--value"
                                    ><div className="Select-placeholder"
                                    >Select template</div><div
                                        className="Select-input" style={{display: 'inline-block'}}
                                    ><input role="combobox"
                                            aria-expanded="false"
                                            aria-owns=""
                                            aria-haspopup="false"
                                            aria-activedescendant="react-select-2--value"
                                            value=""
                                            style={{'width': 5, boxSizing: 'content-box'}}
                                    /><div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            visibility: 'hidden',
                                            height: 0,
                                            overflow: 'scroll',
                                            whiteSpace: 'pre',
                                            fontSize: 14,
                                            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                                            fontWeight: 300,
                                            fontStyle: 'normal',
                                            letterSpacing: 'normal'
                                        }}
                                    ></div></div></span><span
                                        className="Select-arrow-zone"><span
                                        className="Select-arrow"
                                    ></span></span></div>
                                </div>
                                <p></p><p className="help-block">You can change or
                                    extend it to fetch more or other data later.</p></div>
                        </div>
                        <div className="row">
                            <div className="pull-right"><span
                            >&nbsp; &nbsp;</span><a
                            ><span className="kbc-icon-cup fa fa-fw"
                            ></span><span
                            > Move to Trash</span></a>
                                <button style={{marginLeft: 10}} type="button" className="btn btn-link"
                                >Previous
                                </button>
                                <button disabled="" type="button" className="btn btn-success"
                                >Create Extractor
                                </button>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    ), module)

    .add('Tabs @ ex-dropbox', () => (
        <div className="static-modal" style={{position: 'relative'}}>
            <Modal.Dialog className="kbc-authorization-modal">
                <Modal.Header>
                    <Modal.Title>Dropbox file selector</Modal.Title>
                </Modal.Header>
                <form action="" className="form form-horizontal">
                    <Modal.Body>
                        <div id="authorizationrowtabs">
                            <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Choose From Dropbox"
                                     id="ex-dropbox-v2-dropbox-file-selector-modal-tabs-pane-instant">
                                    <div style={{padding: '1.5em'}}><p
                                    >Please choose a CSV file you want to extract via
                                        Dropbox Chooser that uses a pop up window, hence disable windows pop up blocking
                                        for
                                        this
                                        site in the browser settings please.</p>
                                        <div className="dropbox-button">
                                            <div>
                                                <button type="button" className="btn btn-success"
                                                >
                                                    <i className="fa fa-fw fa-dropbox"
                                                    ></i><span
                                                >Choose from Dropbox</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey={2} title="Insert Link Manually"
                                     id="ex-dropbox-v2-dropbox-file-selector-modal-tabs-pane-external">
                                    <div className="form form-horizontal">
                                        <div style={{paddingTop: 20}} className="form-group">
                                            <div className="col-xs-12"><label
                                                className="control-label col-xs-2"
                                            >Link</label>
                                                <div className="col-xs-9"><input
                                                    className="form-control" type="text" name="link" value=""
                                                /><span className="help-block"
                                                >Link to a csv file shared by a dropbox account</span>
                                                </div>
                                            </div>
                                            <div className="col-xs-12"><label
                                                className="control-label col-xs-2"
                                            >Name</label>
                                                <div className="col-xs-9"><input
                                                    className="form-control" type="text" name="name" value=""
                                                /><span className="help-block"
                                                >Name of the csv file and output table</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button>Close</button>
                    </Modal.Footer>
                </form>
            </Modal.Dialog>
        </div>
    ), module)

    .add('Tabs @ Migration Row', () => (
        <div className="static-modal" style={{position: 'relative'}}>
            <Modal.Dialog className="kbc-authorization-modal" bsSize="large">
                <Modal.Header>
                    <Modal.Title>
                        <span>Configuration Migration </span>
                        <span title="Refresh"><span title="Refresh" className="kbc-refresh kbc-icon-cw"></span></span>
                        <div>
                            <small>Last Job: N/A</small>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <form action="" className="form form-horizontal">
                    <Modal.Body>
                        <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title={<a id="components-migration-row-tabs-tab-general" role="tab"
                                                        aria-controls="components-migration-row-tabs-pane-general"
                                                        aria-selected="true" href="#"
                                                        tabindex="0"><span
                            ><span
                            >Affected Configurations</span><span
                                className="fa fa-fw fa-question-circle"
                            ></span></span></a>}>
                                <div id="components-migration-row-tabs-pane-general"
                                     aria-labelledby="components-migration-row-tabs-tab-general" role="tabpanel"
                                     aria-hidden="false"
                                     className="tab-pane active">
                                    <div className="table-responsive">
                                        <table className="table table-stripped table">
                                            <thead>
                                            <tr>
                                                <th>Configuration</th>
                                                <th>Config Table</th>
                                                <th></th>
                                                <th>New Configuration</th>
                                                <th>Migration Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><a className=""
                                                       href="/admin/projects/232/writers/wr-google-drive/squared"
                                                >squared</a>
                                                </td>
                                                <td><a target="_blank"
                                                       href="/admin/projects/232/storage#/tables/sys.c-wr-google-drive.squared"
                                                >sys.c-wr-google-drive.squared</a>
                                                </td>
                                                <td><i className="kbc-icon-arrow-right"
                                                ></i>
                                                </td>
                                                <td>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            keboola.wr-google-drive / squared
                                                        </li>
                                                        <li>
                                                            keboola.wr-google-sheets / squared
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="label label-info"
                                                >n/a</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a className=""
                                                       href="/admin/projects/232/writers/wr-google-drive/testcsv"
                                                >test-csv</a>
                                                </td>
                                                <td><a target="_blank"
                                                       href="/admin/projects/232/storage#/tables/sys.c-wr-google-drive.testcsv"
                                                >sys.c-wr-google-drive.testcsv</a>
                                                </td>
                                                <td><i className="kbc-icon-arrow-right"
                                                ></i>
                                                </td>
                                                <td>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            keboola.wr-google-drive / test-csv
                                                        </li>
                                                        <li>
                                                            keboola.wr-google-sheets / test-csv
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="label label-info"
                                                >n/a</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a className=""
                                                       href="/admin/projects/232/writers/wr-google-drive/travelokadebug"
                                                >traveloka-debug</a>
                                                </td>
                                                <td><a target="_blank"
                                                       href="/admin/projects/232/storage#/tables/sys.c-wr-google-drive.travelokadebug"
                                                >sys.c-wr-google-drive.travelokadebug</a>
                                                </td>
                                                <td><i className="kbc-icon-arrow-right"
                                                ></i>
                                                </td>
                                                <td>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            keboola.wr-google-drive / traveloka-debug
                                                        </li>
                                                        <li>
                                                            keboola.wr-google-sheets / traveloka-debug
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td><span className="label label-info"
                                                >n/a</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey={2} title={<a id="components-migration-row-tabs-tab-datasample" role="tab"
                                                        aria-controls="components-migration-row-tabs-pane-datasample"
                                                        tabindex="-1"
                                                        aria-selected="false" href="#"
                            ><span
                            ><span
                            >Affected Orchestrations</span><span
                                className="fa fa-fw fa-question-circle"
                            ></span></span></a>}>
                                <div id="components-migration-row-tabs-pane-datasample"
                                     aria-labelledby="components-migration-row-tabs-tab-datasample" role="tabpanel"
                                     aria-hidden="true" className="tab-pane"><span
                                ><div className="table-responsive"
                                ><table
                                    className="table table-stripped table"><thead
                                ><tr
                                ><th
                                >Orchestration</th><th
                                >Contains Old extractor tasks</th><th
                                >Contains New extractors tasks</th></tr></thead><tbody
                                ><tr
                                ><td
                                ><a className=""
                                    href="/admin/projects/232/orchestrations/201184834/tasks"
                                >Traveloka Debug</a></td><td
                                ><i className="fa fa-fw fa-check"
                                ></i></td><td
                                ><i className="fa fa-fw fa-times"
                                ></i></td></tr><tr
                                ><td
                                ><a className=""
                                    href="/admin/projects/232/orchestrations/201184834/tasks"
                                >Traveloka Debug</a></td><td
                                ><i className="fa fa-fw fa-check"
                                ></i></td><td
                                ><i className="fa fa-fw fa-times"
                                ></i></td></tr></tbody></table></div></span>
                                </div>
                            </Tab>
                        </Tabs>
                    </Modal.Body>
                    <Modal.Footer>
                        <button>Close</button>
                    </Modal.Footer>
                </form>
            </Modal.Dialog>
        </div>
    ), module)

    .add('Tabs @ ex-s3-aws', () => (
        <div className="kbc-main">
            <div className="kbc-main-content">
                <div className="kbc-inner-content-padding-fix with-bottom-border">
                    <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="General" d="modules-ex-s3-react-pages-index-index-tabbed-area-pane-1">
                            <div className="form-horizontal">
                                <div className="form-group"><label
                                    className="col-xs-4 control-label"
                                >Bucket</label>
                                    <div className="col-xs-8"><input
                                        label="Bucket" value="" placeholder="MyS3Bucket" type="text"
                                        className="form-control"
                                    /></div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-4 control-label">Key</label>
                                    <div className="col-xs-8"><input
                                        label="Key" value="" placeholder="myfolder/myfile.csv" type="text"
                                        className="form-control"/><span
                                        className="help-block"><span
                                    >Do not include bucket name or wildcard asterisk.</span></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-8 col-xs-offset-4"
                                    >
                                        <div className="checkbox"><label
                                            title=""><input
                                            type="checkbox" label="Wildcard"
                                        /><span
                                        >Wildcard</span></label>
                                        </div>
                                        <span className="help-block"><span
                                        >If wildcard is turned on, all files in S3 with the defined prefix will be downloaded. Please note, that all files need to have the same header.</span></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-4 control-label">
                                        Destination
                                    </div>
                                    <div className="col-xs-8"><span
                                        className="kbc-table-selector kbc-table-selector-static"
                                    ><span
                                    ><span className="kbc-sapi-table-link"
                                    >in.c-keboola-ex-s3-282215300.data</span><span
                                    ></span></span><span
                                        className="kbc-icon-pencil"></span><span
                                        className="help-block">Table in Storage, where the CSV file will be imported. If the table or bucket does not exist, it will be created.</span></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-8 col-xs-offset-4"
                                    >
                                        <div className="checkbox"><label
                                            title=""><input
                                            type="checkbox" label="Incremental Load"
                                        /><span
                                        >Incremental Load</span></label>
                                        </div>
                                        <span className="help-block"><span
                                        >If incremental load is turned on, table will be updated instead of rewritten. Tables with primary key will update rows, tables without primary key will append rows.</span></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-4 control-label">Primary
                                        Key
                                    </div>
                                    <div className="col-xs-8"><span
                                    ><div
                                        className="Select Select--multi is-searchable"
                                    ><div className="Select-control"
                                    ><span
                                        className="Select-multi-value-wrapper" id="react-select-2--value"
                                    ><div className="Select-placeholder"
                                    >Select columns</div><div
                                        className="Select-input" style={{display: 'inline-block'}}
                                    ><input role="combobox"
                                            aria-expanded="false"
                                            aria-owns=""
                                            aria-haspopup="false"
                                            aria-activedescendant="react-select-2--value"
                                            value=""
                                            style={{width: 5, boxSizing: 'content-box'}}
                                    /><div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            visibility: 'hidden',
                                            height: 0,
                                            overflow: 'scroll',
                                            whiteSpace: 'pre',
                                            fontSize: 14,
                                            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                                            fontWeight: 300,
                                            fontStyle: 'normal',
                                            letterSpacing: 'normal'
                                        }}
                                    ></div></div></span><span
                                        className="Select-arrow-zone"><span
                                        className="Select-arrow"
                                    ></span></span></div></div></span>
                                        <div className="help-block"><span
                                        >Primary key of the table. If primary key is set, updates can be done on table by selecting </span><strong
                                        >incremental loads</strong><span
                                        >. Primary key can consist of multiple columns.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="AWS Credentials"
                             id="modules-ex-s3-react-pages-index-index-tabbed-area-pane-2">
                            <div className="form-horizontal">
                                <div className="form-group"><label
                                    className="col-xs-4 control-label">Access Key
                                    Id</label>
                                    <div className="col-xs-8"><input
                                        label="Access Key Id" value="" placeholder="MYAWSACCESSKEYID123" type="text"
                                        className="form-control"/><span
                                        className="help-block"><span
                                    ><span
                                    >Make sure that this AWS Access Key ID has correct permissions. Required permissions are</span><ul
                                    ><li
                                    ><code
                                    >s3:GetObject</code><span
                                    > for the given key/wildcard</span></li><li
                                    ><code
                                    >s3:ListBucket</code><span
                                    > to access all wildcard files</span></li><li
                                    ><code
                                    >s3:GetBucketLocation</code><span
                                    > to determine bucket region</span></li></ul><span
                                    >More information is available in the </span><a
                                        href="https://help.keboola.com/extractors/other/aws-s3/"
                                    >documentation</a><span
                                    >.</span></span></span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-4 control-label">Secret Access
                                    Key</label>
                                    <div className="col-xs-8"><input
                                        label="Secret Access Key" value="" type="password" className="form-control"
                                    /><span className="help-block"
                                    ><span
                                    >The AWS Secret Access Key will be encrypted.</span></span>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Advanced"
                             id="modules-ex-s3-react-pages-index-index-tabbed-area-pane-3">
                            <div className="form-horizontal">
                                <div className="form-group"><label
                                    className="col-xs-4 control-label"
                                >Delimiter</label>
                                    <div className="col-xs-8"><input
                                        label="Delimiter" value="," type="text" className="form-control"
                                    /><span className="help-block"
                                    ><span
                                    ><span
                                    >Field delimiter used in CSV file. Default value is </span><code
                                    >,</code><span
                                    >. Use </span><code
                                    >\t</code><span
                                    > for tabulator.</span></span></span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-4 control-label"
                                >Enclosure</label>
                                    <div className="col-xs-8"><input
                                        label="Enclosure" value="&quot;" type="text" className="form-control"
                                    /><span className="help-block"
                                    ><span
                                    ><span
                                    >Field enclosure used in CSV file. Default value is </span><code
                                    >"</code><span
                                    >.</span></span></span>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    ), module)

    .add('Tabs @ Apify (TabbedWizard)', () => (
        <div className="static-modal" style={{position: 'relative'}}>
            <Modal.Dialog className="kbc-wrapper-tabs-margin-fix">
                <Modal.Header>
                    <Modal.Title>Setup Crawler</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Action" id="controlled-tab-wizard-pane-1">
                            <div className="row form-horizontal clearfix">
                                <div className="form-group">
                                    <div className="col-md-12">
                                        <div name="Action" value="crawler"
                                        >
                                            <div className="form-horizontal"
                                            >
                                                <div className="form-group"
                                                >
                                                    <div className="col-sm-8"
                                                    >
                                                        <div className="radio"
                                                        >
                                                            <label title=""
                                                            ><input
                                                                type="radio" label="Run Crawler" value="crawler"

                                                                name="Action"/><span
                                                            >Run Crawler</span></label>
                                                        </div>
                                                        <span className="help-block"
                                                        >Will run specified crawler or wait if it is already running, and eventually retrieve its results if it finishes succesfully</span>
                                                    </div>
                                                </div>
                                                <div className="form-group"
                                                >
                                                    <div className="col-sm-8"
                                                    >
                                                        <div className="radio"
                                                        >
                                                            <label title=""
                                                            ><input
                                                                type="radio" label="Retrieve results only"
                                                                value="executionId"

                                                                name="Action"/><span
                                                            >Retrieve results only</span></label>
                                                        </div>
                                                        <span className="help-block"
                                                        >Retrieve results of a crawler run specified by executionId</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Authentication" id="controlled-tab-wizard-pane-2">
                            <div className="row form-horizontal clearfix">
                                <div className="form-group"><label
                                    className="col-xs-2 control-label">User
                                    ID</label>
                                    <div className="col-xs-10"><input
                                        placeholder="Enter User ID" type="text" value=""
                                        className="form-control"
                                    /><span className="help-block"
                                    ><span
                                    ><span
                                    >User ID from your </span><a
                                        href="https://my.apify.com/account#/integrations" target="_blank"
                                        rel="noopener noreferrer">account page</a><span
                                    >.</span></span></span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-2 control-label"
                                >Token</label>
                                    <div className="col-xs-10"><input
                                        placeholder="Enter token" type="text" value="" className="form-control"
                                    /><span className="help-block"
                                    ><span
                                    ><span
                                    >API token from your </span><a
                                        href="https://my.apify.com/account#/integrations" target="_blank"
                                        rel="noopener noreferrer">account page</a><span
                                    >.</span></span></span>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Specification" id="controlled-tab-wizard-pane-3">
                            <div className="row form form-horizontal">
                                <div className="form-group has-error">
                                    <div className="col-xs-2 control-label">Crawler</div>
                                    <div className="col-xs-8"><p
                                        className="form-control-static"><span>Error: ApifyError: User was not found or authentication token is not valid
                                            at newApifyErrorFromResponse (/home/node_modules/ap ... ncomingMessage.g (events.js:292:16)
                                            name: 'ApifyError',
                                            type: 'USER_OR_TOKEN_NOT_FOUND',
                                            details: statusCode: 404</span><span><span title="Refresh"><span
                                        title="Refresh"
                                        className="kbc-refresh kbc-icon-cw"></span></span></span>
                                    </p></div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-2 control-label">Crawler Settings</div>
                                    <div className="col-xs-8">
                                        <div><textarea style={{display: 'none'}}>{}</textarea>
                                            <div className="CodeMirror cm-s-solarized CodeMirror-wrap">
                                                <div
                                                    style={{
                                                        overflow: 'hidden',
                                                        position: 'relative',
                                                        width: 3,
                                                        height: 0,
                                                        top: 4,
                                                        left: 21
                                                    }}>
                                                        <textarea autocorrect="off" autocapitalize="off"
                                                                  spellcheck="false" tabindex="0"
                                                                  style={{
                                                                      position: 'absolute',
                                                                      padding: 0,
                                                                      width: 1000,
                                                                      height: '1em',
                                                                      outline: 'none'
                                                                  }}></textarea>
                                                </div>
                                                <div className="CodeMirror-vscrollbar" cm-not-content="true">
                                                    <div style={{minWidth: 1, height: 0}}></div>
                                                </div>
                                                <div className="CodeMirror-hscrollbar" cm-not-content="true">
                                                    <div style={{height: '100%', minHeight: 1, width: 0}}></div>
                                                </div>
                                                <div className="CodeMirror-scrollbar-filler"
                                                     cm-not-content="true"></div>
                                                <div className="CodeMirror-gutter-filler"
                                                     cm-not-content="true"></div>
                                                <div className="CodeMirror-scroll" tabindex="-1">
                                                    <div className="CodeMirror-sizer"
                                                         style={{
                                                             marginLeft: 17,
                                                             marginBottom: -21,
                                                             borderRightWidth: 9,
                                                             minHeight: 28,
                                                             paddingRight: 0,
                                                             paddingBottom: 0
                                                         }}>
                                                        <div style={{position: 'relative', top: 0}}>
                                                            <div className="CodeMirror-lines">
                                                                <div
                                                                    style={{
                                                                        position: 'relative',
                                                                        outline: 'none'
                                                                    }}>
                                                                    <div className="CodeMirror-measure">AخA
                                                                    </div>
                                                                    <div className="CodeMirror-measure"></div>
                                                                    <div
                                                                        style={{
                                                                            position: 'relative',
                                                                            'zIndex': 1
                                                                        }}></div>
                                                                    <div className="CodeMirror-cursors">
                                                                        <div className="CodeMirror-cursor"
                                                                             style={{
                                                                                 left: 4,
                                                                                 top: 0,
                                                                                 height: 20
                                                                             }}>&nbsp;</div>
                                                                    </div>
                                                                    <div className="CodeMirror-code">
                                                                            <pre className=" CodeMirror-line "><span
                                                                                style={{paddingRight: 0.1}}>{}</span></pre>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            height: 9,
                                                            width: 1,
                                                            top: 28
                                                        }}></div>
                                                    <div className="CodeMirror-gutters" style={{height: 309}}>
                                                        <div
                                                            className="CodeMirror-gutter CodeMirror-lint-markers"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="help-text"><span>Optional </span><a
                                            href="https://www.apify.com/docs#crawlers" target="_blank"
                                            rel="noopener noreferrer">crawler settings</a><span> JSON object which overrides default crawler settings for current run.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>

                <Modal.Footer>
                    <div className="kbc-buttons">
                        <button type="button" className="btn btn-link">Cancel</button>
                        <button disabled="" type="button" className="btn btn-default">
                            Previous
                        </button>
                        <button type="button" className="btn btn-primary">Next</button>
                        <button disabled="" type="button" className="btn btn-success">
                            Save
                        </button>
                    </div>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    ), module)

    .add('Tabs @ DateRange', () => (
        <div className="static-modal" style={{position: 'relative'}}>
            <Modal.Dialog className="kbc-wrapper-tabs-margin-fix">
                <Modal.Header>
                    <Modal.Title>Change Date Range</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="daterangemodaltab">
                        <Tab eventKey={1} title="Relative">
                            <form className="form-horizontal">
                                <h4><span
                                > Specify relative date range </span><span
                                > </span><select className="input-sm"
                                >
                                    <option selected="" disabled="" value=""
                                    >or choose from suggestions
                                    </option>
                                    <option value="Today">Today
                                    </option>
                                    <option value="Last 7 days"
                                    >Last 7 days
                                    </option>
                                    <option value="Last 2 Months"
                                    >Last 2 Months
                                    </option>
                                    <option value="Last 2 Weeks"
                                    >Last 2 Weeks
                                    </option>
                                    <option value="Last Month">
                                        Last Month
                                    </option>
                                    <option value="This Month">
                                        This Month
                                    </option>
                                    <option value="Last Week">
                                        Last Week
                                    </option>
                                    <option value="This Week">
                                        This Week
                                    </option>
                                </select></h4>
                                <div className="form-group form-group-sm"><label
                                    className="col-sm-1 control-label"
                                >Since</label>
                                    <div className="col-sm-6"><input type="text"
                                                                     className="form-control"
                                                                     name="Since"
                                                                     value="-4 days"
                                    />
                                    </div>
                                </div>
                                <div className="form-group form-group-sm"><label
                                    className="col-sm-1 control-label"
                                >Until</label>
                                    <div className="col-sm-6"><input type="text"
                                                                     className="form-control"
                                                                     name="Until"
                                                                     value="today"
                                    />
                                    </div>
                                </div>
                            </form>
                        </Tab>
                        <Tab eventKey={2} title="Tab 2">
                            <form className="form-horizontal"><h4
                            > Specify absolute date range </h4>
                                <div className="form-group form-group-sm"><label
                                    className="col-sm-1 control-label"
                                >Since</label>
                                    <div className="col-sm-6">
                                        <div className="react-datepicker__input-container"
                                        ><input type="text"
                                                name="Since"
                                                className="form-control"
                                                value=""
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group form-group-sm"><label
                                    className="col-sm-1 control-label"
                                >Until</label>
                                    <div className="col-sm-6">
                                        <div className="react-datepicker__input-container"
                                        ><input type="text"
                                                name="Until"
                                                className="form-control"
                                                value=""
                                        />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </Modal.Body>

                <Modal.Footer>
                    <button>Close</button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    ), module)

    .add('Tabs @ QueryModal ex-facebook', () => (
        <div className="static-modal" style={{position: 'relative'}}>
            <Modal.Dialog className="kbc-wrapper-tabs-margin-fix">
                <Modal.Header>
                    <Modal.Title>New Query</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <span style={{marginTop: 5, marginRight: 9}} className="btn btn-link pull-right" disabled=""
                          aria-describedby="tooltip_4735">Try Query</span>
                    <Tabs className="indigo-temp-tabs" defaultActiveKey={2} id="ex-facebook-query-modal">
                        <Tab eventKey={1} title="General">
                            <div className="row form-horizontal clearfix">
                                <div className="form-group">
                                    <div className="col-md-12"><span
                                        className="pull-right"><div
                                        className="dropdown btn-group btn-group-default"
                                    ><button
                                        id="modules-ex-facebook-react-index-template-selector-dropdown"
                                        role="button" aria-haspopup="true" type="button"
                                        className="dropdown-toggle btn btn-default"
                                    ><span
                                    >Select from template</span><span
                                    > </span><span
                                        className="caret"
                                    ></span></button><ul
                                        role="menu" className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="modules-ex-facebook-react-index-template-selector-dropdown"
                                    ><li role="presentation"
                                         className=""
                                    ><a
                                        role="menuitem" tabindex="-1" href="#"
                                    >All posts</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >All comments</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >All likes</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >Only comments of posts</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >Only likes of posts</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >Selected page insights for over last 1000 days</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >Selected posts insights</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >All posts LIKE reactions summary</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >All posts WOW reactions summary</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >All posts HAHA reactions summary</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >All posts SAD reactions summary</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >All posts ANGRY reactions summary</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >All posts LOVE reactions summary</a></li></ul></div></span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-2 control-label"
                                >Name</label>
                                    <div className="col-xs-10"><input
                                        placeholder="feed" type="text" value="" className="form-control"
                                    /><span className="help-block"
                                    >Helps describing the query and also used to prefix output tables name resulting from the query if they differ.</span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-2 control-label"
                                >Endpoint</label>
                                    <div className="col-xs-10"><input
                                        placeholder="e.g. feed or empty string" type="text" value=""
                                        className="form-control"/><span
                                        className="help-block"><span
                                    ><span
                                    >Url part of Facebook Graph API request specifying node-id and/or edge-name, e.g. feed, me/photos etc. Can be empty.</span><a
                                        href="https://help.keboola.com/extractors/social/facebook#endpoint"
                                        target="_blank"><span
                                    > </span><span
                                    >more info</span></a></span></span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-2 control-label"
                                >Fields</label>
                                    <div className="col-xs-10"><textarea
                                        placeholder="caption,message,created_time,type,description"
                                        className="form-control" rows="2" required=""
                                    ></textarea><span
                                        className="help-block"><span
                                    ><span
                                    >Parameter of Facebook Graph API nested request specifying fields and/or additional parameters of the endpoint.</span><a
                                        href="https://help.keboola.com/extractors/social/facebook#fields"
                                        target="_blank"><span
                                    > </span><span
                                    >more info</span></a></span></span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-2 control-label"
                                >Pages</label>
                                    <div className="col-xs-10">
                                        <div className="Select Select--single is-searchable has-value"
                                        ><input type="hidden"
                                                name="ids"
                                                value="--all--"
                                        />
                                            <div className="Select-control"
                                            ><span
                                                className="Select-multi-value-wrapper"
                                                id="react-select-5--value"
                                            ><div
                                                className="Select-value"
                                            ><span
                                                className="Select-value-label" role="option"
                                                aria-selected="true"
                                                id="react-select-5--value-item"
                                            >All Pages</span></div><div
                                                className="Select-input" style={{display: 'inline-block'}}
                                            ><input
                                                role="combobox" aria-expanded="false" aria-owns=""
                                                aria-haspopup="false"
                                                aria-activedescendant="react-select-5--value"
                                                value="" style={{width: 5, boxSizing: 'content-box'}}
                                            /><div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    visibility: 'hidden',
                                                    height: 0,
                                                    overflow: 'scroll',
                                                    whiteSpace: 'pre',
                                                    fontSize: 14,
                                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                                    fontWeight: 300,
                                                    fontStyle: 'normal',
                                                    letterSpacing: 'normal'
                                                }}
                                            ></div></div></span><span
                                                className="Select-arrow-zone"
                                            ><span
                                                className="Select-arrow"
                                            ></span></span>
                                            </div>
                                        </div>
                                        <span className="help-block">Specifies page that will be applied to the query. Could be either none, all or one of the selected pages. It is represented by Facebook Graph API nested request parameter ids.</span>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Advanced">
                            <div className="row form-horizontal clearfix">
                                <div className="form-group">
                                    <div className="col-md-12"><span
                                        className="pull-right"><div
                                        className="dropdown btn-group btn-group-default"
                                    ><button
                                        id="modules-ex-facebook-react-index-date-range-selector-dropdown"
                                        role="button" aria-haspopup="true" type="button"
                                        className="dropdown-toggle btn btn-default"
                                    ><span
                                    >Sample Date Ranges</span><span
                                    > </span><span
                                        className="caret"
                                    ></span></button><ul
                                        role="menu" className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="modules-ex-facebook-react-index-date-range-selector-dropdown"
                                    ><li role="presentation"
                                         className=""
                                    ><a
                                        role="menuitem" tabindex="-1" href="#"
                                    >today</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >Yesterday</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >Last 7 days</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >Last 30 days</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >This Month</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >Last Month</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >This Week</a></li><li
                                        role="presentation" className=""
                                    ><a role="menuitem"
                                        tabindex="-1"
                                        href="#"
                                    >Last Week</a></li></ul></div></span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-2 control-label"
                                >Since</label>
                                    <div className="col-xs-10"><input
                                        placeholder="yyyy-mm-dd or 15 days ago" type="text"
                                        className="form-control"
                                    /><span className="help-block"
                                    >Parameter of Facebook Graph API nested request. Applies only if endpoint parameter is given and specifies the date since data of the given endpoint will be retrieved. Can by specified absolutely(yyyy-mm-dd) or relatively(e.g. 15 days ago)</span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-2 control-label"
                                >Until</label>
                                    <div className="col-xs-10"><input
                                        placeholder="yyyy-mm-dd or 15 days ago" type="text"
                                        className="form-control"
                                    /><span className="help-block"
                                    >Parameter of Facebook Graph API nested request. Applies only if endpoint parameter is given and specifies the date until data of the given endpoint will be retrieved. Can by specified absolutely(yyyy-mm-dd) or relatively(e.g. 15 days ago)</span>
                                    </div>
                                </div>
                                <div className="form-group"><label
                                    className="col-xs-2 control-label"
                                >Limit</label>
                                    <div className="col-xs-10"><input
                                        placeholder="25" type="text" value="25" className="form-control"
                                    /><span className="help-block"
                                    >Parameter of Facebook Graph API nested request. Specifies size of data returned in one page of the request. Maximum is 100, default 25.</span>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>

                <Modal.Footer>
                    <button>Close</button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    ), module)