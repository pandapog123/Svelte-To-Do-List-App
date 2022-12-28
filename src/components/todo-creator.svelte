<script>
  import { createNewTodo } from "../stores";

  export let todos;

  let currentTodo = {
    name: "",
    isChecked: false,
    id: Math.random(),
  };

  $: disabled = currentTodo.name === "";

  function handleSubmit() {
    createNewTodo(currentTodo);

    currentTodo = {
      name: "",
      isChecked: false,
      id: Math.random(),
    };
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input placeholder="Create New To-Do!" bind:value={currentTodo.name} />

  <button type="submit" {disabled}>Submit</button>
</form>
