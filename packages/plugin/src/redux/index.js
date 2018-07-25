const devToolsEnhancer = require('remote-redux-devtools').default
const {createStore, combineReducers} = require('redux')
const {storeSettings: mwFunctionsToHttpStoreSettings} = require('@serverless-local-proxy/mw_functions_to_http')
const {storeSettings: pxFunctionsStoreSettings} = require('@serverless-local-proxy/px_functions')

const reducers = {
  [mwFunctionsToHttpStoreSettings.storeKey]: mwFunctionsToHttpStoreSettings.reducer,
  [pxFunctionsStoreSettings.storeKey]: pxFunctionsStoreSettings.reducer
}

const rootReducer = combineReducers(reducers)
const config = (process.env.LOCAL_PROXY_ENABLE_DEV) ? {realtime: true, port: 8001} : {realtime: false}
const store = createStore(rootReducer, devToolsEnhancer(config))
module.exports = {store}
