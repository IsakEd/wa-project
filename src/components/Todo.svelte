<script>
    export let name;
    export let id;
    export let properties;
    export let done;

    const removeTodo = (id) => {
        console.log(`"Remove me please"   - todo #${id}`);
    };
</script>

<div class="todo-container">
    <div id="todo-name">{name}</div>
    <input class="todo-inline" type="checkbox" bind:checked={done} />
    <button on:click={removeTodo}>
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
    }
</style>
