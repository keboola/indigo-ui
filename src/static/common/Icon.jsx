import React from 'react';
import IconSprite from '../../../dist/icons/symbol/svg/sprite.symbol.svg';

export default React.createClass({
    displayName: 'Icon',
    propTypes: {
        iconClass: React.PropTypes.string,
    },
    render: function () {
        return (
            <svg className="icon-svg">
                <use xlinkHref={IconSprite + "#" + this.props.iconClass}/>
            </svg>
        );
    },
});