import {useStrict} from 'mobx'

type StoreBuilder<S> = (isServer: boolean) => S

export function buildStoreGetter<S>(createStore: StoreBuilder<S>) {
  let store: S
  useStrict(true)
  return function getStore(isServer: boolean) {
    if(!store) {
      store = createStore(isServer)
    }
    return store
  }
}
