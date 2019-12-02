import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'react-final-form';

import { FieldError, FieldLabel } from '../commons';
import { composeFieldValidators } from '../utils';
import { includesRange, isNumber } from '../validators';

export const DEFAULT_VALIDATORS = [isNumber];

class NumberInput extends React.PureComponent {
  render() {
    const {
      className,
      disabled,
      label,
      max,
      min,
      name,
      placeholder,
      required,
      step,
    } = this.props;
    const defaultsValidators = [...DEFAULT_VALIDATORS, includesRange(min, max)];
    const validators = composeFieldValidators(required, defaultsValidators);
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
                max={max}
                min={min}
                placeholder={placeholder}
                step={step}
                type="number"
              />
              <FieldError {...meta} />
            </label>
          </div>
        )}
      </Field>
    );
  }
}

NumberInput.defaultProps = {
  className: 'm12',
  disabled: false,
  max: Infinity,
  min: -Infinity,
  placeholder: 'Enter a value',
  required: false,
  step: 1,
  // TODO: ESLint do not warn unused props in dumb component
  toot: true,
};

NumberInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
  step: PropTypes.number,
  toot: PropTypes.bool,
};

export default NumberInput;
