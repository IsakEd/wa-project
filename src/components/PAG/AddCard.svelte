<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Modal from "../../lib/Modal.svelte";
  let showModal = false;

  let name = "";
  let measurement = "";
  let start = 0;
  let current = 0;
  let finish = 100;
  let deadline = new Date();

  function addGoal() {
    let currentDate = new Date();

    dispatch("goal", {
      name: name,
      measurement: measurement,
      dateCreated: currentDate,
      start: start,
      current: current,
      finish: fininsh,
      deadline: deadline,
    });
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => (showModal = true)} class="card">
  <img id="add" src="/plus.svg" alt="add" />
</div>
<Modal bind:showModal>
  <h2 slot="header">Add a goal</h2>
  <div class="contents">
    <div class="spaced">What do you want to achieve?</div>
    <input class="spaced" type="text" bind:value={name} />
    <div class="spaced">what metric do you want to track by?</div>
    <input class="spaced" type="text" bind:value={measurement} />
    <div class="spaced">start point</div>
    <input class="spaced" type="number" bind:value={start} />
    <div class="spaced">your current progress</div>
    <input class="spaced" type="number" bind:value={current} />
    <div class="spaced">goal value</div>
    <input class="spaced" type="number" bind:value={finish} />
    <div class="spaced">what's the deadline?</div>
    <input class="spaced" type="date" bind:value={deadline} />
    <button on:click={addGoal}>save</button>
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
