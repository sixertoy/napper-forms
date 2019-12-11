import PropTypes from 'prop-types';

const InputPropTypes = PropTypes.shape({
  checked: PropTypes.shape(),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
});

export default InputPropTypes;
