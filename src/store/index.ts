import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slices/appSlice";
import { UserInitialState, userSlice } from "./slices/userSlice";

const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify({
            ...state
        });
        // store.dispatch(setStateVersion())
        localStorage.setItem('pm-user', serializedState);
    } catch (err: any) {
        new Error(err);
    }
};


const loadState: () => UserInitialState | undefined= () => {
    try {
        const serializedState = localStorage.getItem('pm-user');
        if (serializedState === null) {
            return undefined;
        }
        const state: UserInitialState = JSON.parse(serializedState);
        return state
    } catch (err) {
        return undefined;
    }
};

export const reducers = combineReducers({
    app: appSlice.reducer,
    user: userSlice.reducer,
})

const preloadedState = loadState()

const store = configureStore({
    reducer: reducers,
    preloadedState: {
        user: preloadedState
    }
})

store.subscribe(() => {
    saveState(store.getState().user)
})

export default store