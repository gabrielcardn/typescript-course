import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo({ id, title, completed });
});

// or (id:number, title:string, completed:boolean)
const logTodo = ({ id, title, completed }: Todo) => {
  console.log(`
    The todo if ID: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
  `);
};
