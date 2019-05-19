const noop = () => ({});

const composedValidate = fns => values => {
  const errors = fns.reduce((acc, fn) => {
    const error = fn(values);
    return { ...acc, ...error };
  }, {});
  return errors;
};

const composeFormValidator = fns => {
  if (!fns || !Array.isArray(fns)) return noop;
  const validators = fns.map(fn => {
    const isfunction = typeof fn === 'function';
    // TODO: instead use logger.warn
    // eslint-disable-next-line
    if (!isfunction) console.warn('Validator is not a function: ', typeof fn);
    return isfunction ? fn : noop;
  });
  return composedValidate(validators);
};

export default composeFormValidator;
