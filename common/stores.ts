import {useStrict} from 'mobx'
import {useStaticRendering} from 'mobx-react'

type StoreBuilder<S> = (isServer: boolean) => S

export function buildStoreGetter<S>(createStore: StoreBuilder<S>) {
  let store: S
  return function getStore(isServer: boolean) {
    if(!store) {
      store = createStore(isServer)
      useStrict(true)
      useStaticRendering(isServer)
    }
    return store
  }
}
