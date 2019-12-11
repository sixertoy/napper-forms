import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'react-final-form';

import { FieldLabel } from '../commons';
import {
  MARKDOWN_VIEWS,
  MarkdownEditorControls,
  MarkdownEditorView,
  // MarkdownEditorRaw,
} from './adapters/markdown-editor';

class RichTextInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeView: MARKDOWN_VIEWS[0] };
  }

  onToggleViewHandler = activeView => {
    this.setState({ activeView });
  };

  render() {
    const { activeView } = this.state;
    const { className, label, name, required } = this.props;
    // const showMarkdownView = activeView === VIEWS.markdown;
    return (
      <Field name={name} label={label}>
        {({ input }) => {
          return (
            <div className={className}>
              <label htmlFor={name}>
                <FieldLabel label={label} required={required} />
                <div className="markdown-editor-container">
                  <MarkdownEditorControls
                    activeView={activeView}
                    clickHandler={this.onToggleViewHandler}
                  />
                  <MarkdownEditorView
                    content={input.value}
                    onChangeHandler={input.onChange}
                  />
                  <div className="is-block">
                    <textarea {...input} className="markdown-editor-input" />
                  </div>
                </div>
              </label>
            </div>
          );
        }}
      </Field>
    );
  }
}

RichTextInput.defaultProps = {
  className: 'richtext-input',
  required: false,
};

RichTextInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
};

export default RichTextInput;
