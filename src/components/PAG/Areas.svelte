<script>
    import { areas } from "../../store";
    import AreaCard from "./AreaCard.svelte";
</script>

<div class="area-container">
    {#each $areas as area}
        <AreaCard {...area} />
    {/each}
</div>

<style>
    .area-container {
        display: flex;
        flex-direction: row;
    }
</style>
