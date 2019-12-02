import PropTypes from 'prop-types';
import React from 'react';

class FormControls extends React.PureComponent {
  render() {
    const { buttons, canReset, canSubmit, disabled, onReset } = this.props;
    const useSubmitButton = buttons.submit;
    const useResetButton = buttons.cancel && onReset;
    return (
      <div>
        {useResetButton && (
          <button
            disabled={disabled || !canReset}
            type="button"
            onClick={onReset}>
            {buttons.cancel}
          </button>
        )}
        {useSubmitButton && (
          <button disabled={disabled || !canSubmit} type="submit">
            {buttons.submit}
          </button>
        )}
      </div>
    );
  }
}

FormControls.defaultProps = {
  buttons: { cancel: 'Annuler', submit: 'Envoyer' },
  canReset: false,
  canSubmit: false,
  disabled: false,
  onReset: () => {},
  // onSubmit: () => {},
};

FormControls.propTypes = {
  buttons: PropTypes.shape({
    cancel: PropTypes.string,
    submit: PropTypes.string,
  }),
  canReset: PropTypes.bool,
  canSubmit: PropTypes.bool,
  disabled: PropTypes.bool,
  onReset: PropTypes.func,
  // onSubmit: PropTypes.func,
};

export default FormControls;
