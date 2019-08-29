Use react-redux's useDispatch hook to get access to dispatch
`import {useDispatch} from 'react-redux'`

# showing app level messages
```
import {setAppMessage,setAppWarning, setAppError, resetAppMessage} from '../app-state/actions/message'

dispatch(setAppMessage({message:'MESSAGE: Example of a neutral message'}))
dispatch(setAppWarning({message:'WARNING: Example of a warning message'}))
dispatch(setAppError({message:'ERROR: Example of an error message'}))
dispatch(resetAppMessage())
```

# showling app level loading state
```
import {setLoading, resetLoading} from '../app-state/actions/loading'

dispatch(resetLoading())
dispatch(setLoading('fetching items'))
```