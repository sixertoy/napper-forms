import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import onErrorFocusDecorator from 'final-form-focus';

import { FormControls } from './commons';
import { composeFormValidator } from './utils';

class SmarterForm extends React.PureComponent {
  render() {
    const {
      children,
      controls,
      initialValues,
      name,
      onSubmit,
      validators,
    } = this.props;
    const decorators = [onErrorFocusDecorator()];
    const validate = composeFormValidator(validators);
    return (
      <Form
        name={name}
        onSubmit={onSubmit}
        validate={validate}
        decorators={decorators}
        initialValues={initialValues}
        render={({
          dirty,
          form,
          handleSubmit,
          invalid,
          pristine,
          submitError,
          submitting,
          values,
        }) => {
          const disabled = submitting;
          const canSubmit = !(pristine || invalid);
          console.log('Form values => ', values);
          return (
            <form onSubmit={handleSubmit}>
              <div>{children}</div>
              {submitError && <div className="error">{submitError}</div>}
              {controls && (
                <FormControls
                  canReset={dirty}
                  disabled={disabled}
                  onReset={form.reset}
                  canSubmit={canSubmit}
                />
              )}
            </form>
          );
        }}
      />
    );
  }
}

SmarterForm.defaultProps = {
  controls: true,
  initialValues: {},
  validators: [() => undefined],
};

SmarterForm.propTypes = {
  children: PropTypes.node.isRequired,
  controls: PropTypes.bool,
  initialValues: PropTypes.shape(),
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validators: PropTypes.arrayOf(PropTypes.func),
};

export default SmarterForm;
