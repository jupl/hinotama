import {action, computed, observable} from 'mobx'

export interface IColor {
  readonly value: string
  previousColor(): void
  nextColor(): void
}

export class Color implements IColor {
  private values: string[]
  private id = 0
  @observable private index = 0

  constructor(values: string[]) {
    this.values = values
  }

  public startAutoCycle(interval: number) {
    clearInterval(this.id)
    this.id = window.setInterval(this.autoNextColor, interval)
  }

  @computed
  get value() {
    return this.values[this.index]
  }

  @action.bound
  public previousColor() {
    clearInterval(this.id)
    this.index = (this.index + this.values.length - 1) % this.values.length
  }

  @action.bound
  public nextColor() {
    clearInterval(this.id)
    this.autoNextColor()
  }

  @action.bound
  private autoNextColor() {
    this.index = (this.index + 1) % this.values.length
  }
}
