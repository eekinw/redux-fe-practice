import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

// import slice
import sectionSlice from './slices/section-slice';

export const combinedReducer = combineReducers({
  section: sectionSlice
});

function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: combinedReducer,
    preloadedState,
  });
}

export const store = configureStore({
  reducer: combinedReducer,
});

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof combinedReducer>;
export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
