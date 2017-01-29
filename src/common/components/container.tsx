import {Provider} from 'mobx-react'
import * as React from 'react'
import {AppContainer} from 'react-hot-loader'

/** Container component properties */
interface Props<P> {
  /** Component to render */
  readonly component: React.ComponentClass<P> | (() => React.ReactElement<P>)
}

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export default function Container<P>({
  component: Component,
  ...stores,
}: Props<P>) {
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
