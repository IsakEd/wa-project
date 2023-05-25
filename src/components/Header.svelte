<script>
</script>

<div class="header">
	<button class="invisible"> <img class="header-icon" src="/menu.svg" alt="menu" /> </button>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<h1 on:click={() => (showModal = true)}>My page</h1>
	<button class="invisible"> <img class="header-icon" src="/settings.svg" alt="menu" /> </button>

</div>

<style>
	h1 {
		font-size: larger;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: bold;
		flex: 1;
		text-align: center;
	}

	.header {
		padding: 0 0.25rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: var(--secondary-color);
		border-bottom: 1px solid var(--contrast-color);
	}

	.header-icon {
		height: 2em;
		width: 2em;
		stroke: black;
	}
</style>
