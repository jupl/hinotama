import {Server} from 'hapi'
import {Plugin, IPlugin, IPluginOptions} from 'hapiour-decorators'
import * as next from 'next'
import {ServerOptions as Options} from 'next/server'
import {isDevelopment, isProduction} from '../config'

@Plugin({name: 'Next', version: '0.0.1'})
export default class NextPlugin implements IPlugin {
  protected options: Readonly<Options> = {
    dev: isDevelopment,
    quiet: isProduction,
  }

  // tslint:disable-next-line:prefer-function-over-method
  public async register(server: Server, _: IPluginOptions, done: () => void) {
    const app = next(this.options)
    const nextHandler = app.getRequestHandler()
    await app.prepare()
    server.route({
      method: 'GET',
      path: '/{p*}',
      async handler({raw: {req, res}, url}, reply) {
        try {
          await nextHandler(req, res, url)
          reply.close(false)
        }
        catch(e) {
          reply(e)
        }
      },
    })
    done()
  }
}
