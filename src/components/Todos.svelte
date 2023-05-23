<script>
    import Todo from "./Todo.svelte";
    import { todos } from "../store";
</script>

<div class="container">
    {#each $todos as todo}
        <Todo {...todo} />
    {/each}
</div>

<style>
    .container {
        margin: 1em;
    }
</style>
