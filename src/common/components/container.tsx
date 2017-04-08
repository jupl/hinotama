import {Provider} from 'mobx-react'
import * as React from 'react'
import {AppContainer} from 'react-hot-loader'

type StatefulComponent = React.ComponentClass<Object>
type StatelessComponent = (() => React.ReactElement<Object>)

/** Container component properties */
interface Props {
  /** Component to render */
  readonly component: StatefulComponent | StatelessComponent
}

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export default function Container({component: Component, ...stores}: Props) {
  let child = <Component />

  // Unless in production, include Mobx devtools
  if(process.env.NODE_ENV !== 'production') {
    const {default: DevTools} = require('mobx-react-devtools')
    child = (
      <div>
        <DevTools />
        {child}
      </div>
    )
  }

  return (
    <AppContainer>
      <Provider {...stores}>
        {child}
      </Provider>
    </AppContainer>
  )
}
