<script>
    import AttributeIcons from "./AttributeIcons.svelte";
    import { todos } from "../store";
    export let name;
    export let id;
    export let properties;
    export let done;

    const removeTodo = () => {
        todos.set($todos.filter((todo) => todo.id != id));
    };
</script>

<div class="todo-container">
    <div id="todo-name">{name}</div>
    <AttributeIcons attributes={properties} />

    <input class="todo-inline" type="checkbox" bind:checked={done} />
    <button class="invisible todo-inline" on:click={removeTodo}>
        <img src="/trash-can.svg" alt="delete" class="todo-inline" />
    </button>
</div>

<style>
    #todo-name {
        flex: 1;
    }

    .todo-container {
        display: flex;
        flex-direction: row;
        white-space: nowrap;

        min-width: 300px;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 1em 1em 1em 1em;
        margin-bottom: 0.5em;
        background-color: var(--primary-color);
        font-family: var(--prose-font);
    }
</style>
