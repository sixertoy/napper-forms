import { withStyles } from '@iziges/napper-core-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FieldError, FieldLabel } from '../commons';
import InputPropTypes from '../types';
import { buildStyles } from '../utils';
//
const jss = buildStyles(null, 'textinput');

class TextAreaInput extends React.PureComponent {
  render() {
    const {
      className,
      classes,
      disabled,
      input,
      label,
      maxlength,
      meta,
      placeholder,
      readonly,
      required,
    } = this.props;
    return (
      <div
        className={classnames(
          jss.classname,
          classes['field-container'],
          className
        )}>
        <label className={classes['field-wrapper']} htmlFor={input.name}>
          <FieldLabel disabled={disabled} label={label} required={required} />
          <div className={classes['field-element']}>
            <textarea
              {...input}
              disabled={disabled}
              maxLength={maxlength}
              placeholder={placeholder}
              readOnly={readonly}
              wrap="soft"
            />
          </div>
        </label>
        <FieldError {...meta} />
      </div>
    );
  }
}

TextAreaInput.defaultProps = {
  autoComplete: false,
  className: '',
  disabled: false,
  label: null,
  maxlength: Infinity,
  placeholder: 'Entrer une valeur',
  readonly: false,
  required: false,
};

TextAreaInput.propTypes = {
  autoComplete: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  input: InputPropTypes.isRequired,
  label: PropTypes.string,
  maxlength: PropTypes.number,
  meta: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
};

export default withStyles(jss.styles)(TextAreaInput);
