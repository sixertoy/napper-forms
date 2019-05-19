const ERROR_MSG = 'Field is out of range';

const includesRange = (min, max) => value => {
  if (value < min || value > max) return ERROR_MSG;
  return undefined;
};

export default includesRange;
