import isNotEmptyString, { ERROR_MSG } from '../isNotEmptyString';

describe('components | forms | validators | isNotEmptyString', () => {
  it('should return an error message', () => {
    let result = isNotEmptyString('');
    expect(result).toEqual(ERROR_MSG);
    result = isNotEmptyString('   ');
    expect(result).toEqual(ERROR_MSG);
    result = isNotEmptyString(' \u0020  ');
    expect(result).toEqual(ERROR_MSG);
    result = isNotEmptyString(' &nbsp;  ');
    expect(result).toEqual(ERROR_MSG);
    result = isNotEmptyString(' \r  ');
    expect(result).toEqual(ERROR_MSG);
    result = isNotEmptyString(' \n  ');
    expect(result).toEqual(ERROR_MSG);
    result = isNotEmptyString(' \r\n  ');
    expect(result).toEqual(ERROR_MSG);
    result = isNotEmptyString(null);
    expect(result).toEqual(ERROR_MSG);
    result = isNotEmptyString(undefined);
    expect(result).toEqual(ERROR_MSG);
    result = isNotEmptyString({ foo: 'bar' });
    expect(result).toEqual(ERROR_MSG);
  });

  it('should return undefined', () => {
    const expected = undefined;
    const result = isNotEmptyString(' this is not an empty string ');
    expect(result).toEqual(expected);
  });
});
