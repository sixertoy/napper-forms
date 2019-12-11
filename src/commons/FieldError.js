import { withStyles } from '@iziges/napper-core-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { NAPPER_INPUTS_BASE_CLASSNAME } from '../constants';

const DEFAULT_CLASSNAME = `${NAPPER_INPUTS_BASE_CLASSNAME}-error`;

const DEFAULT_STYLES = {
  container: {},
};

function parseErrors(err) {
  if (Array.isArray(err)) return err;
  if (typeof err === 'string') return [err];
  return err;
}

const FieldError = ({
  classes,
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
  console.log('initial', initial);
  const canShowError = touched || (initial && pristine);
  const shouldShowError = canShowError && (error || submitError);
  const errors = parseErrors(error || submitError);
  const classname = classnames(DEFAULT_CLASSNAME, classes.container);
  return (
    <span className={classname}>
      {shouldShowError &&
        errors.map((msg, index) => {
          const key = `error::${index}`;
          return (
            <span className="is-block" key={key}>
              {msg}
            </span>
          );
        })}
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
  classes: PropTypes.shape().isRequired,
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

export default withStyles(DEFAULT_STYLES)(FieldError);
