import { all, takeEvery } from 'redux-saga/effects';
import {actionTypes} from './reducers';
/*
    takeEvery:
        despacha multiples async a la vez.
    takeLastest:
        despacha una accion async a la vez.(Hasta que no se resuelva la primera, no ejecuta la segunda).
*/

import {
  apiSearch,
} from './saga';

function* rootSaga() {
  yield all([
    takeEvery(actionTypes.CALL_SEARCH, apiSearch),
  ])
}

export default rootSaga;
