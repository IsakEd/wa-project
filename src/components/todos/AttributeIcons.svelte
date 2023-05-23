<script>
	export let attributes;
</script>

<div class="container">
	{#each attributes as attribute}
		<img
			id={`inline-${attribute}`}
			class={`inline-attribute`}
			src={`/attributes/${attribute}.svg`}
			alt={attribute}
		/>
	{/each}
</div>

<style>
	.container {
		display: flex;
		align-items: center;
	}

	.inline-attribute {
		height: 1em;
		width: 1em;
	}
</style>
