export const UPDATE_STORE = 'UPDATE_STORE'

export interface Payload {
  breed: string
}

export interface UpdateStoreAction {
  type: typeof UPDATE_STORE,
  payload: Payload
}
