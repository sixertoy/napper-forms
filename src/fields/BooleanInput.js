import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import { FieldLabel } from '../commons';

class BooleanInput extends React.PureComponent {
  render() {
    const { className, disabled, label, labels, name, required } = this.props;
    return (
      <Field
        name={name}
        type="hidden"
        parse={v => v === 'yes'}
        format={v => (v === true && 'yes') || null}>
        {({ input }) => (
          <div className={className}>
            <FieldLabel disabled={disabled} label={label} required={required} />
            <div>
              <input {...input} type="hidden" />
              <label htmlFor={`${name}::radio::yes`}>
                <input
                  value="yes"
                  type="radio"
                  checked={input.value}
                  name={`${name}::radio`}
                  onChange={input.onChange}
                  id={`${name}::radio::yes`}
                />
                <span>{labels[0]}</span>
              </label>
              <label htmlFor={`${name}::radio::no`}>
                <input
                  value="no"
                  type="radio"
                  checked={!input.value}
                  name={`${name}::radio`}
                  onChange={input.onChange}
                  id={`${name}::radio::no`}
                />
                <span>{labels[1]}</span>
              </label>
            </div>
          </div>
        )}
      </Field>
    );
  }
}

BooleanInput.defaultProps = {
  className: 'm12',
  disabled: false,
  labels: ['Oui', 'Non'],
  required: false,
};

BooleanInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default BooleanInput;
