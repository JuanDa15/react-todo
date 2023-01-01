import './App.css';
import { Fragment, useState } from 'react';
import { TODOS } from './assets/data/TODOs';
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoButton } from "./components/TodoButton/TodoButton";
import { TODO } from './models/todo.model';

function App() {

  const defaultTodos = TODOS.map(todo => convertToTODO(todo));

  const [ todos, setTodos] = useState(defaultTodos);
  const [ searchText, setSearchText ] = useState('');
  
  const completedTodos = todos.filter(todo => todo.completed ).length;
  const totalTodos = todos.length;

  let filterTodos = [];

  function convertToTODO(value) {
    return new TODO(value.description, value.completed);
  }

  if ( !(searchText.length >= 1)) {
    filterTodos = todos;  
  } else {
    filterTodos = todos.filter(todo => {
      return todo.description.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  return (
    <Fragment>
      <TodoCounter completedTodos={ completedTodos }
                   totalTodos={totalTodos}
      />
      <TodoSearch searchText={searchText} 
                  setSearchText={setSearchText}
      />
      <TodoList> 
        {
          filterTodos.map( (todo) =>  (
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
