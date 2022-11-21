import axios from "axios";

const baseUrl:string = "https://todo-banner.herokuapp.com/api/v1";

export const getTodoService = async () => {
  try {
    const todos = await axios.get(
      `${baseUrl}/todo`
    )
    return todos
  } catch (err) {

  }
}