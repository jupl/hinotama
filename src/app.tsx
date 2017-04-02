import 'normalize.css/normalize.css'
import {useStrict} from 'mobx'
import * as React from 'react'
import {render as renderToDOM} from 'react-dom'
import {createStores} from './app/stores'
import Root from './app/components/root'
import Container from './common/components/container'

// Reference app container to render to
const container = document.getElementById('container')!

// Mobx based stores and configurations
useStrict(true)
const stores = createStores()

// Render application. Also register to rerender if hot loading is available.
if(module.hot) {
  module.hot.accept('./app/components/root', () => setTimeout(render))
  module.hot.accept('./common/components/container', () => setTimeout(render))
}
render()

/**
 * Render application to the container. If we are not in production and an
 * error is encountered the error is rendered to the screen. This may be called
 * multiple times to rerender when a hot reload occurs.
 */
function render() {
  renderToDOM(<Container {...stores} component={Root} />, container)
}
