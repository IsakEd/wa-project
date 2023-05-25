<script>
	import Card from './Card.svelte';
	import GoalCard from './GoalCard.svelte';
	import { goals } from '../../store';
</script>



<div class="content">
<div id="goals">
    <h1>Goals</h1>
    <div class="card-container" id="projects">
        {#each $goals as goal}
            <div id="card-container">
                <GoalCard {goal} />
            </div>
        {/each}
    </div>
</div>
</div>

<style>
.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1.5em;
}
.card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

#card-container {
    display: flex;
    flex-direction: row;
}
</style>