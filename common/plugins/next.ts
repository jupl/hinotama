import {Server} from 'hapi'
import {Plugin, IPlugin} from 'hapiour-decorators'
import * as next from 'next'
import {ServerOptions as Options} from 'next/server'

@Plugin({name: 'Next', version: '0.0.1'})
export default class NextPlugin implements IPlugin {
  // tslint:disable-next-line:prefer-function-over-method
  public async register(server: Server, options: Options, done: () => void) {
    const app = next(options)
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
