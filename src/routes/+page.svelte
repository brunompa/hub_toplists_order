<script>
	import Review from '../lib/components/Review.svelte';
	export let data;
</script>

<div class="px-2">
	<a href="/admin">Admin</a>
	<div class="w-full text-center bg-yellow-500 py-4 hidden lg:flex">
		<div class="w-3/12">Casino</div>
		<div class="w-3/12">Bonus</div>
		<div class="w-3/12">Features</div>
		<div class="w-3/12">Play</div>
	</div>
	<div class="flex flex-col flex-wrap sm:flex-row lg:flex-col">
		{#each data.items as item}
			<Review {item} />
		{/each}
	</div>
</div>
