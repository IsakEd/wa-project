<script>
	import Modal from '../lib/Modal.svelte'
	export let start;
	export let current;
	export let finish;
	export let unit;
	let progress = 0;
	let startLabel;
	let endLabel;

    let showModal = false;
	let currentProgress = current;

	$: progress = Math.abs(currentProgress - start) / Math.abs(finish - start);
	startLabel = start;
	endLabel = finish; 



</script>

<div class="container">
	<div class="indicator-row">
		<span class="indicator">{startLabel}</span><span class="indicator">{endLabel}</span>
	</div>
	<div class="progress-bar">
		<div class="progress-bar" id="progress" style="--progress: {progress};" />
	</div>
	<button on:click={() => (showModal = true)} class="invisible">
		<div class="note"><em>click to update</em></div>
	</button>

	<Modal bind:showModal>
		<h2 slot="header">
			Update your progress
		</h2>
		<div class="contents">
			<div class="spaced"><em>measure: {unit}</em></div>
			<input class="spaced" type="number" bind:value={currentProgress}>
		</div>


	</Modal>

</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.progress-bar {
		width: 80%;
		background-color: var(--tertiary-color);
		height: 4px;
		background-color: gray;
		border: none;
		border-radius: 2px;
	}

	.contents {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.spaced{
		margin-bottom: .5em;
	}

	.indicator-row {
		width: 85%;
		color: var(--contrast-color);
		font-size: smaller;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	#progress {
		background-color: #5fa022;
		/* set dynamically in the JS */
		width: calc(100% * var(--progress));
	}
</style>
