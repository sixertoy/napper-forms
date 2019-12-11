import { withStyles } from '@iziges/napper-core-react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { NAPPER_INPUTS_BASE_CLASSNAME } from '../constants';

const DEFAULT_CLASSNAME = `${NAPPER_INPUTS_BASE_CLASSNAME}-controls`;

const DEFAULT_STYLES = {
  container: {},
};

class FormControls extends React.PureComponent {
  render() {
    const {
      buttons,
      canReset,
      canSubmit,
      classes,
      disabled,
      onReset,
    } = this.props;
    const useSubmitButton = buttons.submit;
    const useResetButton = buttons.cancel && onReset;
    const classname = classnames(DEFAULT_CLASSNAME, classes.container);
    return (
      <div className={classname}>
        {useResetButton && (
          <button
            className="cancel"
            disabled={disabled || !canReset}
            type="button"
            onClick={onReset}>
            {buttons.cancel}
          </button>
        )}
        {useSubmitButton && (
          <button
            className="submit"
            disabled={disabled || !canSubmit}
            type="submit">
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
};

FormControls.propTypes = {
  buttons: PropTypes.shape({
    cancel: PropTypes.string,
    submit: PropTypes.string,
  }),
  canReset: PropTypes.bool,
  canSubmit: PropTypes.bool,
  classes: PropTypes.shape().isRequired,
  disabled: PropTypes.bool,
  onReset: PropTypes.func,
};

export default withStyles(DEFAULT_STYLES)(FormControls);
