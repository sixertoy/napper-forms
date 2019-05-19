export const noopnoop = () => undefined;

const compose = (...validators) => value =>
  validators.reduce((acc, validator) => {
    const errorMsg = validator(value);
    // console.log('acc', acc);
    // console.log('errorMsg', errorMsg);
    return [...acc, errorMsg];
  }, []);

const isBoolean = val => typeof val === 'boolean';
const isFunction = val => typeof val === 'function';
const isTrue = val => isBoolean(val) && val === true;
const isFalse = val => isBoolean(val) && val === false;

const isValidArray = val => {
  if (!Array.isArray(val)) return false;
  const filtered = val.filter(isFunction);
  return filtered.length > 0;
};

const isValid = val => isBoolean(val) || isFunction(val) || isValidArray(val);

const parseValidatorsArguments = args => {
  return args.reduce((acc, val) => {
    if (!acc.length && isValid(val)) return [val];
    return isValid(val) && !isBoolean(val) ? [...acc, val] : acc;
  }, []);
};

const toArray = val => {
  if (isFunction(val)) return [val];
  const filtered = val.filter(isFunction);
  if (filtered.length) return filtered;
  return [noopnoop];
};

export const parseValidators = (...args) => {
  const parsed = parseValidatorsArguments(args);
  if (!parsed.length) return toArray(noopnoop);

  const [first, second] = parsed;
  const shouldReturnNoop =
    !isValid(first) ||
    isFalse(first) ||
    (isBoolean(first) && !isValid(second)) ||
    (isBoolean(first) && isBoolean(second));
  if (shouldReturnNoop) return toArray(noopnoop);

  const isSecondValid = isTrue(first) && isValid(second);
  if (isSecondValid) return toArray(second);

  const isFirstValid = isFunction(first) || isValidArray(first);
  if (!isFirstValid) return toArray(noopnoop);

  return toArray(first);
};

const composeValidators = (required, defaults) => {
  const parsed = parseValidators(required, defaults);
  return compose(...parsed);
};

export default composeValidators;
