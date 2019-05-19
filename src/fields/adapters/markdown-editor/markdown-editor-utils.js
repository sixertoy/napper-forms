import { EditorState } from 'draft-js';
import { stateToMarkdown } from 'draft-js-export-markdown';
import { stateFromMarkdown } from 'draft-js-import-markdown';

export const parseMarkdown = rawContent => {
  const markdownContent = stateFromMarkdown(rawContent);
  const editorState = EditorState.createWithContent(markdownContent);
  return editorState;
};

export const stringifyMarkdown = editorState => {
  const markdownContent = editorState.getCurrentContent();
  const rawContent = stateToMarkdown(markdownContent);
  return rawContent;
};
