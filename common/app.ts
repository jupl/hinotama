import {Server} from 'hapi'
import {IApp} from 'hapiour-decorators'

export default class App implements IApp {
  protected server: Server

  constructor(server: Server) {
    this.server = server
  }

  public onStart() {
    console.log('Server running at:', this.server.info.uri)
  }
}
