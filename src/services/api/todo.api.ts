import axios from "axios";

const baseUrl: string = "https://todo-banner.herokuapp.com/api/v1";

export const getTodoService = async () => {
  const todos = await axios.get(`${baseUrl}/todo`)
  return todos
}

export const postTodoService = async (postData: any) => {
  await axios.post(`${baseUrl}/todo`, postData)
};

export const deleteTodoService = async (deleteTodoId: any) => {
  await axios.delete(`${baseUrl}/todo/${deleteTodoId}`)
};
