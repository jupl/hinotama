import {shallow} from 'enzyme'
import * as React from 'react'
import Index from '.'

describe('/ page', () => {
  it('should render as expected', () => {
    expect(shallow(<Index />)).toMatchSnapshot()
  })
})