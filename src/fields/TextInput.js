import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'react-final-form';

import { FieldError, FieldLabel } from '../commons';
import { composeFieldValidators } from '../utils';
import { isNotEmptyString } from '../validators';

export const DEFAULT_VALIDATORS = [isNotEmptyString];

class TextInput extends React.PureComponent {
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
                disabled={disabled}
                id={name}
                placeholder={placeholder}
                type="text"
              />
              <FieldError {...meta} />
            </label>
          </div>
        )}
      </Field>
    );
  }
}

TextInput.defaultProps = {
  autoComplete: false,
  className: 'm12',
  disabled: false,
  label: null,
  placeholder: 'Entrer une valeur',
  required: false,
};

TextInput.propTypes = {
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

export default TextInput;
