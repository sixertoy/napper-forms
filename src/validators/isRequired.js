const isRequired = val =>
  val !== null &&
  val !== 'null' &&
  val !== 'undefined' &&
  typeof val !== 'undefined';

export default isRequired;
