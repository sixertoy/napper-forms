import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'react-final-form';

import { FieldError } from '../commons';

const noop = () => {};

const HiddenInput = ({ className, name, validator, ...rest }) => (
  <Field
    name={name}
    render={({ input, meta }) => {
      const props = { ...input, ...rest };
      return (
        <div>
          <input type="hidden" {...props} />
          <FieldError meta={meta} />
        </div>
      );
    }}
    validate={validator}
  />
);

HiddenInput.defaultProps = {
  className: '',
  validator: noop,
};

HiddenInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  validator: PropTypes.func,
};

export default HiddenInput;
