<script>
	import '../app.css';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<link rel="preconnect" href="https://rsms.me/" />
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
	{#if data.deploymentEnv === 'production'}
		<script
			src="https://beamanalytics.b-cdn.net/beam.min.js"
			data-token="5ef93360-2cba-4abc-841b-cfabe3abcff7"
			async
		></script>
	{/if}
</svelte:head>

<slot />
