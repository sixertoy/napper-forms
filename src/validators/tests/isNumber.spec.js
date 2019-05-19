import isNumber, { ERROR_MSG } from '../isNumber';

describe('components | forms | validators | isNumber', () => {
  it('should return an error message', () => {
    const expected = ERROR_MSG;
    let result = isNumber('');
    expect(result).toEqual(expected);
    result = isNumber(' ');
    expect(result).toEqual(expected);
    result = isNumber(false);
    expect(result).toEqual(expected);
    result = isNumber([]);
    expect(result).toEqual(expected);
    result = isNumber(NaN);
    expect(result).toEqual(expected);
    result = isNumber('  56789  ');
    expect(result).toEqual(expected);
    result = isNumber(undefined);
    expect(result).toEqual(expected);
    result = isNumber(null);
    expect(result).toEqual(expected);
    result = isNumber(' 56789');
    expect(result).toEqual(expected);
    result = isNumber('56789 ');
    expect(result).toEqual(expected);
  });

  it('should return undefined', () => {
    const expected = undefined;
    let result = isNumber(100);
    expect(result).toEqual(expected);
    result = isNumber(100.567);
    expect(result).toEqual(expected);
    result = isNumber(-100.567);
    expect(result).toEqual(expected);
    result = isNumber(0);
    expect(result).toEqual(expected);
    result = isNumber(Infinity);
    expect(result).toEqual(expected);
    result = isNumber('56789');
    expect(result).toEqual(expected);
  });
});
