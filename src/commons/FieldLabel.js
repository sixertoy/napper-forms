import React from 'react';
import PropTypes from 'prop-types';

const FieldLabel = ({ disabled, label, required }) => {
  let cssclass = 'smarter-form-label';
  const isrequired = Boolean(required);
  if (disabled) cssclass = `${cssclass} disabled`;
  return (
    <span className={cssclass}>
      <span>{label}</span>
      {isrequired && <span className="smarter-form-required-icon">*</span>}
    </span>
  );
};

FieldLabel.defaultProps = {
  disabled: false,
};

FieldLabel.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]).isRequired,
};

export default FieldLabel;
