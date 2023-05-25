<script>
	import Card from './Card.svelte';
	import ProgressBar from '../../lib/ProgressBar.svelte';
	import TimeProgressBar from '../../lib/TimeProgressBar.svelte';
	export let goal;
</script>
<div class="container">
	<Card title={goal.name} subtitle={goal.measurement}>
		<span class="progress-container"><TimeProgressBar type="date" {...goal} /></span>
		<span class="progress-container"><ProgressBar type="numerical" {...goal} /></span>
	
	</Card>
</div>


<style>

	.progress-container {
		width: 100%;
	}

</style>
