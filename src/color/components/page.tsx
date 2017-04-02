import {inject, observer} from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import {IColor} from '../stores'

// Background component
interface BackgroundProps {
  color: string
  className?: string
  children?: React.ReactNode
}
const Background = ({color: _, ...props}: BackgroundProps) =>
  <div {...props} />
const StyledBackground = styled(Background)`
  transition: background 0.8s ease-out;
  display: flex;
  background-color: ${({color}) => color};
`

// Text component
const Text = styled.span`
  margin-left: 4px;
  margin-right: 4px;
`

// Gradient overlay component
const Gradient = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(255, 255, 255, 0.4), transparent);
`

/** Button component */
export const Button = styled.button`
  border-radius: 50%;
  background: radial-gradient(white, gainsboro);
  border-color: gainsboro;
  outline: none;
`

/** Properties for color page component */
export interface Props {
  /** CSS color to show */
  readonly color?: IColor

  /** Additional class names to include */
  readonly className?: string
}

// Bind color page component with properties from Mobx provider
export default inject('color')(observer(ColorPage))

/**
 * Render color page component showing current color and buttons to change
 * @param props Component properties
 * @return Color page component
 */
export function ColorPage({className, color}: Props) {
  // Force non-undefined stores due to behavior of Mobx's inject
  color = color!

  return (
    <StyledBackground color={color.value} className={className}>
      <Gradient>
        <Button onClick={color.previousColor}>&lt;</Button>
        <Text>Hello, World</Text>
        <Button onClick={color.nextColor}>&gt;</Button>
      </Gradient>
    </StyledBackground>
  )
}
