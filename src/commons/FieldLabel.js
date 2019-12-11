import { withStyles } from '@iziges/napper-core-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// import { NAPPER_INPUTS_BASE_CLASSNAME } from '../constants';

// const DEFAULT_CLASSNAME = `${NAPPER_INPUTS_BASE_CLASSNAME}-label`;

const DEFAULT_STYLES = {
  container: {
    display: 'block',
    fontSize: 11,
    marginBottom: 7,
  },
};

const FieldLabel = ({ classes, disabled, label, required }) => {
  const isrequired = Boolean(required);
  const classname = classnames(classes.container, { disabled });
  return (
    <span className={classname}>
      <span>{label}</span>
      {isrequired && <span className="smarter-form-required-icon">*</span>}
    </span>
  );
};

FieldLabel.defaultProps = {
  disabled: false,
};

FieldLabel.propTypes = {
  classes: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]).isRequired,
};

export default withStyles(DEFAULT_STYLES)(FieldLabel);
