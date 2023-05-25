<script>
    import { areas } from "../../store";
    import AreaCard from "./AreaCard.svelte";
    import ExpandedArea from "./ExpandedArea.svelte";

    let activeId = null;
</script>

<div class="area-container">
    {#each $areas as area}
        <AreaCard {...area} />
    {/each}
</div>
<div class="expanded-container">
    <ExpandedArea {activeId} />
</div>

<style>
    .area-container {
        display: flex;
        flex-direction: row;
    }

    .expanded-container {
        margin-top: 1em;
        height: 14em;
        min-width: 10em;
        border: 1px solid red;
    }
</style>
