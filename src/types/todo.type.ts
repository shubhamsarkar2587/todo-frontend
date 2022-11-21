export interface ITodo {
  _id: string,
  name: string,
  description: string,
  status?: boolean,
  createdAt?: string,
  updatedAt?: string
};

export interface ICreateTodo {
  name: string,
  description: string,
  status: boolean
};
