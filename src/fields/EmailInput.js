import React from 'react';
import isemail from 'isemail';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import { FieldError, FieldLabel } from '../commons';
import { isNotEmptyString } from '../validators';
import { composeFieldValidators } from '../utils';

export const DEFAULT_VALIDATORS = [isNotEmptyString, isemail.validate];

class EmailInput extends React.PureComponent {
  render() {
    const {
      className,
      disabled,
      label,
      name,
      placeholder,
      required,
    } = this.props;
    const validators = composeFieldValidators(required, DEFAULT_VALIDATORS);
    return (
      <Field name={name} validate={validators}>
        {({ input, meta }) => (
          <div className={className}>
            <label htmlFor={name}>
              <FieldLabel
                disabled={disabled}
                label={label}
                required={required}
              />
              <input
                {...input}
                id={name}
                type="email"
                disabled={disabled}
                placeholder={placeholder}
              />
              <FieldError {...meta} />
            </label>
          </div>
        )}
      </Field>
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
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
};

export default EmailInput;
