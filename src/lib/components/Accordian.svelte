<script>
	export let open = false;
	import { slide } from 'svelte/transition';
	const handleClick = () => (open = !open);
</script>

<div class="accordion border-solid border-b-2 border-slate-200">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div role="button" tabindex="0" class="header" on:click={handleClick} aria-expanded={open}>
		<div class="text">
			<slot name="head" />
		</div>
		<span>
			<svg
				style="tran"
				width="20"
				height="20"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
			>
		</span>
	</div>

	{#if open}
		<div class="details" transition:slide>
			<slot name="details" />
		</div>
	{/if}
</div>

<style>
	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}
	svg {
		transition: transform 0.2s ease-in;
	}
	div.accordion {
		margin: 1rem 0;
	}

	div.header {
		display: flex;
		width: 100%;
	}

	div.header .text {
		flex: 1;
		margin-right: 5px;
	}

	div.details {
		padding: 1rem;
	}
</style>
