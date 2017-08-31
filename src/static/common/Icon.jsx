import React from 'react';
// const files = require.context('!svg-sprite!./assets', false, /.*\.svg$/);
// files.keys().forEach(files);
//
// const Icon = ({ type, className }) => (
//     <svg className={ `dib v-mid ${ className }` }
//          height="1em" width="1em">
//         <use xlinkHref={ `#${ type }` }></use>
//     </svg>
// );
//
// export default Icon;
//
//
//






export default React.createClass({
    displayName: 'Icon',
    propTypes: {
        iconClass: React.PropTypes.string,
    },
    render: function () {
        return (
        <i className={'icon-' + this.props.iconClass + ' ' + ('icon-' + this.props.iconClass + '-dims')}></i>
        );
    },

});