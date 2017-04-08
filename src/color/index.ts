import {action, computed, observable} from 'mobx'

/** Color store interface */
export interface IColor {
  /** Current color */
  readonly value: string

  /** Cycle to previous color */
  previousColor(): void

  /** Cycle to next color */
  nextColor(): void
}

/** Default color store implementation */
export class Color implements IColor {
  // ID from setTimeout used for automatic cycling
  private id = 0

  // List of colors to cycle through
  private readonly values: string[]

  // Index in list of colors that points to current color
  @observable private index = 0

  /**
   * Initialize store with a list of colors (at least one) to cycle through
   * @param values List of colors to cycle through
   */
  constructor(values: string[]) {
    if(values.length === 0) {
      throw new Error('There must be at least one color in values list')
    }
    this.values = values
  }

  /**
   * Start cycling automatically through colors with a given interval. If an
   * existing cycle is running, that one will stop. The cycling will also stop
   * when a color is changed manually.
   * @param interval
   */
  public startAutoCycle(interval: number) {
    clearInterval(this.id)
    this.id = window.setInterval(this.autoNextColor, interval)
  }

  /** Current color value */
  @computed
  get value() {
    return this.values[this.index]
  }

  /** Cycle to previous color (any automatic cycling is stopped) */
  @action.bound
  public previousColor() {
    clearInterval(this.id)
    this.index = (this.index + this.values.length - 1) % this.values.length
  }

  /** Cycle to next color */
  @action.bound
  public nextColor() {
    clearInterval(this.id)
    this.autoNextColor()
  }

  // Cycle to next color without stopping automatic cycling (used internally)
  @action.bound
  private autoNextColor() {
    this.index = (this.index + 1) % this.values.length
  }
}
