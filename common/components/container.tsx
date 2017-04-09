import {Provider} from 'mobx-react'
import * as React from 'react'

interface Props {
  className?: string
  children?: JSX.Element
}

/**
 * Render container component adding possible dev tools and redux store
 * @param props Component properties
 * @return Container component
 */
export default function Container({className, children, ...stores}: Props) {
  // Unless in production, include Mobx devtools
  let devTools
  if(process.env.NODE_ENV !== 'production') {
    const {default: DevTools} = require('mobx-react-devtools')
    devTools = <DevTools />
  }
  return (
    <Provider {...stores}>
      <div className={className}>
        {devTools}
        {children}
      </div>
    </Provider>
  )
}
