import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Footer } from '../Footer';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


function AppUI() {
  const { 
    loading, 
    searchedTodos, 
    error, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal 
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <p className='effect'>Cargando aplicación...</p>}
        {(!loading && !searchedTodos.length) && <p className='effect'>Crea tu primer TODO!</p>}
        {error && <p className='effect'>Se produjo un error!</p>}
        { searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <Footer />
    </React.Fragment>
    );
}

export { AppUI };