import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss';

const Button = ({ onClick, buttonName, disabled, classNames }) => (
  <input
    className={`button ${classNames}`}
    onClick={onClick}
    type='button'
    value={buttonName}
    disabled={disabled}
  >
  </input>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  buttonName: PropTypes.string.isRequired,
  classNames: PropTypes.string
}

Button.defaultProps = {
    disabled: false,
}

export default Button;