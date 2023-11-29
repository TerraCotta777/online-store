import { createSlice } from '@reduxjs/toolkit';

interface VersionState {
    stateVersion: number;
}
const initialState: VersionState = {
    stateVersion: 1
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setStateVersion(state) {
            state.stateVersion = state.stateVersion+1;
        }
    }
});

export const { setStateVersion } = appSlice.actions;