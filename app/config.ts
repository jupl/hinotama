import {port as basePort} from '../common/config'
export * from '../common/config'

const DEFAULT_PORT = 3000

export const directory = __dirname
export const port = isNaN(basePort) ? DEFAULT_PORT : basePort
