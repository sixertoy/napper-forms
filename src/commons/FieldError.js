import React from 'react';
import PropTypes from 'prop-types';
import { uniqKeyId } from '@iziges/napper-core';

function parseErrors(err) {
  if (Array.isArray(err)) return err;
  if (typeof err === 'string') return [err];
  return err;
}

/*

  NOTE: meta props
  https://github.com/final-form/final-form#fieldstate

*/
const FieldError = ({
  error,
  initial,
  // modified,
  // name,
  pristine,
  submitError,
  touched,
  // value,
  // visited,
}) => {
  const canShowError = touched || (initial && pristine);
  const shouldShowError = canShowError && (error || submitError);
  const errors = parseErrors(error || submitError);
  return (
    <span className="smarter-form-error">
      {shouldShowError &&
        errors.map((msg, index) => (
          <span className="is-block" key={uniqKeyId('error', index)}>
            {msg}
          </span>
        ))}
    </span>
  );
};

FieldError.defaultProps = {
  error: null,
  initial: undefined,
  pristine: false,
  submitError: null,
  touched: false,
};

FieldError.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  initial: PropTypes.any,
  pristine: PropTypes.bool,
  submitError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  touched: PropTypes.bool,
};

export default FieldError;
