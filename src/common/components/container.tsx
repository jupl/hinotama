import {Provider} from 'mobx-react'
import * as React from 'react'
import {AppContainer} from 'react-hot-loader'

/** Container component properties */
interface Props {
  /** Children to place inside */
  children?: JSX.Element
}

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export default function Container({children, ...stores}: Props) {
  // Unless in production, include Mobx devtools
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
