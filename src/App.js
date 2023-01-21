import { Route, Routes } from "react-router-dom";
import Loading from "./components/Global/Loading/Loading";
import Nav from "./components/Nav";
import TodoListSaga from "./layouts/TodoList/TodoList.js";

function App() {
  return (
    <div>
      <Loading></Loading>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/saga" element={<TodoListSaga></TodoListSaga>}></Route>
          <Route
            path="/địa chỉ/:slug"
            element={<>Đây sẽ là địa chỉ con</>}
          ></Route>
        </Route>
        <Route path="*" element={<>Đây sẽ trang 404</>}></Route>
      </Routes>
      {/* <TodoListSaga></TodoListSaga> */}
    </div>
  );
}

export default App;
