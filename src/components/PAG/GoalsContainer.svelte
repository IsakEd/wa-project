<script>
  import Card from "./Card.svelte";
  import GoalCard from "./GoalCard.svelte";
  import { areas } from "../../store";
  import { get, writable } from "svelte/store";
  import AddCard from "./AddCard.svelte";

  const indexStore = writable(0); // Store with the index value
  $: index = get(indexStore);
  let selectedGoals = get(areas)[$indexStore].goals;

  // This is done because the store is based on two other stores. A derived store can't be used since it only takes one parameter

  indexStore.subscribe((newIndex) => {
    selectedGoals = get(areas)[newIndex].goals;
  });

  function addGoal(event) {
    const newGoalWithId = {
      ...event.detail.goalObject,
      id: selectedGoals.length,
    };

    // ! Mutation
    const newAreas = get(areas);
    newAreas[$indexStore].goals = [
      ...newAreas[$indexStore].goals,
      newGoalWithId,
    ];

    areas.set(newAreas); // Works but does not re-render
  }
</script>

<div class="content">
  <div id="areas">
    <h1>Areas</h1>
    <div class="card-container" id="areas">
      {#each $areas as area}
        <Card
          on:click={() => indexStore.set(area.id - 1)}
          title={area.name}
          img_name={area.image}
        />
      {/each}
    </div>
  </div>

  <div id="goals">
    <h1>Goals</h1>
    <div class="card-container" id="projects">
      {#each selectedGoals as goal (goal.id)}
        <div id="card-container">
          <GoalCard {goal} />
        </div>
      {/each}
      <AddCard on:newGoal={addGoal} />
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
