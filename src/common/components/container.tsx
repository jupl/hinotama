import {Provider} from 'mobx-react'
import * as React from 'react'
import {AppContainer} from 'react-hot-loader'

/** Container component properties */
interface Props<P> {
  /** Component to render */
  readonly component: React.ComponentClass<P> | (() => React.ReactElement<P>)
}

/**
 * Render container component adding possible dev tools and MobX stores
 * @param props Component properties
 * @return Container component
 */
export function Container<P>({component: Component, ...stores}: Props<P>) {
  // Unless in production, include Mobx devtools
  let children = <Component />
  if(process.env.NODE_ENV !== 'production') {
    const {default: DevTools} = require('mobx-react-devtools')
    children = (
      <div>
        <DevTools />
        {children}
      </div>
    )
  }
  return (
    <AppContainer>
      <Provider {...stores}>
        {children}
      </Provider>
    </AppContainer>
  )
}
