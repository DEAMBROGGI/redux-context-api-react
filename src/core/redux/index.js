import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';
//saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'


const sagaMiddleware = createSagaMiddleware()

//inicializo el estado
const initialStateRedux = {}
//creo un middleware
 /* 
    creo el store y les paso los siguientes parametros:
    Primero recibe el reducer principal
    Segundo state inicial(combinereducers)
    Tercero recibe un 
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialStateRedux, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store;
