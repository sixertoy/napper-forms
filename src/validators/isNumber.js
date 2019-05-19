export const ERROR_MSG = 'Value is not a number';

const isNumber = val => {
  // NOTE: Regex tester
  // https://regex101.com/r/6qV7Zv/1
  const exp = /^((-{0,1})([0-9]*)(\.{0,1}|,{0,1})([0-9]+)|(-{0,1}Infinity))$/gm;
  const isvalidnumber = typeof val === 'number' && !Number.isNaN(val);
  const isvalidstring = typeof val === 'string' && RegExp(exp).test(val);
  const isvalid = isvalidnumber || isvalidstring;
  if (!isvalid) return ERROR_MSG;
  return undefined;
};

export default isNumber;
