<script>
    import { shortcut } from "../../lib/shortcut.js";
    import ActionButton from "../../lib/ActionButton.svelte";
    import { todos } from "../../store";
    let value = "";
    let attributes = { urgent: false, hard: false, passion: false };
    $: chosenAttributes = Object.keys(attributes).filter(
        (key) => attributes[key]
    );

    const newTodo = () => {
        todos.set([
            ...$todos,
            {
                name: value,
                properties: chosenAttributes,
                dateCreated: new Date(),
                id: $todos.length + 1, // This might create bugs, maybe?
                done: false,
                parent: { type: "area", id: 1 },
            },
        ]);
        value = "";
        chosenAttributes = [];
    };
</script>

<div class="todo-container">
    <div id="top-row">
        <input
            type="text"
            id="todo-input"
            bind:value
            placeholder="Enter a todo"
        />
        <ActionButton type="submit" on:click={newTodo}>create</ActionButton>
    </div>
    <div class="attribute-container">
        {#each Object.keys(attributes) as attribute, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <button
                class={`attribute-button`}
                on:click={() => {
                    attributes[attribute] = !attributes[attribute];
                }}
                use:shortcut={{ shift: true, code: `Digit${i + 1}` }}
            >
                <img
                    src={`/attributes/${attribute}.svg`}
                    id={attribute}
                    style={`opacity: ${34 + 66 * (attributes[attribute] | 0)}%`}
                    class={`${attribute}-icon`}
                    alt={attribute}
                />
            </button>
        {/each}
    </div>
</div>

<style>
    #todo-input {
        flex: 1;
        border-style: none;
        border-color: Transparent;
        overflow: auto;
        font-size: large;
        min-height: 2em;
        outline: none;
        resize: none;
        font-family: "Montserrat", sans-serif;
        background-color: var(--secondary-color);
    }

    #top-row {
        width: 100%;
        display: flex;
        margin-bottom: 1em;
    }

    .attribute-container {
        display: flex;
        width: 60%;
        justify-content: space-around;
        border-radius: 5px;
    }

    .attribute-button {
        border-radius: 0.5em;
        padding: 0 0 0 0;
        background-color: transparent;
        border: none;
    }

    .attribute-container img {
        height: var(--icon-size);
        width: var(--icon-size);
    }

    #urgent {
        height: calc(0.9 * var(--icon-size));
        width: calc(0.9 * var(--icon-size));
    }
</style>
