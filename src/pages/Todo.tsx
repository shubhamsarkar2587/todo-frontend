import "./todo.css";
import AddTodo from "../components/AddTodo";
import ShowTodo from "../components/ShowTodo";

const Todo = () => {
  return (
    <div className="h-100 bg-[#333] p-10">
      <div className="text-3xl text-center mb-5">My Todos</div>
      <AddTodo />
      <div className="show_todo overflow-y-auto h-80">
        <ShowTodo />
        <ShowTodo />
        <ShowTodo />
        <ShowTodo />
      </div>
    </div>
  )
}

export default Todo;
