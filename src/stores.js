import { writable } from "svelte/store";

const store = writable(JSON.parse(localStorage.getItem("todos") || "[]"));

function createNewTodo(todoData) {
  store.update((current) => {
    current = [...current, todoData];

    localStorage.setItem("todos", JSON.stringify(current));

    return current;
  });
}

function clearTodos() {
  store.update((current) => {
    current = current.filter((todo) => {
      return !todo.isChecked;
    });

    localStorage.setItem("todos", JSON.stringify(current));

    return current;
  });
}

function updateTodo(id, todoData) {
  store.update((current) => {
    const index = current.findIndex((todo) => {
      return todo.id === id;
    });

    current[index] = todoData;

    localStorage.setItem("todos", JSON.stringify(current));

    return current;
  });
}

export { store, createNewTodo, updateTodo, clearTodos };
