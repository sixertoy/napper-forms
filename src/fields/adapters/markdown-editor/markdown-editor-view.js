import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { debounce } from '@iziges/napper-core';

import { parseMarkdown, stringifyMarkdown } from './markdown-editor-utils';
import {
  MARKDOWN_EDITOR_TOOLBAR,
  MARKDOWN_DEBOUNCE_MS,
} from './markdown-editor-constants';

// NOTE: react-draft-wysiwyg documentation
// https://jpuri.github.io/react-draft-wysiwyg/#/docs
class RichTextEditorMarkdown extends React.PureComponent {
  updateInputAfterStateChanges = debounce(() => {
    const { editorState } = this.state;
    const { onChangeHandler } = this.props;
    const rawvalue = stringifyMarkdown(editorState);
    onChangeHandler(rawvalue);
  }, MARKDOWN_DEBOUNCE_MS);

  constructor(props) {
    super(props);
    const { content } = props;
    const editorState = parseMarkdown(content || '');
    this.state = { editorState };
  }

  onEditorStateChange = editorState => {
    this.setState({ editorState }, this.updateInputAfterStateChanges);
  };

  render() {
    const { editorState } = this.state;
    const { readonly, visible } = this.props;
    const classes = visible ? 'is-block' : 'is-hidden';
    return (
      <div className={classes}>
        <Editor
          readOnly={readonly}
          initialEditorState={editorState}
          toolbar={MARKDOWN_EDITOR_TOOLBAR}
          editorClassName="markdown-draft-editor"
          wrapperClassName="markdown-draft-wrapper"
          toolbarClassName="markdown-draft-toolbar"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

RichTextEditorMarkdown.defaultProps = {
  content: '',
  readonly: false,
  visible: true,
};

RichTextEditorMarkdown.propTypes = {
  content: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
  visible: PropTypes.bool,
};

export default RichTextEditorMarkdown;
