import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs, Tab } from 'react-bootstrap';

storiesOf('Tabs')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <Tabs defaultActiveKey={2}>
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
        </Tabs>
    ),
      {
          inline: true,
      }
  ).addWithInfo(
    'Tabs @ token access',
    'Desc',
    () => (
        <div className="ng-isolate-scope">
            <ul className="nav nav-tabs" ng-className="{'nav-stacked': vertical, 'nav-justified': justified}" ng-transclude="">
                <li ng-className="{active: active, disabled: disabled}" heading="Overview" className="ng-isolate-scope active">
                    <a ng-click="select()" tab-heading-transclude="" className="ng-binding">Overview</a>
                </li>

                <li ng-className="{active: active, disabled: disabled}" className="ng-isolate-scope">
                    <a ng-click="select()" tab-heading-transclude="" className="ng-binding"><tab-heading className="ng-scope">
                        Events
                        <a kb-loader="" className="kb-loader ng-scope" tooltip="" title="Refresh events" is-loading="events.newEventsLoading" ng-click="events.refresh()">
                            <i className="fa fa-refresh"> </i>
                        </a>
                    </tab-heading></a>
                </li>

                <li dropdown="" ng-hide="token.isMasterToken" className="ng-scope">
                    <a href="#" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">Actions <span className="caret"></span></a>

                    <ul className="dropdown-menu">
                        <li>
                            <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete token wrdbsnowflake_253101738?" confirm-type="danger" confirm-label="Delete" on-confirm="delete()" header="Delete token">
                                <i className="fa fa-trash-o"></i>
                                Delete token
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="tab-content">
               <div className="tab-pane ng-scope active" ng-repeat="tab in tabs" ng-className="{active: tab.active}" tab-content-transclude="tab">

           111

            </div>
            <div className="tab-pane ng-scope" ng-repeat="tab in tabs" ng-className="{active: tab.active}" tab-content-transclude="tab">
333
            </div>
            </div>
        </div>
    ),
      {
          inline: true,
      }
  )
    .addWithInfo(
    'Tabs @ Storage',
    'Desc',
    () => (
        <div ng-controller="SessionController" className="kb-component-has-navbar ng-scope">

            <div className="navbar navbar-default">
                <div className="container">

                    <ul className="nav navbar-nav">
                        
                        <li ng-repeat="page in mainNavigationPages"
                            ng-className="{'active': isMainNavigationPageActive(page.id)}" className="ng-scope active">
                            <a kb-href="/" className="ng-binding" href="#/">
                                Tables
                            </a>
                        </li>
                        
                        <li ng-repeat="page in mainNavigationPages"
                            ng-className="{'active': isMainNavigationPageActive(page.id)}" className="ng-scope">
                            <a kb-href="/jobs" className="ng-binding" href="#/jobs">
                                Jobs
                            </a>
                        </li>
                        <li ng-repeat="page in mainNavigationPages"
                            ng-className="{'active': isMainNavigationPageActive(page.id)}" className="ng-scope">
                            <a kb-href="/tokens" className="ng-binding" href="#/tokens">
                                Access tokens
                            </a>
                        </li>
                        <li ng-repeat="page in mainNavigationPages"
                            ng-className="{'active': isMainNavigationPageActive(page.id)}" className="ng-scope">
                            <a kb-href="/file-uploads" className="ng-binding" href="#/file-uploads">
                                Files
                            </a>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right profile">
                        <li dropdown="" on-toggle="tokenDropdownToggled(open)" className="">
                            <a href="#" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-user"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div ng-switch="" on="tokenDropdown.open">
                                    </div>
                                </li>
                                <li ng-show="storage.token.data.description" className="">
                                    <div className="content ng-binding">
                                        <strong className="header">Token description</strong>
                                        jan@keboola.com
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <ng-view className="ng-scope">
                aaaa
            </ng-view>
        </div>
    ),
      {
          inline: true,
      }
  )
 .addWithInfo(
    'Tabs @ Twitter ex',
    'Desc',
    () => (
        <div >
            <ul role="tablist" className="nav nav-tabs">
                <li role="presentation" className="active"><a role="tab" aria-selected="true" href="#">Authorization</a>
                </li>
                <li role="presentation" className=""><a role="tab" tabindex="-1" aria-selected="false" href="#">User
                    Timeline</a></li>
                <li role="presentation" className=""><a role="tab" tabindex="-1" aria-selected="false" href="#">Mentions</a>
                </li>
                <li role="presentation" className=""><a role="tab" tabindex="-1" aria-selected="false" href="#">Followers
                    List</a></li>
                <li role="presentation" className=""><a role="tab" tabindex="-1" aria-selected="false" href="#">Search
                    Tweets</a></li>
            </ul>
            <div className="tab-content">
                <div step="authorization" role="tabpanel" aria-hidden="false" className="tab-pane active">
                    <div className="row">
                        <div className="col-md-12">
                            <div >
                                <div className="static-modal">
                                    <noscript ></noscript>
                                </div>
                                <div className="row component-empty-state text-center"><p >No Account authorized</p>
                                    <button className="btn btn-success"><i className="fa fa-fw fa-user"></i><span >Authorize Account</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kbc-row clearfix">
                        <div className="pull-right">
                            <div ><span >&nbsp; &nbsp;</span><a ><span className="kbc-icon-cup fa fa-fw"></span><span > Move to Trash</span></a>
                                <button disabled="" type="button" className="btn btn-primary">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div step="userTimeline" role="tabpanel" aria-hidden="true" className="tab-pane">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group"><label className="control-label">Screen name</label>
                                <div><input value="" label="Screen name" type="text" className="form-control"/><span
                                    className="help-block">User timeline will be fetched.</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="kbc-row clearfix">
                        <div className="pull-right">
                            <div ><span >&nbsp; &nbsp;</span><a ><span className="kbc-icon-cup fa fa-fw"></span><span > Move to Trash</span></a>
                                <button type="button" className="btn btn-link">Previous</button>
                                <button type="button" className="btn btn-primary">Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div step="mentions" role="tabpanel" aria-hidden="true" className="tab-pane">
                    <div className="row">
                        <div className="col-md-8"><p >Mentions of authorized user will be fetched.</p></div>
                    </div>
                    <div className="kbc-row clearfix">
                        <div className="pull-right">
                            <div ><span >&nbsp; &nbsp;</span><a ><span className="kbc-icon-cup fa fa-fw"></span><span > Move to Trash</span></a>
                                <button type="button" className="btn btn-link">Previous</button>
                                <button type="button" className="btn btn-primary">Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div step="followers" role="tabpanel" aria-hidden="true" className="tab-pane">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group"><label className="control-label">Screen name</label>
                                <div ><input value="" label="Screen name" type="text" className="form-control"/><span
                                    className="help-block">Account's followers will be fetched.</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="kbc-row clearfix">
                        <div className="pull-right">
                            <div ><span >&nbsp; &nbsp;</span><a ><span className="kbc-icon-cup fa fa-fw"></span><span > Move to Trash</span></a>
                                <button type="button" className="btn btn-link">Previous</button>
                                <button type="button" className="btn btn-primary">Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div step="search" role="tabpanel" aria-hidden="true" className="tab-pane">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group"><label className="control-label">Query</label>
                                <div ><input value="" label="Query" type="text" className="form-control"/></div>
                            </div>
                        </div>
                    </div>
                    <div className="kbc-row clearfix">
                        <div className="pull-right">
                            <div ><span >&nbsp; &nbsp;</span><a ><span className="kbc-icon-cup fa fa-fw"></span><span > Move to Trash</span></a>
                                <button type="button" className="btn btn-link">Previous</button>
                                <button type="button" className="btn btn-success">Save</button>
                            </div>
                        </div>
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
