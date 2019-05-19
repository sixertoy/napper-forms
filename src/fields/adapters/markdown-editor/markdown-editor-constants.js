import { mirrorKeys, ucfirst } from '@iziges/smarter-core';

export const MARKDOWN_DEBOUNCE_MS = 500;
export const MARKDOWN_VIEWS = ['markdown', 'raw'];
export const MARKDOWN_EDITOR_VIEWS = mirrorKeys(MARKDOWN_VIEWS, [ucfirst]);

export const MARKDOWN_EDITOR_TOOLBAR = {
  blockType: {
    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
  },
  inline: {
    options: ['bold', 'italic', 'underline', 'strikethrough'],
  },
  options: ['inline', 'blockType'],
};
