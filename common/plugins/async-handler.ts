import {Server} from 'hapi'
import {Plugin, IPlugin} from 'hapiour-decorators'

@Plugin({name: 'Async Handler', version: '0.0.1'})
export default class AsyncHandlerPlugin implements IPlugin {
  // tslint:disable-next-line:prefer-function-over-method
  public async register(server: Server, _: {}, done: () => void) {
    server.register({
      register: require('hapi-es7-async-handler'),
      options: {server},
    })
    done()
  }
}
