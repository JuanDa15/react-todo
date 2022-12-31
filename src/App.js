import './App.css';
import { Fragment } from 'react';
import { TODOS } from './assets/data/TODOs';
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoButton } from "./components/TodoButton/TodoButton";
import { TODO } from './models/todo.model';

function App() {

  const todos = TODOS.map(todo => convertToTODO(todo));

  function convertToTODO(value) {
    return new TODO(value.description, value.completed);
  }
  
  return (
    <Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList> 
        {
          todos.map( (todo) =>  (
            <TodoItem key={todo.id}
                      todo={todo} />
          ))   
        }
      </TodoList>
      <TodoButton />
    </Fragment>
  );
}

export default App;
