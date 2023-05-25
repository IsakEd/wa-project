<script>
	import Card from './Card.svelte';
	import GoalCard from './GoalCard.svelte';
	import { goals, areas } from '../../store';
    let selectedArea = areas[0];
</script>



<div class="content">
    <div id="areas">
		<h1>Areas</h1>
		<div class="card-container" id="areas">
			{#each $areas as area}
				<Card title={area.name} img_name={area.image} />
			{/each}
		</div>
	</div>

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
    flex-direction: column;
    justify-content: left;
    padding-left: 1.5em;
}
.card-container {
    display: flex;
    flex-direction: row;
}

#card-container {
    display: flex;
    flex-direction: row;
}
</style>