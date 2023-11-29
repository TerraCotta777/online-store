import { TypedUseSelectorHook } from "react-redux"
import store, { reducers } from "store"
export type RootState = ReturnType<typeof reducers>

export type AppDispatch = typeof store.dispatch
export type DispatchFunc = () => AppDispatch

export type AppSelector = TypedUseSelectorHook<RootState>