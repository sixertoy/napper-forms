import React from 'react';
import PropTypes from 'prop-types';
import { uniqKeyId } from '@iziges/napper-core';

import { MARKDOWN_EDITOR_VIEWS } from './markdown-editor-constants';

class RichTextEditorHeader extends React.PureComponent {
  render() {
    const { activeView, clickHandler, labels } = this.props;
    const baseUniqKeyId = ['markdown', 'editor', 'controls'];
    return (
      <div className="">
        {Object.keys(MARKDOWN_EDITOR_VIEWS).map((key, index) => {
          const keyvalue = key;
          const isdisabled = activeView === keyvalue;
          const uniqKey = uniqKeyId(baseUniqKeyId, keyvalue);
          const label = (labels && labels[index]) || MARKDOWN_EDITOR_VIEWS[key];
          return (
            <button
              key={uniqKey}
              type="button"
              onClick={() => clickHandler(keyvalue)}
              disabled={isdisabled}>
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    );
  }
}

RichTextEditorHeader.defaultProps = {
  labels: null,
};

RichTextEditorHeader.propTypes = {
  activeView: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default RichTextEditorHeader;
