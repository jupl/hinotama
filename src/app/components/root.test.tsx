import {Provider} from 'mobx-react'
import * as React from 'react'
import {create} from 'react-test-renderer'
import Root from './root'

describe('<App.Root> Template', () => {
  it('should render as expected', () => {
    const stores = {
      color: {
        value: 'white',
        previousColor: jest.fn(),
        nextColor: jest.fn(),
      },
    }
    const component = create((
      <Provider {...stores}>
        <Root />
      </Provider>
    ))
    expect(component.toJSON()).toMatchSnapshot()
  })
})
