<script>
  import TodoCreator from "../components/todo-creator.svelte";
  import { clearTodos, store, updateTodo } from "../stores";
</script>

<header>
  <h1>Todo List App</h1>
</header>

<main>
  <div>
    <TodoCreator todos={$store} />
  </div>

  <ul class="todo-list">
    {#each $store as todo}
      <li>
        <input
          type="checkbox"
          id={todo.id.toString()}
          bind:checked={todo.isChecked}
          on:change={() => {
            updateTodo(todo.id, todo);
          }}
        />

        <label for={todo.id.toString()}>
          {todo.name} and {todo.isChecked}
        </label>
      </li>
    {/each}
  </ul>

  <div>
    <button on:click={clearTodos}>Clear All Completed To-Do's</button>
  </div>
</main>

<style>
  .todo-list {
    list-style-type: none;
  }
</style>
