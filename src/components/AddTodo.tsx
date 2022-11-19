import React from 'react'

const AddTodo = () => {
  return (
    <div className="bg-[#444] p-5 flex items-center justify-between mb-5">
      <div className="flex mr-36">
        <div className="flex flex-col mr-5 text-base">
          <label className="text-base mb-1">Name</label>
          <input
            className="w-40 rounded-lg py-1 px-2 focus:outline-none border-2 border-solid	border-[#ff9900] text-base text-slate-700"
            type="text"
            placeholder="create todo"
          />
        </div>
        <div className="flex flex-col text-base">
          <label className="text-base mb-1">Description</label>
          <input
            className="w-40 rounded-lg py-1 px-2 focus:outline-none border-2 border-solid	border-[#ff9900] text-base text-slate-700"
            type="text"
            placeholder="enter description"
          />
        </div>
      </div>
      <div>
        <button className="bg-[#ff9900] text-white py-1 px-3 rounded-lg cursor-pointer">Add Todo</button>
      </div>
    </div>
  )
};

export default AddTodo;
