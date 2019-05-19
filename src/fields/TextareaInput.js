import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import { FieldError, FieldLabel } from '../commons';
import { isNotEmptyString } from '../validators';
import { composeFieldValidators } from '../utils';

const DEFAULT_VALIDATORS = [isNotEmptyString];

class TextareaInput extends React.PureComponent {
  render() {
    const {
      className,
      disabled,
      label,
      maxlength,
      name,
      placeholder,
      readonly,
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
              <textarea
                {...input}
                wrap="soft"
                disabled={disabled}
                readOnly={readonly}
                maxLength={maxlength}
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

TextareaInput.defaultProps = {
  autoComplete: false,
  className: 'm12',
  disabled: false,
  label: null,
  maxlength: Infinity,
  placeholder: 'Entrer une valeur',
  readonly: false,
  required: false,
};

TextareaInput.propTypes = {
  autoComplete: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  maxlength: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
};

export default TextareaInput;
