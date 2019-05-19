import { noopnoop, parseValidators } from '../composeFieldValidators';

describe('composeFieldValidators', () => {
  it('first argument is not a valid type', () => {
    let result = parseValidators(1234);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators({});
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators([]);
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators(null);
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators(undefined);
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators();
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators(['not a function']);
    expect(result[0]).toEqual(noopnoop);
  });

  it('with false as not required', () => {
    const result = parseValidators(false);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(noopnoop);
  });

  it('first argument is false, second is function', () => {
    const mock = jest.fn();
    const result = parseValidators(false, mock);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(noopnoop);
  });

  it('first argument is false, second is array', () => {
    const mock = jest.fn();
    const result = parseValidators(false, [mock]);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(noopnoop);
  });

  it('with true but no fallback', () => {
    const result = parseValidators(true);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(noopnoop);
  });

  it('first argument is true, second is mock', () => {
    const mock = jest.fn();
    const result = parseValidators(true, mock);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(mock);
  });

  it('first argument is true, second is mocks', () => {
    const mock = jest.fn();
    const result = parseValidators(true, [mock]);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(mock);
  });

  it('first argument is true, second is not valid', () => {
    let result = parseValidators(true, 'toto');
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators(true, false);
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators(true, []);
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators(true, null);
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators(true, {});
    expect(result[0]).toEqual(noopnoop);

    result = parseValidators(true, ['not a function']);
    expect(result[0]).toEqual(noopnoop);
  });

  it('first argument is mock', () => {
    const mock = jest.fn();
    const result = parseValidators(mock);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(mock);
  });

  it('first argument is mocks', () => {
    const mock = jest.fn();
    const result = parseValidators([mock]);
    const isArray = Array.isArray(result);
    expect(isArray).toBe(true);
    expect(result[0]).toEqual(mock);
  });
});
