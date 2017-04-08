import {App, Plugins} from 'hapiour-decorators'
import {port} from './config'
import BaseApp from '../common/app'
import NextPlugin from './plugins/next'
import AsyncHandlerPlugin from '../common/plugins/async-handler'

@App({port})
@Plugins([AsyncHandlerPlugin, NextPlugin])
export default class Application extends BaseApp {}
