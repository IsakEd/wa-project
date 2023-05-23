<script>
    import Todo from "./Todo.svelte";
    import { todos } from "../../store";
    import TodoEnter from "./TodoEnter.svelte";
    import { toLocalStorage } from "../../internal-adapters/toLocalStorage.js";

    // This line is amazing. This one single line automatically syncs the todo with the localStorage whenever
    // any CRUD operation is performed on any part of the todo state, no matter where in the entire project. Go Svelte!
    $: toLocalStorage("todos", $todos);
</script>

<div class="container">
    <TodoEnter />

    {#each $todos as todo}
        <Todo {...todo} />
    {/each}
</div>

<style>
    .container {
        margin: 1em;
    }
</style>
