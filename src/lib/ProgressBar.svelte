<script>
	import { minimalDateString } from './minimalDateString';
	export let subjectiveProgress;
	export let start;
	export let current;
	export let finish;
	export let dateCreated;
	export let deadline;
	export let type;
	let progress = 0;
	let startLabel;
	let endLabel;

	if (type == 'numerical') {
		
		progress = Math.abs(current - start) / Math.abs(finish - start);
		startLabel = start;
		endLabel = finish;
	} else if (type == 'date') {
		let currentTime = new Date();
		progress =
			(currentTime.getTime() - dateCreated.getTime()) /
			(deadline.getTime() - dateCreated.getTime());
		startLabel = minimalDateString(dateCreated);
		endLabel = minimalDateString(deadline);
	} else {
		progress = subjectiveProgress;
	}
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
		background-color: #5fa022;
		/* set dynamically in the JS */
		width: calc(100% * var(--progress));
	}
</style>
