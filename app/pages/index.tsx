import {InitialProps} from 'next/page'
import * as React from 'react'
import styled from 'styled-components'
import {getStores} from '../stores'
import Container from '../../common/components/container'

// Container component
const StyledContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(white, gainsboro);
`

interface Props {
  isServer: boolean
}

export default Object.assign(Index, {getInitialProps})

function Index({isServer}: Props) {
  return (
    <StyledContainer {...getStores(isServer)}>
      Hello, World
    </StyledContainer>
  )
}

function getInitialProps({req}: InitialProps): Props {
  const isServer = !!req
  getStores(isServer)
  return {isServer}
}
