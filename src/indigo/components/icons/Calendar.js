import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Calendar = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 13 13"
      className={classNames('icon', className)}
      {...props}
    >
      <path
        d="M0 2.996C0 2.446.447 2 .999 2H12c.552 0 .999.445.999.996v9.008c0 .55-.447.996-.999.996H1A.996.996 0 0 1 0 12.004V2.996zM9 0h2v2H9V0zM2 0h2v2H2V0zM1 5v7h11V5H1zm1 1h1v1H2V6zm2 0h1v1H4V6zm2 0h1v1H6V6zm2 0h1v1H8V6zm2 0h1v1h-1V6zM2 8h1v1H2V8zm2 0h1v1H4V8zm2 0h1v1H6V8zm2 0h1v1H8V8zm2 0h1v1h-1V8zm0 2h1v1h-1v-1zm-2 0h1v1H8v-1zm-2 0h1v1H6v-1zm-2 0h1v1H4v-1zm-2 0h1v1H2v-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

Calendar.propTypes = {
  className: PropTypes.string
};

export default Calendar;