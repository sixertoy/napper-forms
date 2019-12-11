import PropTypes from 'prop-types';
import React from 'react';

import InputPropTypes from '../types';

// import { FieldError } from '../commons';

const noop = () => {};

const HiddenInput = ({ className, input, validator, ...rest }) => {
  const { name, ...inputProps } = input;
  return (
    <div>
      <input type="hidden" name={name} {...inputProps} {...rest} />
      {/* <FieldError meta={meta} /> */}
    </div>
  );
};

HiddenInput.defaultProps = {
  className: '',
  validator: noop,
};

HiddenInput.propTypes = {
  className: PropTypes.string,
  input: InputPropTypes.isRequired,
  validator: PropTypes.func,
};

export default HiddenInput;
