import React from 'react';
import IconSprite from '../../../dist/icons/symbol/svg/sprite.symbol.svg';

export default React.createClass({
    displayName: 'Icon',
    propTypes: {
        iconClass: React.PropTypes.string,
        className: React.PropTypes.string,
    },
    render: function () {
        return (
            <svg className={"icon-svg " + this.props.className}>
                <use xlinkHref={IconSprite + "#" + this.props.iconClass}/>
            </svg>
        );
    },
});