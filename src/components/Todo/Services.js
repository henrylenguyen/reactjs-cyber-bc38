import axios from "axios";

export function requestAPI() {
  return axios.request({
    method: "GET",
    url: "https://63c910d9320a0c4c953fd623.mockapi.io/Task",
  });
}

export function PostTaskTodoAPI(action) {
  return axios.request({
    method: "POST",
    url: "https://63c910d9320a0c4c953fd623.mockapi.io/Task",
    data: {
      name: action,
    },
  });
}
export function DeleteTaskTodoAPI({payload}) {
  return axios.request({
    method: "DELETE",
    url: "https://63c910d9320a0c4c953fd623.mockapi.io/Task/" + payload,
  });
}
export function ToggleTaskTodoAPI({payload}) {
  return axios.request({
    method: "PUT",
    url: "https://63c910d9320a0c4c953fd623.mockapi.io/Task/" + payload.id,
    data: {
      status: payload.status,
    },
  });
}
