import isemail from 'isemail';
import PropTypes from 'prop-types';
import React from 'react';

import { FieldError, FieldLabel } from '../commons';
import InputPropTypes from '../types';
// import { composeFieldValidators } from '../utils';
import { isNotEmptyString } from '../validators';

// export const DEFAULT_VALIDATORS = [isNotEmptyString, isemail.validate];

class EmailInput extends React.PureComponent {
  render() {
    const {
      className,
      disabled,
      input,
      label,
      placeholder,
      required,
    } = this.props;
    const { name } = input;
    // const validators = composeFieldValidators(required, DEFAULT_VALIDATORS);
    return (
      <div className={className}>
        <label htmlFor={name}>
          <FieldLabel disabled={disabled} label={label} required={required} />
          <input
            {...input}
            id={name}
            type="email"
            disabled={disabled}
            placeholder={placeholder}
          />
          {/* <FieldError {...meta} /> */}
        </label>
      </div>
    );
  }
}

EmailInput.defaultProps = {
  autoComplete: false,
  className: 'm12',
  disabled: false,
  label: null,
  placeholder: 'Entrer an email',
  required: false,
};

EmailInput.propTypes = {
  autoComplete: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: InputPropTypes.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
};

export default EmailInput;
