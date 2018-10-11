import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';


storiesOf('MappingDetail', module)
  .add(
    'Basic init',
    withInfo({
      text: `dummy`,
      inline: true,
    })(() => {
      return (
        <div className="mapping">
          <h2><span>Input Mapping</span>
            <span className="pull-right add-mapping-button">
              <span>
                  <button type="button" className="btn btn-success">
                    <i className="kbc-icon-plus"></i>
                    <span>New Input</span>
                  </button>
              </span>
            </span>
          </h2>
          <div className="mapping-rows">
            <div className="kbc-panel-heading-with-table panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">
                  <a aria-expanded="false" aria-selected="false" className="collapsed">
                        <span className="table" style={{wordBreak: "break-word;"}}>
                          <span className="tbody">
                            <span className="tr">
                              <span className="td col-xs-3">
                          <span className="label label-primary">
                            <span>1.02 kB</span>
                          </span>
                              
                              </span>
                              <span className="td col-xs-4">in.c-csv-import.407799760</span>
                              <span className="td col-xs-1">
                                <span className="fa fa-chevron-right fa-fw"/>
                              </span>
                              <span className="td col-xs-3">
                                <span className="fa fa-file-text-o fa-fw" title="File"></span>
                                <span>in/tables/407799760.csv</span>
                              </span>
                              <span className="td col-xs-1 text-right kbc-no-wrap">
                                <span>
                                  <button className="btn btn-link">
                                    <i className="fa kbc-icon-cup"></i>
                                    <span></span>
                                  </button>
                                </span>
                                <span>
                                  <button type="button" className="btn btn-link">
                                    <span className="fa fa-pencil"></span>
                                  </button>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                  </a>
                </div>
              </div>
              <div className="panel-collapse collapse" aria-hidden="true" style={{height: 0}}>
                <ul className="clearfix list-group">
                  <li className="row list-group-item">
                    <strong className="col-md-4">Source table</strong>
                    <span className="col-md-6">
                      <span>
                        <span className="kbc-sapi-table-link">in.c-csv-import.407799760</span>
                      </span>
                    </span>
                  </li>
                  <li className="row list-group-item">
                    <strong className="col-md-4">Columns</strong>
                    <span className="col-md-6">longitude</span>
                  </li>
                  <li className="row list-group-item">
                    <strong className="col-md-4">Filters</strong>
                    <span className="col-md-6">
                      <span>
                        <span>Where </span>
                        <strong>longitude</strong>
                        <span>not in</span>
                        <span> </span>
                        <strong>[space character]</strong>
                      </span>
                      <span> and </span>
                      <span>
                        <span>changed in last </span>
                        <span>45 minutes</span>
                    </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
    
