# Fields

#### TextInput

```jsx
import { TextInput } from '@iziges/napper-forms';

<TextInput
  className=""
  disabled=""
  label=""
  name=""
  placeholder=""
  required=""
/>;
```

#### NumberInput

```jsx
import { NumberInput } from '@iziges/napper-forms';

// with required props
<NumberInput label="" name="" />;
```

```jsx
const optionalProps = {
  className: 'm12',
  disabled: false,
  max: Infinity,
  min: -Infinity,
  placeholder: 'Enter a value',
  required: false,
  step: '1',
};
```
