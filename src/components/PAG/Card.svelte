<script>
	export let img_name;
	export let title;
	export let subtitle;
</script>

<div class="card">
	<span class="text">
		{#if img_name}
			<img src={`/areas/${img_name}`} alt={img_name} />
		{/if}
		<h1>{title}</h1>
		<h3 class="subtitle">{subtitle || ''}</h3>
	</span>
	<div id="external-content"><slot /></div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-right: 1.5em;

		background-color: var(--secondary-color);
		width: 16em;
		height: 12em;
		border: 1px solid var(--contrast-color);
		border-radius: 1em;

		box-shadow: 3px 3px 2px 1px var(--accent-shadow);
	}
	img {
		padding-top: 1em;

		width: 90%;
	}
	.text {
		padding: 0 0.5em;
		text-align: center;
	}
	h1 {
		font-size: larger;
	}
	h3 {
		font-size: small;
		font-style: italic;
	}
	#external-content {
		width: 100%;
		padding: 0.5em 0;
	}
	#expand {
		font-size: 0.7em;
		padding: 2px;
		margin-right: 1em;
		background-color: var(--contrast-color);
		color: var(--secondary-color);
		border-radius: 0.5em;
		aspect-ratio: 1;
		text-align: center;
	}
</style>
