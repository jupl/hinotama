import {Color} from '.'

jest.useFakeTimers()

describe('Color store', () => {
  it('should not allow an empty values list', () => {
    expect(() => new Color([])).toThrow()
    expect(() => new Color(['#ffffff'])).not.toThrow()
  })

  it('should cycle colors with previousColor', () => {
    const color = new Color(['red', 'green', 'blue'])
    expect(color.value).toMatchSnapshot()
    color.previousColor()
    expect(color.value).toMatchSnapshot()
    color.previousColor()
    expect(color.value).toMatchSnapshot()
    color.previousColor()
    expect(color.value).toMatchSnapshot()
  })

  it('should cycle colors with nextColor', () => {
    const color = new Color(['red', 'green', 'blue'])
    expect(color.value).toMatchSnapshot()
    color.nextColor()
    expect(color.value).toMatchSnapshot()
    color.nextColor()
    expect(color.value).toMatchSnapshot()
    color.nextColor()
    expect(color.value).toMatchSnapshot()
  })

  describe('automatic cycling', () => {
    // Force undefined since color instance will be declared before each test
    let color: Color = undefined!

    // Create a new color instance for each test and start cycling
    beforeEach(() => {
      const COLOR_CYCLE_INTERVAL = 5000
      color = new Color(['red', 'green', 'blue'])
      color.startAutoCycle(COLOR_CYCLE_INTERVAL)
    })

    it('should cycle color automatically', () => {
      expect(color.value).toMatchSnapshot()
      jest.runOnlyPendingTimers()
      expect(color.value).toMatchSnapshot()
      jest.runOnlyPendingTimers()
      expect(color.value).toMatchSnapshot()
      jest.runOnlyPendingTimers()
      expect(color.value).toMatchSnapshot()
    })

    it('should stop color cyling when calling previousColor', () => {
      expect(color.value).toMatchSnapshot()
      jest.runOnlyPendingTimers()
      expect(color.value).toMatchSnapshot()
      color.previousColor()
      jest.runOnlyPendingTimers()
      expect(color.value).toMatchSnapshot()
    })

    it('should stop color cyling when calling nextColor', () => {
      expect(color.value).toMatchSnapshot()
      jest.runOnlyPendingTimers()
      expect(color.value).toMatchSnapshot()
      color.nextColor()
      jest.runOnlyPendingTimers()
      expect(color.value).toMatchSnapshot()
    })
  })
})
