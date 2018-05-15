import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import IconSprite from '../img/symbol/svg/sprite.symbol.svg';

const Icon = ({ iconClass, className }) => {
  return (
    <svg className={classNames('icon', className)}>
      <use xlinkHref={IconSprite + "#" + iconClass}/>
    </svg>
  );
};

Icon.propTypes = {
  iconClass: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
