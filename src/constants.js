export const NAPPER_INPUTS_BASE_CLASSNAME = 'napper-forms-field';

const buildRuleKeys = (targets, prefix) =>
  targets.map(str => `${prefix} ${str}`).join(',');

const borderColor = '#CCC';

const MAXSIZE = {
  height: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  minHeight: '100%',
  minWidth: '100%',
  width: '100%',
};

const DEFAULT_INPUT_STYLE = {
  border: `1px solid ${borderColor}`,
  borderRadius: 4,
  display: 'block',
  fontSize: 14,
  padding: '7px 12px',
};

export const DEFAULT_STYLES = {
  'field-container': {
    ...MAXSIZE,
    marginBottom: 12,
    overflow: 'hidden',
  },
  'field-element': () => ({
    ...MAXSIZE,
    [buildRuleKeys(
      [
        'input[type="email"]',
        'input[type="number"]',
        'input[type="text"]',
        'input[type="url"]',
      ],
      '& >'
    )]: {
      ...MAXSIZE,
      ...DEFAULT_INPUT_STYLE,
    },
    '& > textarea': {
      height: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      width: '100%',
      ...DEFAULT_INPUT_STYLE,
    },
  }),
  'field-wrapper': {
    ...MAXSIZE,
    display: 'block',
  },
};
