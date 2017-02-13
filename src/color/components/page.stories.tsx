import * as colors from 'colors.css'
import * as React from 'react'
import {action, storiesOf} from '@kadira/storybook'
import styled from 'styled-components'
import {Color} from '../stores'
import ColorPage from './page'

// Create store instance for component
const color = new Color([
  colors.aqua,
  colors.silver,
  colors.lime,
])

// Create mock store for template
const mockColor = {
  value: 'white',
  previousColor: action('previousColor'),
  nextColor: action('nextColor'),
}

// Styled component for storybook
const StyledColorPage = styled(ColorPage)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

// Define stories
storiesOf('Color.Page', module)
  .add('component', () => <StyledColorPage color={color} />)
  .add('template', () => <StyledColorPage color={mockColor} />)
