import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import "./todo.css";
import AddTodo from "../components/AddTodo";
import ShowTodo from "../components/ShowTodo";
import { getTodosAction } from "../store/actions/todo.action";
import { ITodo } from '../types/todo.type';

interface ITodoState {
  todos: ITodo[]
}

const Todo = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(((state: ITodoState) => state.todos))

  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true);
    dispatch(getTodosAction({ callback: handleLoading }));
  }, [dispatch]);

  console.log(loading)

  return (
    <div className="h-100 bg-[#333] p-10">
      <div className="text-3xl text-center mb-5">My Todos</div>
      <AddTodo />
      <div className="h-80">
        {
          !loading ? (
            <div className="show_todo overflow-y-auto h-full">
              {allTodos.length > 0 ? allTodos.map((todo) => (
                <ShowTodo
                  key={todo._id}
                  _id={todo._id}
                  name={todo.name}
                  description={todo.description}
                  status={todo.status}
                />
              )) : (
                <div className="text-3xl font-extrabold mt-5 text-[#ff9900] flex items-center justify-center">
                  No Todo Found!
                </div>)}
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default Todo;
