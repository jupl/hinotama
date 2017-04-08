import * as colors from 'colors.css'
import {Color} from '../color'

/**
 * Create stores used by application
 * @return Object containing store instances
 */
export function createStores() {
  return {
    color: new Color([
      colors.teal,
      colors.green,
      colors.yellow,
      colors.orange,
    ]),
  }
}
