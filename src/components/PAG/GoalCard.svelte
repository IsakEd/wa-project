<script>
  import Card from "./Card.svelte";
  import ProgressBar from "../../lib/ProgressBar.svelte";
  import TimeProgressBar from "../../lib/TimeProgressBar.svelte";
  export let goal;
</script>

<div class="container">
  <Card title={goal.name} subtitle={goal.measurement}>
    <span class="progress-container"
      ><TimeProgressBar
        dateCreated={goal.dateCreated}
        deadline={goal.deadline}
      /></span
    >
    <span class="progress-container"
      ><ProgressBar
        start={goal.start}
        current={goal.current}
        finish={goal.finish}
        unit={goal.unit}
      /></span
    >
  </Card>
</div>

<style>
  .progress-container {
    width: 100%;
  }
</style>
