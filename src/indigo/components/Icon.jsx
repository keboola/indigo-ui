import React from 'react';
import IconSprite from './../img/symbol/svg/sprite.symbol.svg';

export default React.createClass({
    displayName: 'Icon',
    propTypes: {
        iconClass: React.PropTypes.string,
        className: React.PropTypes.string,
    },
    getAdditionalClasses: function () {
        return typeof this.props.className === "undefined" ? "" : this.props.className
    },
    render: function () {
        return (
            <svg className={"icon " + this.getAdditionalClasses()}>
                <use xlinkHref={IconSprite + "#" + this.props.iconClass}/>
            </svg>
        );
    },
});