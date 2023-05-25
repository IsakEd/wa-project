<script>
    import { each } from "svelte/internal";
    import { reftree, areas } from "../../store";
    // take the a

    export let activeId;

    const getItemFromIdentifier = (type, id) => {
        const target = reftree; //reftree[type].filter((obj) => obj.id == id);
    };
    console.log(reftree);
</script>
