<script>
  export let areaName;
  import ActionButton from "../../lib/ActionButton.svelte";
  import { createEventDispatcher } from "svelte";
  import yyyymmdd from "../../lib/yyyymmdd";
  const dispatch = createEventDispatcher();
  import Modal from "../../lib/Modal.svelte";
  let showModal = false;

  let name = "";
  let measurement = "";
  let start = 0;
  let current = 0;
  let finish = 100;

  let startDate = yyyymmdd(new Date());
  let deadline = yyyymmdd(new Date());

  function addGoal() {
    dispatch("newGoal", {
      goalObject: {
        name: name,
        measurement: measurement,
        dateCreated: new Date(startDate),
        start: start,
        current: current,
        finish: finish,
        deadline: new Date(deadline),
      },
    });
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => (showModal = true)} class="card">
  <img id="add" src="/plus.svg" alt="add" />
</div>
<Modal bind:showModal>
  <h2 slot="header">Add a goal to {areaName}</h2>
  <div class="contents">
    <div>What do you want to achieve?</div>
    <input type="text" bind:value={name} />
    <div>what metric do you want to track by?</div>
    <input type="text" bind:value={measurement} />
    <div>start point</div>
    <input type="number" bind:value={start} />
    <div>start date</div>
    <input type="date" bind:value={startDate} />
    <div>your current progress</div>
    <input type="number" bind:value={current} />
    <div>goal value</div>
    <input type="number" bind:value={finish} />
    <div>what's the deadline?</div>
    <input type="date" bind:value={deadline} />
    <br />
    <ActionButton on:click={addGoal}>Add</ActionButton>
  </div>
</Modal>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 1.5em;
    padding-bottom: 0.5em;

    background-color: transparent;
    width: 12em;
    height: 12em;
    border: 1px dashed var(--contrast-color);
    border-radius: 1em;

    box-shadow: 3px 3px 2px 1px var(--accent-shadow);
  }
  #add {
    width: 60%;
    aspect-ratio: 1 / 1;
    opacity: 50%;
  }
  .card:hover #add {
    opacity: 100%;
  }
</style>
