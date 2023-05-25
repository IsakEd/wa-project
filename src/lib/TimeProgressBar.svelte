<script>
	import { minimalDateString } from './minimalDateString';
	export let dateCreated;
	export let deadline;
	let progress = 0;
	let startLabel;
	let endLabel;

	let currentTime = new Date();
	progress =
		(currentTime.getTime() - dateCreated.getTime()) /
		(deadline.getTime() - dateCreated.getTime());
	startLabel = minimalDateString(dateCreated);
	endLabel = minimalDateString(deadline);

</script>

<div class="container">
	<div class="indicator-row">
		<span class="indicator">{startLabel}</span><span class="indicator">{endLabel}</span>
	</div>
	<div class="progress-bar">
		<div class="progress-bar" id="progress" style="--progress: {progress};" />
	</div>
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
	.indicator-row {
		width: 85%;
		color: var(--contrast-color);
		font-size: smaller;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	#progress {
		background-color: var(--text-color);
		opacity: 50%;
		/* set dynamically in the JS */
		width: calc(100% * var(--progress));
	}
</style>
