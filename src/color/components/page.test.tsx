import * as React from 'react'
import {shallow} from 'enzyme'
import {Button, ColorPage} from './page'

// tslint:disable:no-magic-numbers

describe('<Color.Page> Template', () => {
  const mockColor = {
    value: 'white',
    previousColor: jest.fn(),
    nextColor: jest.fn(),
  }

  it('should render as expected', () => {
    expect(shallow(<ColorPage color={mockColor} />)).toMatchSnapshot()
  })

  it('should invoke events as expected', () => {
    const component = shallow(<ColorPage color={mockColor} />)
    const buttons = component.find(Button)
    const previousButton = buttons.at(0)
    const nextButton = buttons.at(1)

    expect(buttons.length).toBe(2)
    expect(mockColor.previousColor).not.toBeCalled()
    expect(mockColor.nextColor).not.toBeCalled()

    previousButton.simulate('click')
    expect(mockColor.previousColor.mock.calls.length).toBe(1)
    expect(mockColor.nextColor).not.toHaveBeenCalled()

    nextButton.simulate('click')
    expect(mockColor.previousColor.mock.calls.length).toBe(1)
    expect(mockColor.nextColor.mock.calls.length).toBe(1)
  })
})
