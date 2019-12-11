import isemail from 'isemail';

export const ERROR_MSG = 'Value is not an email';

const isEmail = val => {
  const isvalid = isemail(val);
  if (!isvalid) return ERROR_MSG;
  return undefined;
};

export default isEmail;
