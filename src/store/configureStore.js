import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducer from "../components/reducers";
import { rootSaga } from "../root/rootSaga";

const SagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(logger, SagaMiddleWare),
});
SagaMiddleWare.run(rootSaga)
export default store;