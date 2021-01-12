import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ outline, onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultTypes = {
  outline: false,
  onClick: () => {},
  className: '',
};

export default Button;
