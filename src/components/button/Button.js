import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss';

const Button = ({ onClick, buttonName, disabled, classNames, type }) => (
  <input
    className={`button ${classNames}`}
    onClick={onClick}
    type={type}
    value={buttonName}
    disabled={disabled}
  >
  </input>
)

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  buttonName: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  type: PropTypes.string
}

Button.defaultProps = {
    disabled: false,
    type: 'button',
    classNames: ''
}

export default Button;