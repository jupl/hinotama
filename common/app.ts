import {Server} from 'hapi'
import {IApp} from 'hapiour-decorators'
import {useStaticRendering} from 'mobx-react'

export default class App implements IApp {
  protected server: Server

  constructor(server: Server) {
    this.server = server
    useStaticRendering(true)
  }

  public onStart() {
    console.log('Server running at:', this.server.info.uri)
  }
}
