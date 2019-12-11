import { DEFAULT_STYLES, NAPPER_INPUTS_BASE_CLASSNAME } from '../constants';

const buildStyles = (overrides, type) => {
  let styles = { ...DEFAULT_STYLES };
  const classname = `${NAPPER_INPUTS_BASE_CLASSNAME}-${type}`;
  if (!overrides) return { classname, styles };
  styles = Object.keys(overrides).reduce((acc, key) => {
    // TODO check des performances lorsqu'on fait un
    // merge des objets avec les spreads methods
    const nextStyle = overrides[key];
    const hasDefaultStyle = acc[key];
    if (!hasDefaultStyle) return { ...acc, [key]: { ...nextStyle } };
    const mergedStyle = { ...acc[key], ...nextStyle };
    return { ...acc, [key]: { ...mergedStyle } };
  }, styles);
  return { classname, styles };
};

export default buildStyles;
