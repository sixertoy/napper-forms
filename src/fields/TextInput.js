import { withStyles } from '@iziges/napper-core-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FieldError, FieldLabel } from '../commons';
import InputPropTypes from '../types';
import { buildStyles } from '../utils';

const jss = buildStyles(null, 'textinput');

class TextInput extends React.PureComponent {
  render() {
    const {
      className,
      classes,
      disabled,
      input,
      label,
      placeholder,
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
            <input
              {...input}
              disabled={disabled}
              id={input.name}
              placeholder={placeholder}
              type="text"
            />
          </div>
        </label>
        <FieldError {...input.meta} />
      </div>
    );
  }
}

TextInput.defaultProps = {
  autoComplete: false,
  className: '',
  disabled: false,
  label: null,
  placeholder: 'Entrer une valeur',
  required: false,
};

TextInput.propTypes = {
  autoComplete: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  input: InputPropTypes.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
};

export default withStyles(jss.styles)(TextInput);
