import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('SearchBar')
  .addWithInfo(
    'KBC - Searchbar @ Extractor',
    '',
    () => (
        <form className="kbc-search row kbc-search-row">
            <span className="kbc-icon-search"></span>
            <input type="text" value="" className="form-control" placeholder="Search"/>
        </form>
    ),
      {
          inline: true,
      }
  )
    .addWithInfo(
    'KBC - Searchbar @ Storage',
    '',
    () => (
        <div className="form-group form-group-sm search-filter">
            <div className="input-group">
                <input className="form-control search ng-pristine ng-valid" type="text" kb-focus="focus" placeholder="Search..." ng-model="query"/>
                    <div className="input-group-addon ng-scope" ng-if="!hasQuery()">
                        <span className="fa fa-fw fa-search"></span>
                    </div>
            </div>
        </div>
    ),
      {
          inline: true,
      }
  )
    .addWithInfo(
    'KBC - Searchbar @ Storage Events',
    '',
    () => (
        <div className="form-group">
            <div className="input-group">
                <input type="text" ng-model="query" className="form-control ng-pristine ng-valid" placeholder="Example: type:error"/>
          <span className="input-group-addon">
          <i className="fa fa-question-circle" ng-click="helpModal()"/>
          </span>
            </div>
            <button className="btn btn-default" ng-click="filterEvents()">Search</button>
            <i className="fa fa-times-circle ng-hide" ng-click="removeEventsFilter()" ng-show="query"/>
        </div>
    ),
      {
          inline: true,
      }
  )
;
