<script>
	import Modal from "../lib/Modal.svelte";
	let showModal = false;
	const reset = () => {
		localStorage.clear();
		location.reload();
	}
</script>

<div class="header">
	<button class="invisible"> <img class="header-icon" src="/menu.svg" alt="menu" /> </button>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<h1>WA project</h1>
	<button on:click={()=>showModal=true} class="invisible"> <img class="header-icon" src="/settings.svg" alt="menu" /> </button>

</div>

<Modal bind:showModal>
	<h2>Settings</h2>
	<button on:click={reset}>clear all data</button>
</Modal>

<style>
	h1 {
		font-size: larger;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: bold;
		flex: 1;
		text-align: center;
	}

	.header {
		padding: 0 0.5rem;
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
