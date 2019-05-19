export const ERROR_MSG = 'Field must be filled';

const isNotEmptyString = v => {
  let value = (v && typeof v === 'string' && v.trim()) || '';
  value = value.replace(/&nbsp;/g, '\u0020');
  value = value.replace(/\s+/g, '');
  const isvalid = value && value.length && value !== '';
  if (isvalid) return undefined;
  return ERROR_MSG;
};

export default isNotEmptyString;
