import 'normalize.css/normalize.css'
import {useStrict} from 'mobx'
import * as React from 'react'
import {render as renderToDOM} from 'react-dom'
import Root from './app/components/root'
import {Color} from './color/stores'
import Container from './common/components/container'

// Reference app container to render to
const container = document.getElementById('container')!

// Mobx based stores and configurations
const color = new Color([
  '#39cccc',
  '#2ecc40',
  '#ffdc00',
  '#ff851b',
])
color.startAutoCycle(4000)
const stores = {color}
useStrict(true)

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
