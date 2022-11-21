import { useDispatch } from 'react-redux';
import { changeTodoStatusAction, deleteTodoAction } from '../store/actions/todo.action';
import { ITodo } from '../types/todo.type';

const ShowTodo = ({ _id, name, description, status }: ITodo) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodoAction(_id))
  };

  const handleTodoStatus = () => {
    dispatch(changeTodoStatusAction(_id))
  };

  return (
    <div className="bg-[#444] p-5 flex items-center justify-between mb-0.5">
      <div className="flex flex-col">
        <span className={`text-3xl font-extrabold break-all w-96 ${status ? 'line-through text-[#777]' : 'text-[#ff9900]'}`}>{name}</span>
        <span className={`break-all w-96 ${status ? 'line-through text-[#777]' : 'text-[#ff9900]'}`}>{description}</span>
      </div>
      <div>
        {
          !status ? (
            <button
              className="bg-white text-[#00aa69] py-1 px-3 border-2 border-solid border-[#00aa69] rounded-lg cursor-pointer mr-2"
              onClick={handleTodoStatus}
            >
              Complete
            </button>
          )
          : null
        }
        <button
          className="bg-white text-[#ca0000] py-1 px-3 border-2 border-solid border-[#ca0000] rounded-lg cursor-pointer"
          onClick={handleDeleteTodo}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ShowTodo;
