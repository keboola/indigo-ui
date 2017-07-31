import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('SearchBar')
  .addWithInfo(
    'default',
    'Desc',
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
    'searchbar @ storage',
    'Desc',
    () => (
        <div class="form-group form-group-sm search-filter">
            <div class="input-group">
                <input class="form-control search ng-pristine ng-valid" type="text" kb-focus="focus" placeholder="Search..." ng-model="query"/>
                    <div class="input-group-addon ng-scope" ng-if="!hasQuery()">
                        <span class="fa fa-fw fa-search"></span>
                    </div>
            </div>
        </div>
    ),
      {
          inline: true,
      }
  )
    .addWithInfo(
    'searchbar @ storage events',
    'Desc',
    () => (
        <div class="form-group">
            <div class="input-group">
                <input type="text" ng-model="query" class="form-control ng-pristine ng-valid" placeholder="Example: type:error"/>
          <span class="input-group-addon">
          <i class="fa fa-question-circle" ng-click="helpModal()"/>
          </span>
            </div>
            <button class="btn btn-default" ng-click="filterEvents()">Search</button>
            <i class="fa fa-times-circle ng-hide" ng-click="removeEventsFilter()" ng-show="query"/>
        </div>
    ),
      {
          inline: true,
      }
  )
;
