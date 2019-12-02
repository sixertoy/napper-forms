import onErrorFocusDecorator from 'final-form-focus';
import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-final-form';

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
        decorators={decorators}
        initialValues={initialValues}
        name={name}
        onSubmit={onSubmit}
        validate={validate}>
        {({
          dirty,
          form,
          handleSubmit,
          invalid,
          pristine,
          submitError,
          submitting,
          // values,
        }) => {
          const disabled = submitting;
          const canSubmit = !(pristine || invalid);
          return (
            <form onSubmit={handleSubmit}>
              <div>{children}</div>
              {submitError && <div className="error">{submitError}</div>}
              {controls && (
                <FormControls
                  canReset={dirty}
                  canSubmit={canSubmit}
                  disabled={disabled}
                  onReset={form.reset}
                />
              )}
            </form>
          );
        }}
      </Form>
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
