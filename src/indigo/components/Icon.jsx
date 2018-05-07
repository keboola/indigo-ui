import React from 'react';
import IconSprite from './../img/symbol/svg/sprite.symbol.svg';
import classNames from "classnames";

export default React.createClass({
    propTypes: {
        iconClass: React.PropTypes.string,
        className: React.PropTypes.string,
    },
    render: function () {
        return (
            <svg className={classNames('icon', this.props.className)}>
                <use xlinkHref={IconSprite + "#" + this.props.iconClass}/>
            </svg>
        );
    },
});