import {PluginConfigurator, IPluginConfigurator} from 'hapiour-decorators'
import {ServerOptions} from 'next/server'
import * as config from '../config'
import NextPlugin from '../../common/plugins/next'

@PluginConfigurator(NextPlugin)
export default class NextPluginConfigurator implements IPluginConfigurator {
  public options: ServerOptions

  constructor() {
    this.options = {
      dev: config.development,
      quiet: config.production,
    }
  }
}
