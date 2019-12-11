import { withStyles } from '@iziges/napper-core-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FieldError, FieldLabel } from '../commons';
import InputPropTypes from '../types';
import { buildStyles } from '../utils';

const jss = buildStyles(null, 'textinput');

const onFieldChangeHandler = input => ({ target }) => {
  const nextValue = target.value > 0;
  input.onChange(nextValue);
};

const BooleanInput = ({
  className,
  classes,
  disabled,
  input,
  label,
  labels,
  meta,
  required,
}) => {
  const { name, value } = input;
  const inputNameTrue = `${name}::radio::true`;
  const inputNameFalse = `${name}::radio::false`;
  return (
    <div
      className={classnames(
        jss.classname,
        classes['field-container'],
        className
      )}>
      <FieldLabel disabled={disabled} label={label} required={required} />
      <div>
        <label htmlFor={inputNameTrue}>
          <input
            checked={value}
            id={inputNameTrue}
            name={name}
            type="radio"
            value={1}
            onChange={onFieldChangeHandler(input)}
          />
          <span>{labels[0]}</span>
        </label>
        <label htmlFor={inputNameFalse}>
          <input
            checked={!value}
            id={inputNameFalse}
            name={name}
            type="radio"
            value={0}
            onChange={onFieldChangeHandler(input)}
          />
          <span>{labels[1]}</span>
        </label>
      </div>
      <FieldError {...meta} />
    </div>
  );
};

BooleanInput.defaultProps = {
  className: '',
  disabled: false,
  labels: ['Oui', 'Non'],
  required: false,
};

BooleanInput.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  input: InputPropTypes.isRequired,
  label: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.shape().isRequired,
  required: PropTypes.bool,
};

export default withStyles(jss.styles)(BooleanInput);
