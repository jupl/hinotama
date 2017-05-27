import {shallow} from 'enzyme'
import * as React from 'react'
import {AppRoot} from './root'

describe('<App.Root> Template', () => {
  it('should render as expected', () => {
    expect(shallow(<AppRoot />)).toMatchSnapshot()
  })
})
