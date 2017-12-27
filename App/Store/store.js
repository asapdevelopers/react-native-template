import { createStore, applyMiddleware, compose } from "redux";
import { AsyncStorage } from "react-native";
// saga
import createSagaMiddleware from "redux-saga";
import VideosSaga from "./sagas/videosSaga";
// import root reducer
import rootReducer from "./reducers/index";
import Config from "../Config/DebugConfig";
// storage
import storage from "../Config/storage";

/* ------------- Redux Configuration ------------- */

const middleware = [];
const enhancers = [];

/* ------------- Saga Middleware ------------- */

const sagaMonitor = Config.useReactotron
  ? console.tron.createSagaMonitor()
  : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleware.push(sagaMiddleware);

/* ------------- Assemble Middleware ------------- */

enhancers.push(applyMiddleware(...middleware));

// if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
const createAppropriateStore = Config.useReactotron
  ? console.tron.createStore
  : createStore;

var defaultState = {
  videos: {
    results: [],
    loading:false
  }
};

storage
  .load({
    key: "auth",
    autoSync: true
  })
  .then(ret => {
    defaultState.auth.token = ret.token;
    defaultState.auth.expiration = ret.expiration;
    defaultState.auth.user = ret.user;
  });

// Use Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(...enhancers);

// Create the store
export const store = createStore(rootReducer, defaultState, enhancer);

// Run saga middleware
sagaMiddleware.run(VideosSaga);
