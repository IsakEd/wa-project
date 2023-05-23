<script>
    import Todo from "./Todo.svelte";
    import { todos } from "../store";
    import TodoEnter from "./TodoEnter.svelte";
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
