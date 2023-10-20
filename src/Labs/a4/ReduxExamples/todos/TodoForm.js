import { useSelector, useDispatch } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";
function TodoForm({}) {
  const todo = useSelector((state) => state.todoReducer.todo);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item h6">
      <button
        className="btn btn-success float-end ms-2"
        onClick={() => dispatch(addTodo(todo))}
      >
        Add
      </button>
      <button
        className="btn btn-warning float-end"
        onClick={() => dispatch(updateTodo(todo))}
      >
        Update
      </button>
      <input
        className="form-control w-25"
        value={todo.title}
        onChange={(e) =>
          dispatch(
            setTodo({
              ...todo,
              title: e.target.value,
            })
          )
        }
      />
    </li>
  );
}
export default TodoForm;
