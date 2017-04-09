import {buildStoreGetter} from '../common/stores'

export interface Stores {}

export const getStores = buildStoreGetter(createStores)

export function createStores(isServer: boolean): Readonly<Stores> {
  const stores: Stores = {}
  if(isServer) {
    // Write server specific logic
  }
  else {
    // Write client specific logic
  }
  return stores
}
