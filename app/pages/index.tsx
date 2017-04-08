import * as React from 'react'
import styled from 'styled-components'

// Container component
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(white, gainsboro);
`

/**
 * Render home page
 * @return Home page component
 */
export default function Index() {
  return <Container>Hello, World</Container>
}
