import React from 'react';
import {
  Alert,
  Button
} from 'react-bootstrap';

const Check = React.createClass({
  propTypes: {
    title: React.PropTypes.bool.isRequired,
    style: React.PropTypes.bool.isRequired,
    closable: React.PropTypes.bool.isRequired,
    content: React.PropTypes.bool.isRequired
  },

  render() {
    return (
        <Alert className="alert-block" bsStyle="danger">
              <h3>{this.props.title}</h3>

              <div className="row">
                {grouped.entrySeq().map(function([type, components]) {
                  return (
                  <div className="col-md-6" key={type}>
                    <h4>
                      <span className={'kbc-' + type + '-icon'}/>
                        {StringUtils.capitalize(type)}s
                    </h4>
                    <ul>
                    {components.entrySeq().map(function([index, component]) {
                      return (
                        <li key={index}>
                            <ComponentDetailLink
                            type={component.get('type')}
                            componentId={component.get('id')}
                            >
                            {component.get('name')}
                            </ComponentDetailLink>
                        </li>
                      );
                    })}
                    </ul>
               </div>
                  );
                })}
            </div>
          </Alert>

    );
  }
});

export default Check;
