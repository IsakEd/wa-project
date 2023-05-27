<script>
  import Card from "./Card.svelte";
  import GoalCard from "./GoalCard.svelte";
  import { areas } from "../../store";
  import { get, writable } from "svelte/store";
  import AddCard from "./AddCard.svelte";
  //import { toLocalStorage } from "../../internal-adapters/toLocalStorage";
  // TODO: fix the problem of implicit unwanted date conversion when writing to localStorage... It breaks the progress bar
  //$: toLocalStorage("areas", $areas);

  const indexStore = writable(0); // Stores the id of the currently selected area
  $: index = get(indexStore);
  let selectedGoals = get(areas)[$indexStore].goals;

  // This is done because the store is based on two other stores. A derived store can't be used since it only takes one parameter

  indexStore.subscribe((newIndex) => {
    selectedGoals = get(areas)[newIndex].goals;
  });

  function addGoal(event) {
    const newGoalWithId = {
      ...event.detail.goalObject,
      id: index * 100 + selectedGoals.length,
    };

    // ! Mutation
    const newAreas = get(areas);
    newAreas[$indexStore].goals = [
      ...newAreas[$indexStore].goals,
      newGoalWithId,
    ];
    console.log(newAreas);
    areas.set(newAreas); // Works but does not re-render
    selectedGoals = get(areas)[$indexStore].goals;
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
      <AddCard areaName={get(areas)[$indexStore].name} on:newGoal={addGoal} />
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
