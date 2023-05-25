<script>
</script>

<button on:click class="action-button"><slot /></button>

<style>
	.action-button {
		color: whitesmoke;
		border-radius: 5px;
		background-color: var(--primary-button);
		border: none;
		border-radius: 10%;
	}
	.action-button :hover {
		background-color: var(--contrast-color) !important;
	}
</style>
