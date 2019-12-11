# Utils

#### buildStyles()

```jsx
import classnames from 'classnames';
import { buildStyles } from '../utils';

const containerType = 'any'
const containerStyles = {
  'field-container': { ... },
  'field-label': { ... },
  'field-wrapper': { ... }
}
const jss = buildStyles(containerStyles, containerType)

const MyComponent = ({ classes, className }) => {
  const classname = classnames(
    classes['field-container'], // overrides
    jss.classname, // default classname
    className // user defained props
  );
  return (
    <div className={classname}>
      ...
    </div>
  )
}

export default withStyles(jss.styles)(MyComponent)
```
