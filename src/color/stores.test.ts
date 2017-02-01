import {Color} from './stores'

describe('Color store', () => {
  it('should not allow an empty values list', () => {
    expect(() => new Color([])).toThrow()
    expect(() => new Color(['#ffffff'])).not.toThrow()
  })
})
