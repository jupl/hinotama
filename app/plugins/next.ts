import {directory} from '../config'
import BaseNextPlugin from '../../common/plugins/next'

export default class NextPlugin extends BaseNextPlugin {
  constructor() {
    super()
    this.options = {
      ...this.options,
      dir: directory,
    }
  }
}
