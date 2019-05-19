import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { uniqKeyId } from '@iziges/smarter-core';

import { FieldError, FieldLabel } from '../commons';
import { isRequired } from '../validators';
import { composeFieldValidators } from '../utils';

class SelectInput extends React.PureComponent {
  formatSelectedValue = obj => {
    if (!obj) return null;
    const { format } = this.props;
    return obj[format.id];
  };

  parseSelectedValue = val => {
    if (typeof val !== 'string') return null;
    const { format, options } = this.props;
    const selected = options.find(obj => obj[format.id] === val);
    return selected;
  };

  renderOption = (format, name) => (opt, index) => {
    const uniqkey = uniqKeyId(name, 'select', index);
    return (
      <option key={uniqkey} value={opt[format.id]}>
        {opt[format.label]}
      </option>
    );
  };

  renderDefaultOption = () => {
    const { name, placeholder } = this.props;
    const uniqkey = uniqKeyId(name, 'select', '__default__');
    return <option key={uniqkey}>{placeholder}</option>;
  };

  render() {
    const {
      className,
      disabled,
      format,
      label,
      name,
      options,
      required,
      size,
    } = this.props;
    const validators = composeFieldValidators(required, [isRequired]);
    return (
      <Field
        name={name}
        validate={validators}
        parse={this.parseSelectedValue}
        format={this.formatSelectedValue}>
        {({ input, meta }) => (
          <div className={`${className}`}>
            <label htmlFor={name}>
              <FieldLabel
                label={label}
                disabled={disabled}
                required={required}
              />
              <select
                {...input}
                size={size}
                multiple={false}
                disabled={disabled}>
                {this.renderDefaultOption()}
                {options && options.map(this.renderOption(format, name))}
              </select>
              <FieldError {...meta} />
            </label>
          </div>
        )}
      </Field>
    );
  }
}

SelectInput.defaultProps = {
  className: 'm12',
  disabled: false,
  format: { id: 'id', label: 'label' },
  placeholder: 'Select a value',
  required: false,
  size: 1,
};

SelectInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
  size: PropTypes.number,
};

export default SelectInput;
