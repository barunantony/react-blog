import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss';

const Button = ({ onClick, buttonName, disabled }) => (
  <input
    className='button'
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
  buttonName: PropTypes.string.isRequired
}

Button.defaultProps = {
    disabled: false,
}

export default Button;