
const ShowTodo = () => {
  return (
    <div className="bg-[#444] p-5 flex items-center justify-between mb-0.5">
      <div className="flex flex-col">
        <span className="text-[#ff9900] text-3xl font-extrabold">Task 1</span>
        <span>description</span>
      </div>
      <div>
        <button className="bg-white text-[#00aa69] py-1 px-3 border-2 border-solid border-[#00aa69] rounded-lg cursor-pointer mr-2">Completed</button>
        <button className="bg-white text-[#ca0000] py-1 px-3 border-2 border-solid border-[#ca0000] rounded-lg cursor-pointer">Delete</button>
      </div>
    </div>
  )
}

export default ShowTodo;
