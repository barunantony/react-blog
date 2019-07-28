import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss';

const Input = ({ onChange, inputName, disabled, classNames, type }) => (
    <div className={`inputContainer ${classNames}`}>
        <label htmlFor="appInput">{inputName}:</label>
        <input
            className='input'
            id='appInput'
            onChange={(e) => { onChange(e);}}
            type={type}
            disabled={disabled}
        >
        </input>
    </div>
)

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    inputName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    classNames: PropTypes.string
}

Input.defaultProps = {
    disabled: false,
    type: 'text'
}

export default Input;